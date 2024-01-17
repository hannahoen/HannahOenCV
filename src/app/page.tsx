'use client'

import Landing from '@/components/landing';
import About from '@/components/About/about';
import styled from 'styled-components';
import Portfolio from '@/components/portfolio';
import Contact from '@/components/contact';

const Container = styled.div`
  @media(max-width: 600px) {
    padding: 24px;
  }
`;

export default function Home() {
  return (
    <Container>
      <Landing />
      <About />
      <Portfolio />
      <Contact />
    </Container>
    
  )
}
