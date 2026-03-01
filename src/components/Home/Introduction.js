import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import * as Ant from 'antd';
import CtaButton from '../CtaButton';

function About() {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <WaveDivider
        $clip="#clip_bg_01_u_invert"
        style={{ transform: 'translateY(2%)', marginTop: '-8%', boxShadow: '0 -3px 2px #ccc' }}
      />
      <Wrapper>
        <div className="container">
          <h2 className="title">{t('home.intro.title')}</h2>

          <Ant.Space className="content" vertical size={30}>
            <h3>{t('home.intro.subtitle')}</h3>
            <p>{t('home.intro.desc1')}</p>
            <p>{t('home.intro.desc2')}</p>
            <CtaButton target="/about" />
          </Ant.Space>
        </div>
      </Wrapper>
      <div style={{ background: 'var(--light-gray-color)' }}>
        <WaveDivider $clip="#clip_bg_02_d_invert" />
      </div>
    </React.Fragment>
  );
}

const Wrapper = styled.section`
  background: #fff;
  padding: 90px 0;
  overflow-x: clip;
  position: relative;
  z-index: 1;
  --circleWidth: clamp(300px, 35vw, 450px);

  & > .container {
    position: relative;
    z-index: 1;

    & > .content {
      margin-top: 70px;

      & h3 {
        font-size: 1.5rem;
        font-family: 'TW_Bd', sans-serif;
        letter-spacing: 2px;
      }

      & p {
        line-height: 2;
      }

      & > *:last-child {
        align-self: flex-end;
      }
    }

    &::before,
    &::after {
      content: '';
      width: var(--circleWidth);
      aspect-ratio: 1;
      background: #f1f1ebf1;
      border-radius: 50%;
      mix-blend-mode: screen;
      position: absolute;
      top: 0;
      left: 50%;
      z-index: -1;
      transform: translate(-75%, 0);
    }

    &::after {
      transform: translate(-15%, 50%);
    }
  }

  @media (min-width: 768px) {
    & > .container {
      padding: calc(var(--circleWidth) * 0.38 - 100px) 0;

      & > h2 {
        width: fit-content;
        margin: 0 !important;
        position: relative;
        left: calc(50% + var(--circleWidth) / 2);
      }

      & > .content {
        width: 50%;
        padding-left: 10%;

        & h3 {
          font-size: 1.75rem;
        }

        & p {
          font-size: 1.25rem;
        }

        & > *:last-child {
          align-self: flex-start;
        }
      }

      &::before {
        transform: translate(-50%, 0);
      }

      &::after {
        transform: translate(10%, 50%);
      }
    }
  }
`;

const WaveDivider = styled.div`
  width: 100%;
  background: #fff;
  padding-top: 8%;
  position: relative;
  -webkit-clip-path: url(${(props) => props.$clip});
  clip-path: url(${(props) => props.$clip});
`;

export default About;
