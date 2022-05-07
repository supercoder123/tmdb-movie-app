import React from 'react';
import styled from 'styled-components';
import { space, typography, color, TypographyProps, SpaceProps, ColorProps } from 'styled-system';

interface TextStyleProps extends TypographyProps, SpaceProps, ColorProps {
    children: string | number;
	limit?: number;
    color?: string
}

const TextWrapper = styled('p')<TextStyleProps>(
	{
		boxSizing: 'border-box',
	},
	space,
	typography,
	color
);

export const Text = ({
	children,
	limit,
	...props
}: TextStyleProps) => {
	const text = limit && typeof children === 'string' ? `${children.substring(0, limit)}...` : children;

	return (
		<TextWrapper color="white" {...props}>
			{text}
		</TextWrapper>
	);
};
