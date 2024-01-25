'use client'

import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Landing } from '@/components/landing';
import About from '@/components/about/about';
import Portfolio from '@/components/portfolio/portfolio';
import { Contact } from '@/components/contact';

const Container = styled.div`
	padding-bottom: 64px;
	display: flex;
	flex-direction: column;
	gap: 128px;

	@media(max-width: 1023px) {
		padding: 24px;
		gap: 64px;
	}
`;

export default function Home() {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
        return null;
    } else {
		return (
			<Container>
				<Landing />
				<About />
				<Portfolio />
				<Contact />
			</Container>
		)
	}
}
