import React from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export interface AppHeaderViewConfiguration {
	onMenuClick: () => void;
}
export function AppHeaderView({ onMenuClick }: AppHeaderViewConfiguration) {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
						onClick={() => onMenuClick()}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Sensor Statistics
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
