import { SensorFormContainer } from '../../containers/sensor-form-container/sensor-form-container';
import React, { useEffect, useState } from 'react';
import { Backdrop, CircularProgress } from '@mui/material';
import { SensorFormGroup } from '../../presentational/sensor-form-view/sensor-form-view';
import { RetrieveSensorByIdQuery } from '../../../graphql/queries/sensors.queries';
import { useLazyQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

export function SensorEditPage() {
	let { id } = useParams();
	const [getSensor, { loading, error, data }] = useLazyQuery(RetrieveSensorByIdQuery);
	const [form, setForm] = useState<SensorFormGroup | null>(null);

	useEffect(() => {
		if (!id) {
			return;
		}
		getSensor({ variables: { sensorId: id } });
	}, [id]);

	useEffect(() => {
		if (!data) {
			return;
		}
		setForm({ name: data.sensor.name, sensorType: data.sensor.sensorType, description: data.sensor.description });
	}, [data]);

	if (!data || !form)
		return (
			<Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
				<CircularProgress color="inherit" />
			</Backdrop>
		);

	if (loading)
		return (
			<Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
				<CircularProgress color="inherit" />
			</Backdrop>
		);

	if (error) return <div>{error.message}</div>;

	return (
		<SensorFormContainer initialFormGroup={form} readonly={true} onSave={() => {}} hasData={true}></SensorFormContainer>
	);
}
