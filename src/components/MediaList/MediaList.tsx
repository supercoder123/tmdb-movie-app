import React, { useCallback, useEffect } from 'react';
import { Carousel, CarouselSlide } from '@/components/Carousel';
import { Text } from '@/components/Text';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { getMovies, MovieKey } from '@/modules/movies';
import { MovieDetailsCard } from '@/components/MovieDetailsCard';
import { Movie } from '@/types';
import { MoviePosterCard } from '../MoviePosterCard';
import styled from 'styled-components';


interface MediaListProps {
	title: string;
	movieKey: MovieKey;
	list: Movie[];
} 

const MediaListWrapper = styled.div`
	margin: 0 20px;
`;

export const MediaList = ({ title, movieKey, list, ...props}: MediaListProps) => {
	const dispatch = useAppDispatch();
	const getPopularMovies = useCallback(() => dispatch(getMovies(movieKey)), []);
	const movieConfig = useAppSelector(state => state.configuration.images);
	console.log(title);
	return (
		<>
			<Text fontSize={24} fontWeight="bold" mx={'40px'}>
				{title}
			</Text>
			<MediaListWrapper>
				<Carousel {...props} onScrollEnd={getPopularMovies} >
					{list.map(
						({
							id,
							title,
							poster_path,
						}, i) => {
							const imgUrl = `${movieConfig.base_url}w185/${poster_path}`;
							return (
								<CarouselSlide  key={`${id}_${i}`}>
									<MoviePosterCard
										movieId={id}
										title={title}
										imgUrl={imgUrl}
									/>
								</CarouselSlide>
							);
						}
					)}</Carousel>
			</MediaListWrapper>
		</>
	);
};
