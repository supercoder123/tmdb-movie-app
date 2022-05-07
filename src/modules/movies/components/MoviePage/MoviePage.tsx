import React from 'react';
import { Carousel, CarouselSlide } from '@/components/Carousel';
import { MovieDetailsCard } from '@/components/MovieDetailsCard';
import { Text } from '@/components/Text';
import { useAppSelector } from '@/hooks/redux-hooks';
import { PageWrapper } from '@/styles';

export const MoviePage = () => {
	const movies = useAppSelector((state) => state.movies.nowPlaying.movies);

	return (
		<PageWrapper>
			<Text fontSize={20} fontWeight="bold" mx={'20px'}>
				In theaters
			</Text>
			<Carousel>
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
		</PageWrapper>
	);
};
