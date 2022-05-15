import React, { useCallback, useMemo } from 'react';
import { Carousel, CarouselSlide } from '@/components/Carousel';
import { MovieDetailsCard } from '@/components/MovieDetailsCard';
import { Text } from '@/components/Text';
import { useAppSelector } from '@/hooks/redux-hooks';
import { AnimatedPage } from '@/components/AnimatedPage';
import { useDispatch } from 'react-redux';
import { getMovies } from '../../slices/movies';

export const MoviePage = () => {
	const movies = useAppSelector((state) => state.movies.now_playing.movies);
	const dispatch = useDispatch();

	return (
		<AnimatedPage>
			<Text fontSize={20} fontWeight="bold" mx={'20px'}>
				Now Playing in theaters
			</Text>
			<Carousel
				onScrollEnd={() => {
					dispatch(getMovies('now_playing'));
				}}
			>
				{movies.map(
					({
						id,
						title,
						backdrop_path,
						release_date,
						vote_average,
						overview
					}) => {
						return (
							<CarouselSlide key={id}>
								<MovieDetailsCard
									movieId={id}
									title={title}
									date={release_date}
									votes={vote_average}
									description={overview}
									imgUrl={`https://image.tmdb.org/t/p/w780/${backdrop_path}`}
								/>
							</CarouselSlide>
						);
					}
				)}
			</Carousel>
		</AnimatedPage>
	);
};
