'use client';

import styled from "styled-components";
import Button from "../shared/button";

const Container = styled.div`
    position: relative;
    display: flex;
    height: 100vh;
    width: 100%;
    z-index: 990;
`;

const About: React.FC = () => {
    return (
        <Container id="about">
          about
        </Container>
    );
};

export default About;
