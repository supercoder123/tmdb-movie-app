import React from 'react';
import styled from 'styled-components';

export interface InfiniteScrollProps {
    children: React.ReactNode;
    onScrollEnd: () => void;
}
  
const InfiniteScrollWrapper = styled.div`
    overflow: inherit;
    display: inherit;
`;

export const InfiniteScroll = ({children, onScrollEnd}: InfiniteScrollProps) => {
	return (
		<InfiniteScrollWrapper onScroll={(e: React.UIEvent<HTMLDivElement>) => {
			const innerContainer = e.target as HTMLDivElement;
			if (innerContainer.scrollLeft + innerContainer.clientWidth >= innerContainer.scrollWidth && onScrollEnd) {
				onScrollEnd();
			}
		}} >{children}</InfiniteScrollWrapper>
	);
};
