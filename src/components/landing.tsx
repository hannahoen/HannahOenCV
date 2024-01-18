'use client';

import styled from "styled-components";
import { useEffect, useState } from "react";

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
`;

const ContactBtn = styled.a`
    border-radius: 8px;
    padding: 12px 24px;

    background: var(--tertiary);
    cursor: pointer;
    
    color: var(--secondary);
    font-weight: 500;
    font-size: 18px;
`;

const Landing: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
    return (
        <Hero id="hero">
            <Heading>
                <div>
                    <HeadingLine>Hello, I&apos;m <Highlight>Hannah</Highlight>! 👋</HeadingLine>
                    <HeadingLine>And I&apos;m a front-end web developer.</HeadingLine>
                </div>
                <ContactBtn href="#contact">Contact</ContactBtn>
            </Heading>
        </Hero>
    );
};

export default Landing;
