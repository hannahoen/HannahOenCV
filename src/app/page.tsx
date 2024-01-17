'use client'

import Landing from '@/components/landing';
import About from '@/components/About/about';
import styled from 'styled-components';
import Portfolio from '@/components/portfolio';
import Contact from '@/components/contact';
import { useEffect, useState } from 'react';

const Container = styled.div`
  @media(max-width: 1023px) {
    padding: 24px;
  }
`;

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <Container>
      <Landing />
      <About />
      <Portfolio />
      <Contact />
    </Container>
    
  )
}
