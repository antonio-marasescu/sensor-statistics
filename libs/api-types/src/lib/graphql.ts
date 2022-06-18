/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum SensorType {
	ALL = 'ALL',
	POSITION = 'POSITION',
	PRESSURE = 'PRESSURE',
	TEMPERATURE = 'TEMPERATURE',
	FORCE = 'FORCE',
	VIBRATION = 'VIBRATION',
	HUMIDITY = 'HUMIDITY',
}

export interface CreateSensorInput {
	name: string;
	sensorType: SensorType;
	description?: Nullable<string>;
}

export interface CreateSensorDataInput {
	sensorId: string;
	timestamp: number;
	value: string;
}

export interface IQuery {
	sensors(sensorType?: Nullable<SensorType>): Sensor[] | Promise<Sensor[]>;
	sensor(id: string): Nullable<Sensor> | Promise<Nullable<Sensor>>;
}

export interface IMutation {
	createSensor(createSensorInput: CreateSensorInput): Nullable<Sensor> | Promise<Nullable<Sensor>>;
	createSensorData(createSensorDataInput: CreateSensorDataInput): Nullable<SensorData> | Promise<Nullable<SensorData>>;
}

export interface Sensor {
	id: string;
	name: string;
	sensorType: SensorType;
	description?: Nullable<string>;
	data: SensorData[];
}

export interface SensorData {
	timestamp: number;
	value: string;
}

type Nullable<T> = T | null;
