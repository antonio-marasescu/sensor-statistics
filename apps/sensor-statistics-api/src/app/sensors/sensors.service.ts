import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSensorInput, Sensor, SensorType } from '@sensor-statistics/api-types';
import { v4 } from 'uuid';
import { RedisService } from '../shared/redis/redis.service';

@Injectable()
export class SensorsService {
	private readonly _sensorKeyPrefix = 'sensors';

	constructor(private redisService: RedisService) {}

	async retrieveAll(sensorType: string): Promise<Sensor[]> {
		const data = await this.redisService.getAllByType<Sensor>(`${this._sensorKeyPrefix}#`);
		if (sensorType === SensorType.ALL.toString()) {
			return data;
		}

		return data.filter((s) => s.sensorType.toString() === sensorType);
	}

	async retrieveById(id: string): Promise<Sensor> {
		const sensor = await this.redisService.get<Sensor>(`${this._sensorKeyPrefix}#${id}`);
		if (!sensor) {
			throw new NotFoundException();
		}
		return sensor;
	}

	async createSensor(sensorInput: CreateSensorInput): Promise<Sensor> {
		const newSensor: Sensor = {
			id: v4(),
			name: sensorInput.name,
			sensorType: SensorType[sensorInput.sensorType],
			description: sensorInput.description,
			data: [],
		};
		await this.redisService.set<Sensor>(`${this._sensorKeyPrefix}#${newSensor.id}`, newSensor);
		return newSensor;
	}
}
