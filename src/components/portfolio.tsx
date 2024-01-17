'use client';

import styled from "styled-components";
import Header from "./shared/header";

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

const Portfolio: React.FC = () => {
    return (
        <Container id="portfolio">
            <Content>
                <Header text="Portfolio"/>
            </Content>
        </Container>
    );
};

export default Portfolio;
