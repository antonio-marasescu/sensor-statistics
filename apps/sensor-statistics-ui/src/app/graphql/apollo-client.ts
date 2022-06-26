import { environment } from '../../environments/environment';
import { ApolloClient, InMemoryCache } from '@apollo/client';

export const ApiClient = new ApolloClient({
	uri: environment.api,
	cache: new InMemoryCache(),
});
