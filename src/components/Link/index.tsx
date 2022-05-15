import { motion } from 'framer-motion';
import React from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';
import styled from 'styled-components';



const LinkMotionWrapper = styled(motion.div)`

`;

const RouterLinkWrapper = styled(RouterLink)`
    text-decoration: none;
`;


export const Link =  ({children, to, ...props}: LinkProps) => {
	return (
		<LinkMotionWrapper>
			<RouterLinkWrapper to={to} {...props}>{children}</RouterLinkWrapper>
		</LinkMotionWrapper>
	);
};



