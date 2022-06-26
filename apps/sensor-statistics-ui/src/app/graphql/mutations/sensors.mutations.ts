import { gql } from '@apollo/client';

export const CreateSensorMutation = gql(`
mutation CreateSensor($createSensorInput: CreateSensorInput!) {
  createSensor(createSensorInput: $createSensorInput){
      id
  }
}
`);
