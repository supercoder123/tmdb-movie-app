import React from 'react';
import styled from 'styled-components';
import {
	flexbox,
	space,
	layout,
	FlexboxProps,
	SpaceProps,
	LayoutProps,
} from 'styled-system';

interface FlexWrapperProps extends FlexboxProps, SpaceProps, LayoutProps {
	children: React.ReactNode;
}

const FlexWrapper = styled('div')<FlexWrapperProps>(flexbox, space, layout);

export const Flex = ({ children, ...props }: FlexWrapperProps) => {
	return <FlexWrapper display={'flex'} {...props}>{children}</FlexWrapper>;
};
