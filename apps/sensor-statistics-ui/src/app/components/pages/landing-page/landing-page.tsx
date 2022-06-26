import React from 'react';
import { Container } from '@mui/material';
import { SensorListContainer } from '../../containers/sensor-list-container/sensor-list-container';

export function LandingPage() {
	return (
		<Container maxWidth={false}>
			<SensorListContainer></SensorListContainer>
		</Container>
	);
}
