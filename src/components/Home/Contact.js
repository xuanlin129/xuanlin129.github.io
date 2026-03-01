import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import * as Ant from 'antd';
import { Envelope } from '@styled-icons/fa-solid';
import * as AppActions from '../../utils';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <div className="container">
        <h2 className="title">{t('home.contact.title')}</h2>
        <p style={{ textAlign: 'center', margin: '16px 0' }}>{t('home.contact.subtitle')}</p>
        <div style={{ textAlign: 'center' }}>
          <StyledButton
            size="large"
            type="primary"
            onClick={() => {
              AppActions.navigate('/contact');
            }}
          >
            <Envelope size={20} />
            <div className="text-mask">
              <div className="text-slider">
                <div className="text-item">{t('home.contact.btnText1')}</div>
                <div className="text-item">{t('home.contact.btnText2')}</div>
              </div>
            </div>
          </StyledButton>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 120px 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: 'Contact';
    font-family: 'EN_He';
    opacity: 0.3;
    font-size: clamp(80px, 23vw, 200px);
    background: linear-gradient(0deg, transparent 0%, var(--secondary-color) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    position: absolute;
    right: 0;
    bottom: 0;
    transform: translateY(25%);
    z-index: -1;
  }

  & > .container {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 768px) {
    & > .container {
      margin: auto;

      & > p {
        font-size: 1.25rem;
      }
    }
  }
`;

const StyledButton = styled(Ant.Button)`
  font-size: 18px !important;
  height: auto !important;
  border-radius: 100px !important;
  padding: 8px 24px !important;
  display: inline-flex !important;
  align-items: center;
  justify-content: center;
  gap: 8px;
  overflow: hidden;

  transition:
    color 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease;

  .text-mask {
    height: 28px;
    overflow: hidden;
    position: relative;
    display: inline-block;
  }

  .text-slider {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    flex-direction: column;
  }

  .text-item {
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
  }

  &:hover {
    background: var(--secondary-color) !important;
    border-color: var(--secondary-color) !important;

    .text-slider {
      transform: translateY(-28px);
    }
  }
`;
