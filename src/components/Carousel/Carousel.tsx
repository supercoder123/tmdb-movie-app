import { motion, MotionProps } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { InfiniteScroll, InfiniteScrollProps } from '../InfiniteScroll';

interface CarouselProps extends InfiniteScrollProps {
  children: React.ReactNode;
}

const CarouselContainer = styled(motion.div)`
    width: 100%;
    overflow: hidden;
    padding: 20px;
    padding-left: 0;
`;

const CarouselInner = styled(motion.div)`
    display: flex;
    width: 100%;
	overflow-x: scroll;
	&::-webkit-scrollbar {
		display: none;
	}
`;

export const Carousel = ({ children, onScrollEnd }: CarouselProps) => {

	return (
		<CarouselContainer>
			<CarouselInner>
				<InfiniteScroll onScrollEnd={onScrollEnd}>
					{children}
				</InfiniteScroll>
			</CarouselInner>
		</CarouselContainer>);
};
