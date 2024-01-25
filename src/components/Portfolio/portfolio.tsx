'use client';

import { useEffect, useState } from "react";
import styled from "styled-components";

import { projects } from "@/assets/data";
import { Header } from "../shared/header";
import { ProjectNode } from "./projectNode";

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
    } else {
        return (
            <Container id="portfolio">
                <Content>
                    <Header text="Portfolio"/>
                    <Projects>
                        {projects.map(project => {
                            return (
                                <ProjectNode project={project} key={Math.random()}/>
                            )
                        })}
                    </Projects>
                </Content>
            </Container>
        );  
    }   
};

export default Portfolio;
