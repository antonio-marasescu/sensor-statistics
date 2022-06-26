import { Navigate, Route, Routes } from 'react-router-dom';
import { AppNavigationContainer } from './components/containers/app-navigation-container/app-navigation-container';
import { LandingPage } from './components/pages/landing-page/landing-page';
import { SensorCreatePage } from './components/pages/sensor-create-page/sensor-create-page';
import { SensorEditPage } from './components/pages/sensor-edit-page/sensor-edit-page';

export function App() {
	return (
		<>
			<AppNavigationContainer></AppNavigationContainer>
			<Routes>
				<Route path="/sensors/create" element={<SensorCreatePage />} />
				<Route path="/sensors/:id" element={<SensorEditPage />} />
				<Route path="/sensors" element={<LandingPage />} />
				<Route path="/" element={<Navigate replace to="/sensors" />} />
			</Routes>
		</>
	);
}

export default App;
