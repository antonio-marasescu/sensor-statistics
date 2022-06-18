import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateSensorDataInput, SensorData } from '@sensor-statistics/api-types';
import { RedisService } from '../shared/redis/redis.service';

@Injectable()
export class SensorDataService {
	private readonly _sensorDataKeyPrefix = 'sensorData';

	constructor(private redisService: RedisService) {}

	async retrieveById(id: string): Promise<SensorData[]> {
		const sensorData = await this.redisService.get<SensorData[]>(`${this._sensorDataKeyPrefix}#${id}`);

		if (!sensorData) {
			return [];
		}
		return sensorData || [];
	}

	async createSensorData(sensorInput: CreateSensorDataInput): Promise<SensorData> {
		if (!sensorInput.sensorId) {
			throw new BadRequestException();
		}

		const newSensorData: SensorData = {
			timestamp: sensorInput.timestamp,
			value: sensorInput.value,
		};
		const previousData = await this.retrieveById(sensorInput.sensorId);
		await this.redisService.set(`${this._sensorDataKeyPrefix}#${sensorInput.sensorId}`, [
			...previousData,
			newSensorData,
		]);
		return newSensorData;
	}
}
