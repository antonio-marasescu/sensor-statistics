import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { SensorsService } from './sensors.service';
import { CreateSensorDataInput, CreateSensorInput, Sensor, SensorData } from '@sensor-statistics/api-types';
import { SensorDataService } from './sensor-data.service';

@Resolver('Sensor')
export class SensorsResolver {
	constructor(private sensorsService: SensorsService, private sensorDataService: SensorDataService) {}

	@Query()
	async sensors(
		@Args('sensorType')
		sensorType: string
	): Promise<Sensor[]> {
		return this.sensorsService.retrieveAll(sensorType);
	}

	@Query()
	async sensor(
		@Args('id')
		id: string
	): Promise<Sensor> {
		return this.sensorsService.retrieveById(id);
	}

	@Mutation()
	async createSensor(@Args('createSensorInput') createSensorInput: CreateSensorInput): Promise<Sensor> {
		return this.sensorsService.createSensor(createSensorInput);
	}

	@Mutation()
	async createSensorData(
		@Args('createSensorDataInput') createSensorDataInput: CreateSensorDataInput
	): Promise<SensorData> {
		return this.sensorDataService.createSensorData(createSensorDataInput);
	}

	@ResolveField('data')
	async getPosts(@Parent() sensor: Sensor): Promise<SensorData[]> {
		const { id } = sensor;
		return this.sensorDataService.retrieveById(id);
	}
}
