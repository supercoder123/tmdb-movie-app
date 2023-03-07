import React, { useEffect } from 'react';
import WebFont from 'webfontloader';
import GlobalStyles from './themes/global.style';
import { useDispatch } from 'react-redux';
import { getMovies } from './modules/movies';
import {
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import { getConfiguration } from '@/slices/configuration';
import { MoviePage } from '@/modules/movies';
import { TVPage } from '@/modules/tv';
import { Navbar } from '@/components/Navbar';
import { AnimatePresence } from 'framer-motion';
import { MovieDetailsPage } from './modules/movies/components/MovieDetailsPage';

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
		dispatch(getMovies('now_playing'));
		dispatch(getMovies('popular'));
		dispatch(getMovies('top_rated'));
		dispatch(getMovies('upcoming'));

	
		dispatch(getConfiguration());
		WebFont.load({
			google: {
				families: ['Roboto:300,400,600,700']
			}
		});
	}, []);

	return (
		<>
			<GlobalStyles />
			{/* <Navbar/> */}
			<AnimatePresence>
				<Switch>
					<Route exact path="/movies/:id">
						<MovieDetailsPage />
					</Route>
					<Route exact path="/movies">
						<MoviePage />
					</Route>
					<Route exact path="/tv">
						<TVPage />
					</Route>
					<Redirect from="/" to="/movies" />
				</Switch>
			</AnimatePresence>
		</>
	);
}

export default App;
