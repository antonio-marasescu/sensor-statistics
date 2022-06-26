import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { SensorData } from '@sensor-statistics/api-types';

export interface SensorDataListViewConfiguration {
	data: SensorData[];
}

export function SensorDataListView({ data }: SensorDataListViewConfiguration) {
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Timestamp</TableCell>
						<TableCell align="right">Value</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((dataRow) => (
						<TableRow key={dataRow.timestamp} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
							<TableCell component="th" scope="row">
								{dataRow.timestamp}
							</TableCell>
							<TableCell align="right">{dataRow.value}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
