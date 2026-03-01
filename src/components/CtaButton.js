import React from 'react';
import styled from 'styled-components';
import * as Ant from 'antd';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from '@styled-icons/fa-solid';
import * as AppActions from '../utils';

function CtaButton(props) {
  const { t } = useTranslation();
  const { btnText = t('common.more'), target } = props;

  return (
    <Container
      onClick={() => {
        AppActions.navigate(target);
      }}
    >
      <Button type="link">{btnText}</Button>
      <div className="arrow">
        <ArrowRight color="#fff" size={18} />
        <ArrowRight color="#fff" size={18} />
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  & .arrow {
    width: 50px;
    height: auto;
    aspect-ratio: 1;
    background: var(--primary-color);
    border-radius: 50%;
    transition: all 0.4s;
    display: grid;
    place-items: center;
    overflow: hidden;

    & > svg {
      grid-area: 1 / 1;
    }

    & > svg:first-child {
      transform: translateX(0);
      opacity: 1;
    }

    & > svg:last-child {
      transform: translateX(-150%);
      opacity: 0;
    }
  }

  &:hover {
    & > .arrow {
      background: var(--secondary-color);
      transform: scale(1.1);

      & > svg {
        transition:
          transform 0.4s ease,
          opacity 0.4s ease;
      }

      & > svg:first-child {
        transform: translateX(150%);
        opacity: 0;
      }

      & > svg:last-child {
        transform: translateX(0);
        transition:
          transform 0.4s ease 0.2s,
          opacity 0.4s ease 0.2s;
        opacity: 1;
      }
    }
  }
`;

const Button = styled(Ant.Button)`
  && {
    color: var(--dark);
    padding-left: 0;
    font-family: 'EN_Bd';
    font-size: 1.1rem;

    &:hover {
      color: var(--dark) !important;
      background: transparent !important;
    }
  }
`;

export default CtaButton;
