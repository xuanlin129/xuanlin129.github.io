import React from 'react';
import styled, { keyframes } from 'styled-components';
import * as AppActions from '../utils';

function HeroGraphic(props) {
  const { style = { width: '100%' }, color = 'var(--primary-color)' } = props;
  const eyesRef = React.useRef([]);
  const isAnimatingRef = React.useRef(true);

  React.useEffect(() => {
    // Animation duration is 1s + 0.5s delay = 1.5s
    const timer = setTimeout(() => {
      isAnimatingRef.current = false;
    }, 3000);

    const handleMouseMove = (e) => {
      if (isAnimatingRef.current) return;

      eyesRef.current.forEach((eye) => {
        if (!eye) return;
        const parentRect = eye.parentElement.getBoundingClientRect();

        // Eye center
        const eyeCenterX = parentRect.left + parentRect.width / 2;
        const eyeCenterY = parentRect.top + parentRect.height / 2;

        // Angle
        const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);

        // Distance
        // Limit movement to within the white area (approx 10% of width)
        const maxDist = parentRect.width * 0.1;
        const dist = Math.min(maxDist, Math.hypot(e.clientX - eyeCenterX, e.clientY - eyeCenterY) / 5);

        const x = Math.cos(angle) * dist;
        const y = Math.sin(angle) * dist;

        // Since justify-content: center is removed, the pupil starts at left (0).
        // 0.8w pupil in 1.0w socket -> 0.2w spare space.
        // Center of socket is at 0.5w. Center of pupil at default is 0.4w.
        // We need to shift +0.1w to make (0,0) be the visual center.
        const centerOffset = parentRect.width * 0.1;

        eye.style.transform = `translate(${x + centerOffset}px, ${y}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  return (
    <Container style={style}>
      <svg viewBox="0 0 95 111" style={{ width: '100%', position: 'relative' }}>
        <use href="#icon-fany" style={{ fill: color }} />
      </svg>
      <div className="eyes-container">
        <div className="eye-socket">
          <div className="pupil" ref={(el) => (eyesRef.current[0] = el)} />
        </div>
        <div className="eye-socket">
          <div className="pupil" ref={(el) => (eyesRef.current[1] = el)} />
        </div>
      </div>
      <div className="eye-close">
        <svg viewBox="0 0 64 11" style={{ width: '100%' }}>
          <use href="#fany_eye_close" style={{ fill: '#000' }} />
        </svg>
      </div>
    </Container>
  );
}

const doubleBlink = keyframes`
  0% { opacity: 0; }
  10% { opacity: 1; }
  20% { opacity: 1; }
  25% { opacity: 0; }
  40% { opacity: 1; }
  50% { opacity: 1; }
  55% { opacity: 0; }
  100% { opacity: 0; }
`;

const closeEyes = keyframes`
  0% { opacity: 1; }
  10% { opacity: 0; }
  20% { opacity: 0; }
  25% { opacity: 1; }
  40% { opacity: 0; }
  50% { opacity: 0; }
  55% { opacity: 1; }
  100% { opacity: 1; }
`;

const Container = styled.div`
  position: relative;
  pointer-events: none;

  & > .eyes-container {
    position: absolute;
    display: flex;
    width: 30%;
    height: auto;
    aspect-ratio: 2 / 1;
    top: 25%;
    left: 50%;
    transform: translate(-50%, 0);

    & > .eye-socket {
      width: 52%;
      height: auto;
      aspect-ratio: 1 / 1;
      background: #fff;
      border-radius: 50%;
      position: relative;
      display: flex;
      align-items: center;

      & + .eye-socket {
        margin-left: -3.4%;
      }

      & > .pupil {
        width: 80%;
        height: auto;
        aspect-ratio: 1 / 1;
        background: #000;
        border-radius: 50%;
        z-index: 99;
        transition: transform 0.3s linear;
        animation: ${closeEyes} 1s linear 2s;
      }
    }
  }

  & > .eye-close {
    position: absolute;
    display: flex;
    width: 28%;
    top: 30%;
    left: 50%;
    transform: translate(-55%, 0);
    opacity: 0;
    animation: ${doubleBlink} 1s linear 2s;
  }
`;

export default HeroGraphic;
