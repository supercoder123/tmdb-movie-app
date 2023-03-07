import { AnimatedPage } from '@/components/AnimatedPage';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { BASE_URL, API_KEY } from '@/config';
import { Text } from '@/components/Text';
import { GenreIcon } from '@/components/GenreIcon';
import styled from 'styled-components';
import { Flex } from '@/components/Flex';
import { useAppSelector } from '@/hooks/redux-hooks';
import { motion } from 'framer-motion';
import { Loader } from '@/components/Loader';

async function getMovieDetails(id: string) {
	const queryParams = {
		api_key: API_KEY,
		language: 'en',
		append_to_response:'watch/providers,credits'
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

type Cast = {
	name: string;
	profile_path: string;
}

type MovieDetails = {
	original_title: string;
	backdrop_path: string;
	overview: string;
	homepage: string;
	poster_path: string;
	genres: Genre[];
	'watch/providers': any;
	credits: {
		cast: Cast[]
	}
}

const MovieDetailsContainer = styled(motion.div)`
	padding: 40px;
	height: 100vh; 
	/* background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7469581582633054) 55%, rgba(0,0,0,0.38001137955182074) 100%), linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.7469581582633054) 55%, rgba(0,0,0,0) 100%); */
	background: linear-gradient(90deg, rgba(0,0,0,1) 1%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%);
	background-repeat: no-repeat;
	background-size: cover;
	z-index: 2;
	position: relative;
	@media (max-width: 768px) {
		padding: 20px;
		background: linear-gradient(358deg,rgba(0,0,0,1) 1%,rgba(0,0,0,1) 80%,rgba(0,0,0,0) 100%)
	}
`;

const Poster = styled.img`
	border-radius: 12px;
	height: 350px;
	width: 230px;
	min-width: 230px;
	background-color: gainsboro;
	margin: 40px 0;
	@media (max-width: 768px) {
		height: auto;
		min-width: unset;
		width: 130px;
		margin: 20px 0;
	}
`;

const Backdrop = styled(motion.img)`
	position: absolute;
	top: 0;
	height: 100vh;
	width: 60%;
	object-position: center center;
	object-fit: cover;
	z-index: 0;
	right: 0;
	/* mix-blend-mode: overlay; */
	/* filter: brightness(0.5); */
	/* background: linear-gradient(90deg, rgba(0,0,0,0.9262298669467787) 0%, rgba(0,0,0,0.7693671218487395) 55%, rgba(0,0,0,0.413624824929972) 100%); */
	@media (max-width: 768px) {
		width: 100%;
		object-position: top center;
		object-fit: contain;
	}
`;

const MovieInfo = styled.div`
	max-width: 50%;
	z-index: 2;
	@media (max-width: 768px) {
		max-width: unset;
	 }
`;

const MovieDetailsWrapper = styled.div`
	position: relative;
	/* overflow: hidden; */
`;

const Cast = styled.div`
	height: 80px;
	width: 80px;
	border-radius: 50%;
	overflow: hidden;
	background-color: gray;
	flex-shrink: 0;

	img {
		height: 80px;
		width: 80px;
		object-fit: cover;
    	object-position: center center;
	}
	
`;

const BackButton = styled.button`
	font-size: 20px;
	padding: 0;
	border: 0;
	color: white;
	background-color: transparent;
`;

export const MovieDetailsPage = () => {
	const { id } = useParams<{id: string}>();
	const history = useHistory();
	const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
	const movieConfig = useAppSelector(state => state.configuration.images);

	useEffect(() => {
		async function fetchMovies() {
			const response = await getMovieDetails(id);

			setMovieDetails(response);
		}
		fetchMovies();
	}, []);
	
	if (!movieDetails) {
		return <Loader />;
	}

	return (
		<AnimatedPage>
			
			<MovieDetailsWrapper>
				<Backdrop initial={{x: 50}} animate={{x: 0}} exit={{x: 50}} src={`${movieConfig.base_url}original/${movieDetails.backdrop_path}`} alt="background" />
				
				<MovieDetailsContainer initial={{x: -20, opacity: 0}} animate={{x: 0, opacity: 1}} exit={{x: -20, opacity: 0}}>
					<BackButton onClick={() => {
						history.goBack();
					}}>Back</BackButton>
					<MovieInfo>
						<Flex flexDirection={['column', 'row']}>
							<Flex alignItems={['center', 'baseline']}>
								<Poster src={`${movieConfig.base_url}w500/${movieDetails.poster_path}`} alt="Poster" />		
								<Text display={['block', 'none']} fontWeight="bold" fontSize={30} margin={20}>{movieDetails.original_title}</Text>
							</Flex>
							<Flex margin={[10, 40]} flexDirection="column" maxWidth={['100%', '70%']}>
								<Text display={['none', 'block']} fontWeight="bold" fontSize={50}>{movieDetails.original_title}</Text>
								<Text marginTop={10} fontSize={20} marginBottom={26} color={'#d8d9d9'} minHeight={200}>{movieDetails.overview}</Text>
								<Text my={10} fontSize={20} fontWeight="bold" color={'#d8d9d9'}>Genre</Text>
								<Flex overflowX='scroll'>
									{
										movieDetails.genres.map((genre, i) => {
											return <GenreIcon key={i} genreId={genre.id} />;
										})
									}
								</Flex>						
								<Text mt={30} mb={20} fontSize={20} fontWeight="bold" color={'#d8d9d9'}>The Cast</Text>
								<Flex width={'100%'} overflow="scroll">
									{ 
										movieDetails.credits.cast.map((cast, i) => {
											if (!cast.profile_path) {
												return null;
											}
											return (
												<Flex key={i} flexDirection="column" mx={20} alignItems="center">
													<Cast> 
														<img title={cast.name} src={`${movieConfig.base_url}w185${cast.profile_path}`} alt="Cast Image" />
													</Cast>
													<Text textAlign="center" mt={10} color={'#d8d9d9'}>{cast.name}</Text>
												</Flex>
											);
										})
									}
								</Flex>
							</Flex>
						</Flex>
					</MovieInfo>
				</MovieDetailsContainer>
			</MovieDetailsWrapper>

		</AnimatedPage>
	);
};
