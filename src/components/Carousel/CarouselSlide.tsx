import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

type CarouselSlideProps = {
    children: React.ReactNode;
}

const CarouselSlideWrapper = styled(motion.div)`
    flex-shrink: 0;
`;

export const CarouselSlide = ({ children }: CarouselSlideProps) => {
	return (
		<CarouselSlideWrapper whileHover={{ y: -5}}>{children}</CarouselSlideWrapper>
	);
};
