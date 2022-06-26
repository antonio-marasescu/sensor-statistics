import { SensorListItem, SensorListView } from '../../presentational/sensor-list-view/sensor-list-view';
import { useQuery } from '@apollo/client';
import { RetrieveSensorsQuery } from '../../../graphql/queries/sensors.queries';
import { LinearProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function SensorListContainer() {
	const navigate = useNavigate();
	const { loading, error, data } = useQuery<{ sensors: SensorListItem[] }>(RetrieveSensorsQuery);

	function onView(sensor: SensorListItem) {
		navigate(`/sensors/${sensor.id}`);
	}

	if (loading) return <LinearProgress color="secondary"></LinearProgress>;

	if (error) return <div>{error.message}</div>;

	return <SensorListView sensors={data?.sensors || []} view={(sensor) => onView(sensor)}></SensorListView>;
}
