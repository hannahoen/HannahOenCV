'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";

import { aboutText, education, experiences, personalInfo } from "@/assets/data";
import hannah from "../../assets/images/hannah.png";
import { Header } from "../shared/header";
import { ExperienceNode } from "./experienceNode";

const Container = styled.div`
    position: relative;
    display: flex;
    min-height: 100px;
    width: 100%;
    z-index: 990;
    padding-top: 72px;

    display: flex;
    justify-content: center;
`;

const Content = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 64px;

    @media(max-width: 1023px) {
      	width: 100%;
    }
`;

const ExperienceAndEducation = styled.div`
	display: flex;
	flex-direction: row;
	gap: 24px;
	width: 100%;

	@media(max-width: 700px) {
		flex-direction: column;
	}

	.education, .experiences {
		width: 50%;
		display: flex;
		flex-direction: column;
		gap: 24px;
		
		@media(max-width: 700px) {
			width: 100%;
		}
	}

	.heading {
		text-transform: uppercase;
		width: 100%;
		text-align: center;
		font-size: 24px;
		font-weight: 600;
	}
`;

const Intro = styled.div`
	display: flex;
	align-items: center;
	gap: 72px;

	@media(max-width: 1023px) {
		width:100%;
		flex-direction: column;
	}

	.description {
		width: 50%;
		font-size: 19px;
		font-weight: 500;
		line-height: 30px;

		@media(max-width: 1023px) {
			width:100%;
		}
	}

	.hannah img {
		width: 300px;
		object-fit: cover;
		border-radius: 50%;

		@media(max-width: 300px) {
			width:100%;
			height: auto;
		}
	}
`;

const PersonalInfoContainer = styled.div`
	width: 30%;
	display: flex;
	flex-direction: column;
	gap: 24px;

	@media(max-width: 500px) {
		width:100%;
	}

	@media(min-width: 500px) and (max-width: 1023px) {
		width:100%;
		flex-direction: row;
	}
	
	.box {
		width: 100%;
		border: 1px solid var(--primary);
		border-radius: 20px;
		padding: 16px;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		gap: 16px;

		.label {
			color: var(--tertiary);
			font-weight: 600;
		}
	}
`;

const PersonalInfoNode = styled.div`
	width: 100%;
	border: 1px solid var(--primary);
	border-radius: 20px;
	padding: 16px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	gap: 16px;

	.label {
		color: var(--tertiary);
		font-weight: 600;
	}
`;

export const About: React.FC = () => {
	const [isMounted, setIsMounted] = useState<boolean>(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
        return null;
    } else { 
		return (
			<Container id="about">
				<Content>
					<Header text="About" />
					<Intro>
						<div className="hannah">
							<Image
								src={hannah}
								alt="Hannah"
								height="300"
								width="300"
							/>
						</div>
						<div className="description">{aboutText.description}</div>
						<PersonalInfoContainer>
							{personalInfo.map(p => {
								return (
									<PersonalInfoNode key={Math.random()}>
										<div className="label">{p.label}</div>
										<div>{p.info}</div>
									</PersonalInfoNode>
								)
							})}
						</PersonalInfoContainer>
					</Intro>
					<ExperienceAndEducation>
						<div className="experiences">
							<div className="heading">{aboutText.experiences}</div>
							{experiences.map(exp => {
								return (
									<ExperienceNode
										key={Math.random()}
										data={exp}
									/>
								)
							})}
						</div>
						<div className="education">
							<div className="heading">{aboutText.education}</div>
							<ExperienceNode
								isExperience={false}
								data={education}
							/>
						</div>
					</ExperienceAndEducation>
				</Content>
			</Container>
		);
	}	
};
