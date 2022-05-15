import React from 'react';
import styled from 'styled-components';
import {Link} from '@/components/Link';
import { Text } from '@/components/Text';
import { motion } from 'framer-motion';

type MoviePosterCardProps = {
    imgUrl: string;
    title: string;
	movieId: number;
}

const MoviePosterCardWrapper = styled.div<{imgUrl: string}>`
    border-radius: 8px;
    height: 185px;
    width: 126px;
	margin: 20px 10px;
    flex-direction: column;
	background: linear-gradient(0deg,rgb(14 14 14),rgba(24,22,24,0.3)), url(${(props) => props.imgUrl});
	background-position: top center;
	background-repeat: no-repeat;
	background-size: cover;
    display: flex;
	overflow: hidden;
`;

const TextWrapper = styled(motion.div)`
	opacity: 0;
	height: 100%;
	width: 100%;
	display: flex;
`;

const MoviePosterCardWithoutMemo = ({movieId, title, imgUrl}: MoviePosterCardProps) => {
	return (
		<Link to={`/movies/${movieId}`}>
			<MoviePosterCardWrapper imgUrl={imgUrl}>
				<TextWrapper initial={{y: -20}} whileHover={{opacity: 1, y: 0}}>
					<Text fontWeight="bold" mt={'auto'} mx={10} marginBottom={10}>{title}</Text>
				</TextWrapper>
			</MoviePosterCardWrapper>
		</Link>
	);
};

export const MoviePosterCard = React.memo(MoviePosterCardWithoutMemo);
