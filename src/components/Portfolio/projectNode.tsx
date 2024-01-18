'use client';

import Image from "next/image";
import { StaticImageData } from "next/image";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    width: 100%;
    gap: 48px;

    @media(max-width: 700px) {
        flex-direction: column;
        gap: 24px;
        padding-bottom: 32px;
        border-bottom: 1px solid var(--secondary)

        &:nth-last-child {
            border: none;
        }
    }
`;

const ImageBox = styled.div`
    width: 60%;

    @media(max-width: 700px) {
        width: 100%;
    }
`;

const TextBox = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    gap: 24px;

    .title {
        font-size: 20px;
    }

    .tech {
        font-family: Share Tech Mono;
    }

    @media(max-width: 700px) {
        width: 100%;

        .title, .tech {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 16px;
            text-align: center;
        }
    }
`;

const CompanyLink = styled.a`
    color: var(--tertiary);
    text-transform: uppercase;
    font-weight: 700;
    font-size: 14px;

    &:hover {
        text-decoration: underline;
        color: var(--quinary);
    }

    @media(max-width: 700px) {
        width: 40%;
    }
`;

interface IProps {
    project: IProjects;
}

interface IProjects {
    title: string;
    company: string;
    url: string;
    image: StaticImageData;
    description: string;
    techStack: string;
}

const ProjectNode: React.FC<IProps> = ({
    project
}) => {
    return (
        <Container>
                <ImageBox>
                    <Image
                        src={project.image}
                        alt={project.company}
                        layout="responsive"
                    />    
                </ImageBox> 
                <TextBox>
                    <div className="title">{project.title} <span>|</span> <CompanyLink href={project.url} target="_blank">{project.company}</CompanyLink></div>
                    <div className="tech">{project.techStack}</div>
                    <div className="description">{project.description}</div>
                </TextBox>
        </Container>
    );
};

export default ProjectNode;
