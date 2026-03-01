import React from 'react';
import styled, { keyframes } from 'styled-components';

function AnimateWaveDivider(props) {
  const { height = '100px', bgColor = '#000', invert = false, style = {} } = props;

  return (
    <Container $height={height} $bgColor={bgColor} $invert={invert} style={style}>
      <div className="wave-container">
        {Array.from({ length: 3 }).map((_, idx) => (
          <div className="wave" key={idx} />
        ))}
      </div>
    </Container>
  );
}

const scroll = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-836px);
  }
`;

const Container = styled.div`
  width: 100%;
  overflow: hidden;

  & > .wave-container {
    display: flex;
    animation: ${scroll} 15s linear infinite;

    & > .wave {
      width: 1000px;
      padding-top: ${(props) => props.$height};
      background: ${(props) => props.$bgColor};
      transform: rotateX(${(props) => (props.$invert ? '180deg' : '0deg')});
      -webkit-clip-path: url(#wave);
      clip-path: url(#wave);
      flex-shrink: 0;

      & ~ div {
        margin-left: -164px;
      }
    }
  }
`;

export default AnimateWaveDivider;
