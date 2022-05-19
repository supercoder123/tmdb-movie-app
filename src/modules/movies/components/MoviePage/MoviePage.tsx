import React from 'react';
import { Text } from '@/components/Text';
import { AnimatedPage } from '@/components/AnimatedPage';
import { NowPlaying } from '../NowPlaying';
import { MediaList } from '@/components/MediaList';
import { useAppSelector } from '@/hooks/redux-hooks';

export const MoviePage = () => {
	const {top_rated, popular, upcoming } = useAppSelector((state) => state.movies);
	return (
		<AnimatedPage>
			<Text fontSize={24} fontWeight="bold" mx={'40px'} mt={80}>
				Now Playing in theaters
			</Text>
			<NowPlaying />
			<MediaList list={top_rated.movies} title="Top Rated" movieKey="top_rated"/>
			<MediaList list={upcoming.movies}  title="Upcoming" movieKey="upcoming"/>
			<MediaList list={popular.movies}  title="Popular" movieKey="popular"/>
		</AnimatedPage>
	);
};
