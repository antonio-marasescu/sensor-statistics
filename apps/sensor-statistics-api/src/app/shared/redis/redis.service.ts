import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService {
	private _redis: Redis;

	constructor() {
		this._redis = new Redis();
	}

	async getAllByType<T>(type: String): Promise<T[]> {
		const keys = await this._redis.keys(`${type}*`);
		if (!keys || keys.length === 0) {
			return [];
		}
		const values = await this._redis.mget(keys);
		return values.map((value) => JSON.parse(value)) || [];
	}

	async get<T>(key: string): Promise<T | null> {
		const value = await this._redis.get(key);
		return value ? JSON.parse(value) : null;
	}

	async set<T>(key: string, value: T): Promise<void> {
		await this._redis.set(key, JSON.stringify(value));
	}
}
