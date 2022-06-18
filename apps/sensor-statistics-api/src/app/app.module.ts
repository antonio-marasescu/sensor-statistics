import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { environment } from '../environments/environment';
import { GRAPHQL_TYPES_PATH } from './app.config';
import { SensorsModule } from './sensors/sensors.module';
import { RedisModule } from './shared/redis/redis.module';

@Module({
	imports: [
		RedisModule,
		SensorsModule,
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			debug: !environment.production,
			playground: !environment.production,
			include: [SensorsModule],
			typePaths: ['./**/*.graphql'],
			definitions: {
				path: GRAPHQL_TYPES_PATH,
			},
		}),
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
