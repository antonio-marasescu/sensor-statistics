import React, { useEffect, useState } from 'react';
import { SensorDataListView } from '../../presentational/sensor-data-list-view/sensor-data-list-view';
import { useLazyQuery } from '@apollo/client';
import { RetrieveSensorDataByIdQuery } from '../../../graphql/queries/sensors.queries';
import { useParams } from 'react-router-dom';
import { Backdrop, CircularProgress } from '@mui/material';
import { SensorData } from '@sensor-statistics/api-types';

export function SensorDataListContainer() {
	let { id } = useParams();
	const [getSensorData, { loading, error, data }] = useLazyQuery(RetrieveSensorDataByIdQuery);
	const [sensorData, setSensorData] = useState<SensorData[]>([]);

	useEffect(() => {
		if (!id) {
			return;
		}
		getSensorData({ variables: { sensorId: id } });
	}, [id]);

	useEffect(() => {
		if (!data) {
			return;
		}

		setSensorData([...data.sensor.data]);
	}, [data]);

	if (loading)
		return (
			<Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={true}>
				<CircularProgress color="inherit" />
			</Backdrop>
		);

	if (error) return <div>{error.message}</div>;

	return <SensorDataListView data={sensorData}></SensorDataListView>;
}
