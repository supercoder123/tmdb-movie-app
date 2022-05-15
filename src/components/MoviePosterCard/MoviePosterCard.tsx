import React from 'react';
import styled from 'styled-components';
import { Link } from '@/components/Link';
import { Text } from '@/components/Text';
import { motion } from 'framer-motion';

type MoviePosterCardProps = {
    imgUrl: string;
    title: string;
	movieId: number;
}

const MoviePosterCardWrapper = styled(motion.div)<{imgUrl: string}>`
    border-radius: 8px;
    height: 185px;
    width: 126px;
	margin: 20px 10px;
    flex-direction: column;
    display: flex;
	overflow: hidden;
	background: url(${(props) => props.imgUrl});
	background-position: top center;
	background-repeat: no-repeat;
	background-size: cover;
`;

const TextWrapper = styled(motion.div)`
	opacity: 0;
	height: 100%;
	width: 100%;
	display: flex;
	background: linear-gradient(0deg, rgba(2,0,36,0.9) 0%, rgba(2,0,36,0.5) 38%, rgba(0,0,0,0.029) 100%);
`;

const MoviePosterCardWithoutMemo = ({movieId, title, imgUrl}: MoviePosterCardProps) => {
	return (
		<Link to={`/movies/${movieId}`}>
			<MoviePosterCardWrapper imgUrl={imgUrl}>
				<TextWrapper initial={{y: 20}} whileHover={{opacity: 1, y: 0}} transition={{easings: 'linear', duration: 0.3}}>
					<Text fontWeight="bold" fontSize={18} mt={'auto'} mx={10} marginBottom={10}>{title}</Text>
				</TextWrapper>
			</MoviePosterCardWrapper>
		</Link>
	);
};

export const MoviePosterCard = React.memo(MoviePosterCardWithoutMemo);
