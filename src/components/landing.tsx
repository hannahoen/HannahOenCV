'use client';

import { useEffect, useState } from "react";
import styled from "styled-components";

import { landingText, sharedText } from "@/assets/data";

const Hero = styled.div`
    position: relative;
    display: flex;
    height: calc(100vh - 48px - 128px);
    width: 100%;
`;

const Heading = styled.div`
	position: relative;
	align-self: center;
	justify-self: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	line-height: normal;
	width: 100%;
	font-weight: 300;
	gap: 24px;
`;

const HeadingLine = styled.div`
	font-size: 3rem;
	@media(max-width: 900px) {
		text-align: center;
	}
	
	@media(max-width: 600px) {
		font-size: 2rem;
	}
`;

const Highlight = styled.span`
	color: var(--tertiary);
	font-weight: 500;
`;

const ContactBtn = styled.a`
	border-radius: 8px;
	padding: 12px 24px;

	background: var(--tertiary);
	cursor: pointer;
	
	color: var(--secondary);
	font-weight: 500;
	font-size: 18px;

	&:hover {
		background: var(--quinary);
	}
`;

export const Landing: React.FC = () => {
	const [isMounted, setIsMounted] = useState<boolean>(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	} else {
		return (
			<Hero id="hero">
				<Heading>
					<div>
						<HeadingLine>{landingText.highlight}<Highlight>{sharedText.firstName}</Highlight>! 👋</HeadingLine>
						<HeadingLine>{landingText.intro}</HeadingLine>
					</div>
					<ContactBtn href="#contact">{sharedText.contact}</ContactBtn>
				</Heading>
			</Hero>
		);
	}
};
