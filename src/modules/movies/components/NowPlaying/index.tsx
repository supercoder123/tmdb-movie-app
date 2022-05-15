import React from 'react';
import { Carousel, CarouselSlide } from '@/components/Carousel';
import { MovieDetailsCard } from '@/components/MovieDetailsCard';
import { useAppSelector } from '@/hooks/redux-hooks';
import { useDispatch } from 'react-redux';
import { getMovies } from '../../slices/movies';

export const NowPlaying = () => {
	const movies = useAppSelector((state) => state.movies.now_playing.movies);
	const dispatch = useDispatch();
	return (
		<>
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
					}, i) => {
						return (
							<CarouselSlide key={`${id}_${i}`}>
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
			</Carousel></>
	);
};
