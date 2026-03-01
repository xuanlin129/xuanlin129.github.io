import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import * as Ant from 'antd';
import HeroGraphic from '../HeroGraphic';

const { useBreakpoint } = Ant.Grid;

export default function Hero() {
  const { t } = useTranslation();
  const screens = useBreakpoint();

  return (
    <Wrapper>
      <div className="container">
        <Ant.Row style={{ height: '100%' }}>
          <Ant.Col
            xs={24}
            sm={12}
            className="hero-content"
            style={{
              height: screens.xs ? '50%' : '100%',
            }}
          >
            <h1>Xuan Lin</h1>
            <p>{t('home.hero.subtitle')}</p>
          </Ant.Col>
        </Ant.Row>
      </div>
      <HeroGraphic
        style={{
          position: 'absolute',
          width: screens.xs ? '100%' : '80%',
          maxWidth: '90dvh',
          right: '-100px',
          bottom: screens.xs ? '-10%' : '-20%',
        }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  height: calc(100vh - var(--navbar-height));
  overflow: hidden;
  position: sticky;
  top: var(--navbar-height);
  z-index: -1;

  & > .container {
    height: 100%;

    & .hero-content {
      color: var(--dark-gray-color);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: relative;

      & > h1 {
        font-size: 60px;
        font-family: 'EN_He';
      }

      & > p {
        font-size: 18px;
        font-family: 'EN_Bd';
      }
    }
  }

  @media (min-width: 576px) {
    & > .container .hero-content {
      padding-bottom: var(--navbar-height);
      align-items: flex-start;

      & > h1 {
        font-size: 80px;
      }

      & > p {
        font-size: 24px;
      }
    }
  }
`;
