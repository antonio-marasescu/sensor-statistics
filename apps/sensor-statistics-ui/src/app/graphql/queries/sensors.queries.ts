import { gql } from '@apollo/client';

export const RetrieveSensorsQuery = gql(`
  query Sensors {
    sensors {
      id
      name
      sensorType
    }
  }
`);

export const RetrieveSensorByIdQuery = gql(`
  query Sensor($sensorId: ID!) {
    sensor(id: $sensorId) {
      id
      name
      description
      sensorType
    },
  }
`);

export const RetrieveSensorDataByIdQuery = gql(`
  query Sensor($sensorId: ID!) {
    sensor(id: $sensorId) {
      data {
        timestamp
        value
      }
    },
  }
`);
