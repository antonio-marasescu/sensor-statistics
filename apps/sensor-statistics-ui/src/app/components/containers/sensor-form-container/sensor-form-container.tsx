import React, { useState } from 'react';
import { SensorFormGroup, SensorFormView } from '../../presentational/sensor-form-view/sensor-form-view';
import { SensorType } from '@sensor-statistics/api-types';
import { Box, Container, Tab, Tabs } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { SensorDataListContainer } from '../sensor-data-list-container/sensor-data-list-container';

export interface SensorFormConfiguration {
	readonly: boolean;
	initialFormGroup: SensorFormGroup;
	hasData: boolean;
	onSave: (form: SensorFormGroup) => void;
}

export const defaultSensorFormConfiguration: Partial<SensorFormConfiguration> = {
	initialFormGroup: {
		name: '',
		sensorType: SensorType.ALL,
		description: '',
	},
};

export function SensorFormContainer(props: SensorFormConfiguration) {
	const navigate = useNavigate();
	const [tab, setTab] = useState<number>(0);
	const [form, setForm] = useState<SensorFormGroup>({
		name: props.initialFormGroup.name,
		sensorType: props.initialFormGroup.sensorType,
		description: props.initialFormGroup.description,
	});
	const availableSensorTypes = Object.values(SensorType);

	function onFormFieldChange(key: string, value: string): void {
		setForm({ ...form, [key]: value });
	}

	function onClose(): void {
		navigate('/sensors');
	}

	return (
		<Container sx={{ m: 1 }}>
			<Box sx={{ paddingTop: 1, borderBottom: 1, borderColor: 'divider' }}>
				<Tabs value={tab} onChange={(_, value) => setTab(value)} aria-label="Sensor Tabs">
					<Tab label="Sensor Information" id="tab-sensor-info" />
					{props.hasData && <Tab label="Sensor Collected Data" id="tab-sensor-data" />}
				</Tabs>
			</Box>
			{tab === 0 && (
				<SensorFormView
					availableSensorTypes={availableSensorTypes}
					name={form.name}
					sensorType={form.sensorType}
					description={form.description}
					readonly={props.readonly || false}
					onFieldChange={(key, value) => onFormFieldChange(key, value as string)}
					onSave={() => props.onSave(form)}
					onClose={onClose}
				></SensorFormView>
			)}
			{tab === 1 && props.hasData && <SensorDataListContainer></SensorDataListContainer>}
		</Container>
	);
}
