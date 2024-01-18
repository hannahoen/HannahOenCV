'use client';

import styled from "styled-components";
import Header from "../shared/header";
import { useEffect, useState } from "react";
import dipai from "../../assets/images/dipai.png";
import axbit from "../../assets/images/axbit.png";
import blink from "../../assets/images/blink.png";
import ProjectNode from "./projectNode";

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

const Projects = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;

    @media(max-width: 700px) {
        gap: 72px;
    }
`;

const Portfolio: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);
  
    if (!isMounted) {
      return null;
    }

    const projects = [
        {
            title: "Website Redesign & maintenance",
            company: "Dipai AS",
            url: "https://dipai.no",
            image: dipai,
            description: "Redesign of Dipai's website by creating a new wordpress theme for their existing Wordpress CMS, and implementing design from UX designer's Figma sketches.",
            techStack: "Wordpress, PHP, Bootstrap, Figma"

        }, {
            title: "Website Redesign",
            company: "Axbit AS",
            url: "https://axbit.no",
            image: axbit,
            description: "Redesign of Axbit's website from scratch, using Umbraco headless CMS and React Typescript, and implementing design from UX designer's Figma sketches.",
            techStack: "React, TypeScript, Umbraco, Figma"

        }, {
            title: "Visual content",
            company: "Blink Trafikkskole Ålesund AS",
            url: "https://blinkskole.no",
            image: blink,
            description: "Various advertising posters, design for folder cover and creating a learning document for driving instrctors that is compatible for GoodNotes.",
            techStack: "Figma, Photoshop"

        }
    ]

    return (
        <Container id="portfolio">
            <Content>
                <Header text="Portfolio"/>
                <Projects>
                    {projects.map(project => {
                        return (
                            <ProjectNode project={project}/>
                        )
                    })}
                </Projects>
            </Content>
        </Container>
    );
};

export default Portfolio;
