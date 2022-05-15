import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import styled from 'styled-components';

interface CarouselSlideProps extends MotionProps {
    children: React.ReactNode;
}

const CarouselSlideWrapper = styled(motion.div)`
    flex-shrink: 0;
	cursor: pointer;
`;

export const CarouselSlide = ({ children, ...props }: CarouselSlideProps) => {
	return (
		<CarouselSlideWrapper  whileHover={{ y: -5 }} {...props}>{children}</CarouselSlideWrapper>
	);
};
