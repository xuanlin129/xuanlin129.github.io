import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Home/Hero';
import Introduction from '../components/Home/Introduction';
import Portfolio from '../components/Home/Portfolio';
import Contact from '../components/Home/Contact';

function Home() {
  return (
    <Wrapper>
      <div>
        <Hero />
        <Introduction />
      </div>
      <Portfolio />
      <Contact />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  padding-top: var(--navbar-height);
`;

export default Home;
