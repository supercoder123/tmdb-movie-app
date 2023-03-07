import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const LoaderWrapper = styled(motion.div)`
	width: 100%;
    height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const LoaderCircle = styled(motion.div)`
	height: 50px;
	width: 50px;
	background-color: purple;
	border-radius: 50%;
`;

export const Loader = () => {
	return (
		<LoaderWrapper>
			<LoaderCircle animate={{scale: [0, 1, 0]}} transition={{ repeat: Infinity }}/>
		</LoaderWrapper>
	);
};