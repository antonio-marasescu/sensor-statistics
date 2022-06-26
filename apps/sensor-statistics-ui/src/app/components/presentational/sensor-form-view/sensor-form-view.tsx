import React from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { SensorType } from '@sensor-statistics/api-types';

export interface SensorFormGroup {
	name: string | undefined;
	sensorType: SensorType;
	description: string | undefined;
}

export interface SensorFormViewConfiguration extends SensorFormGroup {
	availableSensorTypes: SensorType[];
	readonly: boolean;
	onFieldChange: (fieldId: string, value: unknown) => void;
	onSave: () => void;
	onClose: () => void;
}

export function SensorFormView({
	name,
	sensorType,
	description,
	availableSensorTypes,
	readonly,
	onFieldChange,
	onSave,
	onClose,
}: SensorFormViewConfiguration) {
	return (
		<React.Fragment>
			<Box component="form" sx={{ mt: 1 }} noValidate autoComplete="off">
				<TextField
					sx={{ mt: 1 }}
					required
					id="name"
					label="Name"
					variant="outlined"
					fullWidth
					value={name}
					disabled={readonly}
					onChange={(event) => onFieldChange('name', event.target.value)}
				/>
				<FormControl fullWidth sx={{ mt: 1 }}>
					<InputLabel id="sensor-type-label">Sensor Type</InputLabel>
					<Select
						labelId="sensor-type-label"
						id="sensorType"
						label="Sensor Type"
						value={sensorType}
						disabled={readonly}
						onChange={(event) => onFieldChange('sensorType', event.target.value)}
					>
						{availableSensorTypes.map((sensorType) => (
							<MenuItem id={sensorType} key={sensorType} value={sensorType}>
								{sensorType}
							</MenuItem>
						))}
					</Select>
				</FormControl>
				<TextField
					sx={{ mt: 1 }}
					id="description"
					label="Description"
					multiline
					rows={6}
					variant="outlined"
					disabled={readonly}
					value={description}
					fullWidth
					onChange={(event) => onFieldChange('description', event.target.value)}
				/>
				<Box sx={{ mt: 1, display: 'flex', flexDirection: 'row-reverse' }}>
					<Button variant="contained" sx={{ ml: 2 }} onClick={() => onSave()} disabled={readonly}>
						Save
					</Button>
					<Button variant="outlined" onClick={() => onClose()}>
						Close
					</Button>
				</Box>
			</Box>
		</React.Fragment>
	);
}
