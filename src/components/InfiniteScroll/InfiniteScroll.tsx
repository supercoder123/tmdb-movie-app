import { motion, MotionProps } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

export interface InfiniteScrollProps extends MotionProps {
    children: React.ReactNode;
    onScrollEnd: () => void;
}
  
const InfiniteScrollWrapper = styled(motion.div)`
    overflow: inherit;
    display: inherit;
`;

export const InfiniteScroll = ({children, onScrollEnd, ...props}: InfiniteScrollProps) => {
	return (
		<InfiniteScrollWrapper
			{...props} 
			onScroll={(e: React.UIEvent<HTMLDivElement>) => {
				const innerContainer = e.target as HTMLDivElement;
				if (innerContainer.scrollLeft + innerContainer.clientWidth >= innerContainer.scrollWidth && onScrollEnd) {
					onScrollEnd();
				}
			}}>
			{children}
		</InfiniteScrollWrapper>
	);
};
