import React from 'react';
import {
	defaultSensorFormConfiguration,
	SensorFormContainer,
} from '../../containers/sensor-form-container/sensor-form-container';
import { useMutation } from '@apollo/client';
import { CreateSensorMutation } from '../../../graphql/mutations/sensors.mutations';
import { Backdrop, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { SensorFormGroup } from '../../presentational/sensor-form-view/sensor-form-view';

export function SensorCreatePage() {
	const navigate = useNavigate();
	const [mutateFunction, { data, loading, error }] = useMutation(CreateSensorMutation);

	async function onSave(form: SensorFormGroup): Promise<void> {
		await mutateFunction({ variables: { createSensorInput: { ...form } } });
		navigate(`/sensors/${data.createSensor.id}`);
	}

	if (loading)
		return (
			<Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
				<CircularProgress color="inherit" />
			</Backdrop>
		);

	if (error) return <div>{error.message}</div>;

	return (
		<SensorFormContainer
			initialFormGroup={defaultSensorFormConfiguration.initialFormGroup!}
			readonly={false}
			hasData={false}
			onSave={(form) => onSave(form)}
		></SensorFormContainer>
	);
}
