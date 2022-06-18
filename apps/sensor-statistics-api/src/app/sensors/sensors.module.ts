import { Module } from '@nestjs/common';
import { SensorsService } from './sensors.service';
import { SensorsResolver } from './sensors.resolver';
import { SensorDataService } from './sensor-data.service';
import { RedisModule } from '../shared/redis/redis.module';

@Module({
	imports: [RedisModule],
	providers: [SensorsService, SensorDataService, SensorsResolver],
	exports: [SensorsService, SensorDataService],
})
export class SensorsModule {}
