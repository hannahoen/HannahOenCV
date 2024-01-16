'use client';

import styled from "styled-components";

const Container = styled.div`
    position: relative;
    display: flex;
    height: 100vh;
    width: 100%;
    z-index: 990;
`;

const Portfolio: React.FC = () => {
    return (
        <Container id="portfolio">
            portfolio
        </Container>
    );
};

export default Portfolio;
