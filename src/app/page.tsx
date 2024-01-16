'use client'

import Landing from '@/components/landing';
import About from '@/components/About/about';
import styled from 'styled-components';
import Portfolio from '@/components/portfolio';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <>
      <Landing />
      <About />
      <Portfolio />
      <Contact />
    </>
    
  )
}
