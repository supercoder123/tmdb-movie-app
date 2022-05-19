import { AnimatedPage } from '@/components/AnimatedPage';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL, API_KEY } from '@/config';
import { Text } from '@/components/Text';
import styled from 'styled-components';
import { Flex } from '@/components/Flex';
import { useAppSelector } from '@/hooks/redux-hooks';
import { motion } from 'framer-motion';

async function getMovieDetails(id: string) {
	const queryParams = {
		api_key: API_KEY,
		language: 'en',
		append_to_response:'watch/providers'
	};
	const response = await fetch(
		`${BASE_URL}/movie/${id}?${new URLSearchParams({ ...queryParams })}`
	);
	const data = await response.json();
	return data;
}

type Genre = {
	id: number;
	name: string;
}

type MovieDetails = {
	original_title: string;
	backdrop_path: string;
	overview: string;
	homepage: string;
	poster_path: string;
	genres: Genre;
	'watch/providers': any;
}

const MovieDetailsContainer = styled(motion.div)`
	padding: 40px;
	height: calc(100vh - 63px);
	/* background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7469581582633054) 55%, rgba(0,0,0,0.38001137955182074) 100%), linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.7469581582633054) 55%, rgba(0,0,0,0) 100%); */
	background: linear-gradient(90deg, rgba(0,0,0,1) 1%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%);
	background-repeat: no-repeat;
	background-size: cover;
	z-index: 2;
	position: relative;
`;

const Poster = styled.img`
	border-radius: 12px;
	height: 350px;
	margin: 40px 0;
`;

const Backdrop = styled(motion.img)`
	position: absolute;
	top: 0;
	height: 100%;
	width: 60%;
	object-position: center center;
	object-fit: cover;
	z-index: 0;
	right: 0;
	/* mix-blend-mode: overlay; */
	/* filter: brightness(0.5); */
	/* background: linear-gradient(90deg, rgba(0,0,0,0.9262298669467787) 0%, rgba(0,0,0,0.7693671218487395) 55%, rgba(0,0,0,0.413624824929972) 100%); */
`;

const MovieInfo = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 50%;
	z-index: 2;
`;

const MovieDetailsWrapper = styled.div`
	position: relative;
	overflow: hidden;
`;

export const MovieDetailsPage = () => {
	const { id } = useParams<{id: string}>();
	const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
	const movieConfig = useAppSelector(state => state.configuration.images);

	useEffect(() => {
		async function fetchMovies() {
			const response = await getMovieDetails(id);

			setMovieDetails(response);
		}
		fetchMovies();
	}, []);
	console.log(movieDetails);
	
	if (!movieDetails) {
		return <div>Loading</div>;
	}

	return (
		<AnimatedPage>
			<MovieDetailsWrapper>
				<Backdrop initial={{x: 50}} animate={{x: 0}} exit={{x: 50}} src={`${movieConfig.base_url}original/${movieDetails.backdrop_path}`} alt="background" />
				<MovieDetailsContainer initial={{x: -20}} animate={{x: 0}} exit={{x: -20}}>
					<MovieInfo>
						<Flex>
							<Poster src={`${movieConfig.base_url}w500/${movieDetails.poster_path}`} alt="Poster" />
							<Flex margin={40} flexDirection="column">
								<Text fontWeight="bold" fontSize={50}>{movieDetails.original_title}</Text>
								<Text marginTop={10} fontSize={20} color={'#d8d9d9'}>{movieDetails.overview}</Text>
							</Flex>
						</Flex>
					</MovieInfo>
				</MovieDetailsContainer>
			</MovieDetailsWrapper>

		</AnimatedPage>
	);
};
