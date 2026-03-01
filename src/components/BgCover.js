import React from 'react';
import styled from 'styled-components';
import BgSrc from '@/assets/bg-cover.png';

export default function BgMain() {
  return (
    <Wrapper>
      <div className="bg-base" />
      <div className="bg-texture" />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  position: fixed;
  z-index: -999;
  width: 100%;
  height: 100%;

  & > .bg-base,
  & > .bg-texture {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  & > .bg-base {
    background: #fffffff7;
  }
  & > .bg-texture {
    background: url(${BgSrc}) repeat center center/cover;
    mix-blend-mode: soft-light;
    opacity: 0.5;
    mix-blend-mode: overlay;
  }
`;
