import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import { Sensor } from '@sensor-statistics/api-types';

export type SensorListItem = Omit<Sensor, 'data'>;

export interface SensorListViewConfiguration {
	sensors: SensorListItem[];
	view: (sensor: SensorListItem) => void;
}

export function SensorListView({ sensors, view }: SensorListViewConfiguration) {
	return (
		<Grid container spacing={2} paddingTop={2}>
			{sensors.map((sensor) => (
				<Grid item xs={4} key={sensor.id}>
					<Card variant="outlined">
						<CardContent>
							<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
								ID: {sensor.id}
							</Typography>
							<Typography variant="h5" component="div">
								{sensor.name}
							</Typography>
							<Typography sx={{ mt: 1, mb: 2, fontSize: 14 }} color="text.secondary">
								Type: {sensor.sensorType}
							</Typography>
							<Typography variant="body2">{sensor.description}</Typography>
						</CardContent>
						<CardActions>
							<Button variant="outlined" size="small" onClick={() => view(sensor)}>
								Open
							</Button>
						</CardActions>
					</Card>
				</Grid>
			))}
		</Grid>
	);
}
