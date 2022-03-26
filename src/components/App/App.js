import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header, Main } from 'components';
import Routes from 'routes';
import store from 'redux/store';

const App = () => (
	<ReduxProvider store={store}>
		<Router>
			<Header />
			<Main>
				<Routes />
			</Main>
		</Router>
	</ReduxProvider>
);

export default App;
