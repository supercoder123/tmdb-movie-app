import { PageWrapper } from '@/styles';
import React from 'react';

export const AnimatedPage = ({ children }: { children: React.ReactNode }) => {
	return (
		<PageWrapper
			initial={{ opacity: 0, x: -20 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: 20 }}
		>
			{children}
		</PageWrapper>
	);
};
