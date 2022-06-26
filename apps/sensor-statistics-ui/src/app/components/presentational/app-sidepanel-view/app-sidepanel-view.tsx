import React from 'react';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { List } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export enum IconTypeConfiguration {
	home,
	create,
	addCircle,
}

export interface AppSidePanelItem {
	text: string;
	iconType: IconTypeConfiguration;
	link: string;
}

export interface AppSidePanelConfiguration {
	opened: boolean;
	menuItems: AppSidePanelItem[];
	onItemSelected: (menuItem: AppSidePanelItem) => void;
	onClose: () => void;
}

export function AppSidePanelView({ opened, menuItems, onItemSelected, onClose }: AppSidePanelConfiguration) {
	function renderIcon(param: IconTypeConfiguration) {
		switch (param) {
			case IconTypeConfiguration.home:
				return <HomeIcon></HomeIcon>;
			case IconTypeConfiguration.create:
				return <CreateIcon></CreateIcon>;
			case IconTypeConfiguration.addCircle:
				return <AddCircleIcon></AddCircleIcon>;
			default:
				return '';
		}
	}

	return (
		<Drawer anchor="left" open={opened} onClose={() => onClose()}>
			<List>
				{menuItems.map((item, index) => (
					<ListItem key={item.text} disablePadding>
						<ListItemButton>
							<ListItemIcon>{renderIcon(item.iconType)}</ListItemIcon>
							<ListItemText primary={item.text} onClick={() => onItemSelected(item)} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Drawer>
	);
}
