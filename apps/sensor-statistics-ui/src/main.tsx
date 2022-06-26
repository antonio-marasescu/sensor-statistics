import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';
import { ApolloProvider } from '@apollo/client';
import { ApiClient } from './app/graphql/apollo-client';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<StrictMode>
		<BrowserRouter>
			<ApolloProvider client={ApiClient}>
				<App />
			</ApolloProvider>
		</BrowserRouter>
	</StrictMode>
);
