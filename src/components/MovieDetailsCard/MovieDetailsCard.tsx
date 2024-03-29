import { motion } from 'framer-motion';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';
import { Flex } from '@/components/Flex';
import { Link } from '@/components/Link';
import { Text } from '@/components/Text';

export type MovieDetailsCardProps = {
    imgUrl: string;
    title: string;
	date: string;
	votes: number;
	description: string;
	movieId: number;
}

const MovieDetailsCardWrapper = styled(motion.div)`
    display: flex;
	margin: 20px;
`;

const CardContent = React.memo(styled.div<{imgUrl: string}>`
    display: flex;
    flex-direction: column;
	background: linear-gradient(0deg,rgb(14 14 14),rgba(24,22,24,0.3)), url(${(props) => props.imgUrl});
	background-position: top center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 250px;
	width: 500px;
	padding: 20px;
	border-radius: 12px;
`);

const MovieDetails = styled(motion.div)`
	margin-top: auto;
`;

const MovieDetailsCardWithoutMemo = ({movieId, title, imgUrl, date, votes, description}: MovieDetailsCardProps) => {
	const year = date ? new Date(date).getFullYear() : '';

	return (
		<Link to={`/movies/${movieId}`}>
			<MovieDetailsCardWrapper>
				<CardContent imgUrl={imgUrl}>
					<MovieDetails>
						<Flex alignItems='center' justifyContent={'space-between'}>
							<Text fontWeight="bold" fontSize={24}>{title}</Text>
							<Flex alignItems='flex-start'>
								<Text fontSize={18} marginRight={'3px'}>{votes}</Text>
								<FaStar size={'18px'} color='yellow' />
							</Flex>
						</Flex>
						<Text fontSize={16} my="5px">{year}</Text>
						<Text fontSize={14} limit={160}>{description}</Text>
					</MovieDetails>
				</CardContent>
			</MovieDetailsCardWrapper>
		</Link>
	);
};

export const MovieDetailsCard = React.memo(MovieDetailsCardWithoutMemo);
