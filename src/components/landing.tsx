'use client';

import styled from "styled-components";
import Button from "./shared/button";

const Hero = styled.div`
    position: relative;
    display: flex;
    height: 100vh;
    width: 100%;
    z-index: 990;
`;

const Heading = styled.div`
  position: relative;
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: normal;
  width: fit-content;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  color: #fafafa;
  font-weight: 300;
  z-index: 990;
`;

const HeadingLine = styled.div`
  font-size: 3rem;
`;

const Highlight = styled.span`
  color: var(--tertiary);
`;

const Landing: React.FC = () => {
    return (
        <Hero id="hero">
            <Heading>
                <HeadingLine>Hello, I&apos;m <Highlight>Hannah</Highlight>! 👋</HeadingLine>
                <HeadingLine>And I&apos;m a front-end web developer.</HeadingLine>
                <Button 
                    text="Contact"
                    primary
                />
            </Heading>
        </Hero>
    );
};

export default Landing;
