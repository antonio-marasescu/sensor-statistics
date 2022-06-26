import React, { useState } from 'react';
import {
	AppSidePanelItem,
	AppSidePanelView,
	IconTypeConfiguration,
} from '../../presentational/app-sidepanel-view/app-sidepanel-view';
import { AppHeaderView } from '../../presentational/app-header-view/app-header-view';
import { useNavigate } from 'react-router-dom';

export function AppNavigationContainer() {
	const [isDrawerOpened, setIsDrawerOpened] = useState<boolean>(false);
	const navigate = useNavigate();
	const menuItems: AppSidePanelItem[] = [
		{ text: 'Landing Page', iconType: IconTypeConfiguration.home, link: '/sensors' },
		{ text: 'Create Sensor', iconType: IconTypeConfiguration.create, link: '/sensors/create' },
	];

	function menuItemSelected(menuItem: AppSidePanelItem) {
		setIsDrawerOpened(false);
		navigate(menuItem.link);
	}

	return (
		<header role="navigation">
			<AppHeaderView onMenuClick={() => setIsDrawerOpened(true)}></AppHeaderView>
			<AppSidePanelView
				opened={isDrawerOpened}
				menuItems={menuItems}
				onItemSelected={(menuItem) => menuItemSelected(menuItem)}
				onClose={() => setIsDrawerOpened(false)}
			></AppSidePanelView>
		</header>
	);
}
