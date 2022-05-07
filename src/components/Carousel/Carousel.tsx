import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

type CarouselProps = {
  children: React.ReactNode;
};

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


export const Carousel = ({ children }: CarouselProps) => {
	const ref = useRef<HTMLDivElement>(null);
	const [width, setWidth] = useState(0);

	useEffect(() => {
		if (ref.current) {
			setWidth(ref.current?.scrollWidth - ref.current?.clientWidth);
		}
	}, [ref.current]);

	return (<CarouselContainer>
		<CarouselInner
			// ref={ref}
			// drag="x"
			// // initial={{x: -20}} 
			// dragConstraints={{ right:0, left: -width  }}
			// dragElastic={1}
			// whileTap={{cursor: 'grabbing'}}
		>
			{children}
		</CarouselInner>
	</CarouselContainer>);
};
