import React, { useEffect } from 'react';
import WebFont from 'webfontloader';
import styled from 'styled-components';
import GlobalStyles from './themes/global.style';
import { useDispatch } from 'react-redux';
import { getNowPlayingMovies } from './modules/movies';
import {
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import { getConfiguration } from '@/slices/configuration';
import { MoviePage } from '@/modules/movies';
import { TVPage } from '@/modules/tv';
import { Navbar } from '@/components/Navbar';

/**
 *
 *
 * Movie:
 *
 * Now playing - first fold
 * Popular
 * Top rated
 * Upcoming
 *
 *
 *
 */

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		// dispatch(getNowPlayingMovies());
		// dispatch(getConfiguration());
		WebFont.load({
			google: {
				families: ['Roboto:300,400,600,700']
			}
		});
	}, []);

	return (
		<>
			<GlobalStyles />
			<Navbar/>
			<Switch>
				<Route exact path="/movies">
					<MoviePage />
				</Route>
				<Route exact path="/tv">
					<TVPage />
				</Route>
				<Redirect from="/" to="/movies" />
			</Switch>
		</>
	);
}

export default App;
