import React from 'react';
import styled from 'styled-components';
import { Row, Col, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { Github } from '@styled-icons/fa-brands';
import { Envelope } from '@styled-icons/fa-solid';
import * as AppActions from '../utils';

const navLinks = [
  { key: 'home', path: '/' },
  { key: 'about', path: '/about' },
  { key: 'portfolio', path: '/portfolio' },
  { key: 'contact', path: '/contact' },
];

function Footer() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <div className="container">
        <Row justify="space-between" align="middle" gutter={[32, 32]}>
          <Col xs={24} md={12}>
            <Logo
              src={new URL('@/assets/logo.png', import.meta.url).href}
              alt="Logo"
              onClick={() => AppActions.navigate('/')}
            />
            <p className="desc">{t('about.intro.desc1')}</p>
            <SocialLinks>
              <a href="https://github.com/xuanlin129" target="_blank" rel="noopener noreferrer">
                <Github size={24} />
              </a>
              <a href="mailto:xuanlin129@gmail.com">
                <Envelope size={24} />
              </a>
            </SocialLinks>
          </Col>
          <Col xs={24} md={12}>
            <NavList>
              {navLinks.map((item) => (
                <li key={item.key} onClick={() => AppActions.navigate(item.path)}>
                  {t(`nav.${item.key}`)}
                </li>
              ))}
            </NavList>
          </Col>
        </Row>
        <Divider />
        <div className="copyright">
          <p>© {new Date().getFullYear()} Xuan. All rights reserved.</p>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  color: #fff;
  background: var(--dark-gray-color);
  padding: 80px 0 40px;

  .desc {
    color: #a0a0a0;
    margin-top: 16px;
    max-width: 400px;
    line-height: 1.6;
    font-size: 0.9rem;
  }

  .copyright {
    text-align: center;
    color: #666;
    font-size: 0.85rem;
  }
`;

const Logo = styled.img`
  height: 32px;
  cursor: pointer;
  filter: brightness(100);
  opacity: 0.9;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
`;

const NavList = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: 40px;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    cursor: pointer;
    font-size: 0.95rem;
    color: #ccc;
    transition: all 0.3s;
    position: relative;
    padding: 4px 0;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 1px;
      background: var(--primary-color);
      transition: width 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);
    }

    &:hover {
      color: #fff;

      &::after {
        width: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
    flex-direction: column;
    gap: 16px;
    margin-top: 24px;

    li {
      width: fit-content;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;

  a {
    color: #a0a0a0;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);

    &:hover {
      color: #fff;
      background: var(--primary-color);
      border-color: var(--primary-color);
      transform: translateY(-2px);
    }
  }
`;

const Divider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
  margin: 40px 0 30px;
`;

export default Footer;
