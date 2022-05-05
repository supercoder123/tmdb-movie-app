import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from '@/store';
import {
	BrowserRouter as Router,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from './themes/dark.theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<ThemeProvider theme={darkTheme}>
			<Router>
				<App />
			</Router>
		</ThemeProvider>
	</Provider>
);
