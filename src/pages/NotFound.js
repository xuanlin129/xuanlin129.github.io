import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import CtaButton from '../components/CtaButton';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <h1>404</h1>
      <p>{t('notFound.message')}</p>
      <div className="btn-wrapper">
        <CtaButton btnText={t('notFound.backHome')} target="/" />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 0 20px;

  h1 {
    font-size: 8rem;
    margin: 0;
    line-height: 1;
    color: var(--primary-color);
    font-family: 'EN_Bd', sans-serif;

    @media (max-width: 768px) {
      font-size: 5rem;
    }
  }

  p {
    font-size: 1.5rem;
    margin: 1rem 0 3rem;
    opacity: 0.8;
  }
`;
