import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col, Descriptions, Tag, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import AnimateWaveDivider from '../components/AnimatedWaveDivider';
import { LaptopCode, Book, CaretRight, ArrowRight } from '@styled-icons/fa-solid';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as AppActions from '../utils';

const { useBreakpoint } = Grid;
gsap.registerPlugin(ScrollTrigger);

function About() {
  const { t } = useTranslation();
  const screens = useBreakpoint();
  const experienceRef = React.useRef(null);
  const experienceInnerRef = React.useRef(null);

  const skills = [
    {
      label: t('about.skills.core'),
      children: [
        { label: 'JavaScript', color: 'gold' },
        { label: 'React', color: 'blue' },
        { label: 'React Native', color: 'cyan' },
        { label: 'Vue', color: 'green' },
      ],
    },
    {
      label: t('about.skills.ui'),
      children: [
        { label: 'Ant Design', color: 'magenta' },
        { label: 'Vuetify', color: 'geekblue' },
        { label: 'Bootstrap', color: 'purple' },
      ],
    },
    {
      label: t('about.skills.motion'),
      children: [
        { label: 'GSAP', color: 'lime' },
        { label: 'jQuery', color: 'orange' },
      ],
    },
  ];

  const educations = t('about.education.history', { returnObjects: true });
  const experiences = t('about.experience.jobs', { returnObjects: true });

  React.useLayoutEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    const ctx = gsap.context(() => {
      gsap.to(experienceInnerRef.current, {
        x: () => -(experienceInnerRef.current.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: experienceRef.current,
          pin: true,
          anticipatePin: 1,
          scrub: 1,
          start: 'center center',
          end: () => `+=${experienceInnerRef.current.scrollWidth / 3}`,
          invalidateOnRefresh: true,
          pinSpacing: true,
        },
      });
    }, experienceRef);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <Wrapper>
      <section className="page-head">
        <div className="container">
          <h2>{t('about.title')}</h2>
          <p>{t('about.subtitle')}</p>
        </div>
      </section>

      <Intro>
        <div className="container">
          <Row gutter={[32, 32]} style={{ justifyContent: 'space-evenly' }}>
            <Col xs={24} sm={8} className="graduation">
              <img
                style={{ width: '100%' }}
                src={new URL('@/assets/graduation.png', import.meta.url).href}
                alt="graduation"
              />
              <div className="block"></div>
            </Col>
            <Col xs={24} sm={12} className="description">
              <h3>{t('about.intro.title')}</h3>
              <p>{t('about.intro.desc1')}</p>
              <p>{t('about.intro.desc2')}</p>
              <p>{t('about.intro.desc3')}</p>
            </Col>
          </Row>
        </div>
      </Intro>

      <Qualification>
        <AnimateWaveDivider
          height="var(--divider-height)"
          bgColor="var(--light-gray-color)"
          style={{ position: 'absolute', top: 0, transform: 'translateY(-100%)' }}
        />
        <div className="container">
          <Row gutter={[0, 32]}>
            <Col span={24} lg={11}>
              <div className="note-page">
                <h3>
                  <LaptopCode size={24} color="var(--secondary-color)" />
                  {t('about.skills.title')}
                </h3>
                <Descriptions
                  styles={{
                    content: { fontSize: '1rem' },
                    label: { fontSize: '1rem' },
                  }}
                  column={1}
                  layout="vertical"
                  items={skills.map((item, idx) => ({
                    key: idx + 1,
                    label: item.label,
                    children: (
                      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                        {item.children.map((it) => (
                          <Tag key={it.label} variant="filled" color={it.color} style={{ fontSize: '1rem' }}>
                            {it.label}
                          </Tag>
                        ))}
                      </div>
                    ),
                  }))}
                />
              </div>
            </Col>
            {screens.lg && (
              <Col span={2} className="note-link">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <div className="link-container" key={idx}>
                    <div className="circle left" />
                    <div className="line" />
                    <div className="circle right" />
                  </div>
                ))}
              </Col>
            )}
            <Col span={24} lg={11}>
              <div className="note-page">
                <h3>
                  <Book size={20} color="var(--secondary-color)" />
                  {t('about.education.title')}
                </h3>
                <ul>
                  {educations.map((it, idx) => (
                    <li key={idx}>
                      {it.school} - {it.degree}
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        </div>
        <AnimateWaveDivider
          height="var(--divider-height)"
          bgColor="var(--light-gray-color)"
          style={{ position: 'absolute', bottom: 0, transform: 'translateY(100%)' }}
          invert
        />
      </Qualification>

      <Experience ref={experienceRef}>
        <div className="horizontal-container" ref={experienceInnerRef}>
          {experiences.map((it, idx) => {
            return (
              <div key={idx} className="item">
                <p className="time">{it.time}</p>
                <div className="content">
                  <h3>{it.job}</h3>
                  <h4>{it.company}</h4>
                  <p>{it.desc}</p>
                  <ul>
                    {it.list.map((li) => (
                      <li key={li.title}>
                        <strong>
                          <CaretRight size={18} />
                        </strong>
                        <div>
                          <p>{li.title}</p>
                          <p>{li.content}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </Experience>

      <CTA>
        <Row>
          <Col span={24} sm={12}>
            <div
              className="contact-item work"
              onClick={() => {
                AppActions.navigate('/portfolio');
              }}
            >
              <div>
                <h3>{t('about.cta.portfolio.title')}</h3>
                <p>{t('about.cta.portfolio.desc')}</p>
              </div>
              <span className="icon">
                <ArrowRight size={24} />
              </span>
            </div>
          </Col>
          <Col span={24} sm={12}>
            <div
              className="contact-item contact"
              onClick={() => {
                AppActions.navigate('/contact');
              }}
            >
              <div>
                <h3>{t('about.cta.contact.title')}</h3>
                <p>{t('about.cta.contact.desc')}</p>
              </div>
              <span className="icon">
                <ArrowRight size={24} />
              </span>
            </div>
          </Col>
        </Row>
      </CTA>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  padding-top: var(--navbar-height);

  & > .page-head {
    padding: 50px 0;
    text-align: center;

    & h2 {
      font-size: 2.5rem;
      font-family: 'EN_Bd', 'TW_Bd', sans-serif;
    }
  }

  & > section {
    padding: 90px 0;
  }
`;

const Intro = styled.section`
  & .ant-row {
    justify-content: space-evenly;
    align-items: center;
  }

  & .graduation {
    display: flex;
    align-items: end;
    position: relative;
    z-index: 1;
    -webkit-clip-path: url(#mv-mask);
    clip-path: url(#mv-mask);

    &::before {
      content: '';
      width: 100%;
      aspect-ratio: 1/1;
      background: var(--primary-color);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0.7;
      z-index: -1;
    }

    & > img {
      height: 100%;
      aspect-ratio: 1/1;
      object-fit: contain;
      object-position: top;
    }
  }

  & .description {
    h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      font-family: 'EN_Bd';
    }

    p {
      margin-bottom: 0.5rem;
    }
  }

  @media (max-width: 576px) {
    padding-top: 30px !important;
  }
`;

const Qualification = styled.section`
  --divider-height: 100px;
  background: var(--light-gray-color);
  margin: var(--divider-height) 0;
  padding: 0 !important;
  position: relative;

  & .ant-row {
    justify-content: center;
  }

  & .note-page {
    height: 100%;
    background: #fff;
    padding: 30px;
    border-radius: 2rem;
    position: relative;

    & h3 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    & li {
      margin-bottom: 0.75rem;
    }
  }

  & .note-link {
    display: flex;
    justify-content: space-evenly;
    z-index: 1;
    flex: 1;

    & .link-container {
      --line-width: 4px;
      width: 100%;
      min-width: 50px;
      display: flex;
      align-items: center;

      & .line {
        flex: 1;
        height: 30px;
        border: var(--line-width) solid #ccc;
        border-radius: 50%;
        clip-path: inset(0 0 50% 0);
        z-index: 2;
      }

      & .circle {
        --offset: calc(50% + var(--line-width) / 2);
        width: 15px;
        height: 15px;
        background: var(--light-gray-color);
        border-radius: 50%;
        box-shadow: inset 0 0 3px #d9d9d9;

        &.left {
          transform: translateX(var(--offset));
        }

        &.right {
          transform: translateX(calc(var(--offset) * -1));
        }
      }
    }
  }

  @media (min-width: 992px) {
    & .note-page {
      padding: 30px 15%;
    }

    & .note-link {
      flex-direction: column;
      margin: 0 -3%;
    }
  }
`;

const Experience = styled.section`
  overflow: hidden;

  & > .horizontal-container {
    display: flex;
    flex-wrap: nowrap;
    width: fit-content;
    will-change: transform;

    & > .item {
      --width: 100vw;
      width: var(--width);
      padding: 0 5vw;

      & > .time {
        --dot-width: 20px;
        font-size: 1.5rem;
        padding-bottom: 30px;
        position: relative;
        font-family: 'EN_Bd';

        &::before {
          content: '';
          width: var(--dot-width);
          height: var(--dot-width);
          border-radius: 50%;
          background: var(--primary-color);
          position: absolute;
          bottom: -1px;
          opacity: 0.5;
          left: 0;
          transform: translateY(50%);
        }

        &::after {
          --min-dot-width: calc(var(--dot-width) * 0.6);
          content: '';
          width: var(--min-dot-width);
          height: var(--min-dot-width);
          border-radius: 50%;
          background: var(--primary-color);
          position: absolute;
          bottom: -1px;
          left: calc((var(--dot-width) - var(--min-dot-width)) / 2);
          transform: translateY(50%);
        }
      }

      & > .content {
        padding-top: 30px;
        position: relative;

        &::before {
          content: '';
          width: var(--width);
          height: 2px;
          background: var(--dark-gray-color);
          position: absolute;
          top: 0;
          left: -5vw;
        }

        & h3 {
          font-size: 1.5rem;
          font-weight: 700;
        }

        & h4 {
          color: var(--secondary-color);
          margin-bottom: 0.5rem;
        }

        & ul {
          margin-top: 10px;

          & li {
            display: flex;
            margin-bottom: 5px;
            gap: 8px;

            & > div {
              padding-top: 2px;

              & > p:first-child {
                text-decoration: underline;
              }
            }
          }
        }
      }

      @media (min-width: 768px) {
        --width: 45vw;
      }
      @media (min-width: 1200px) {
        &:first-child {
          margin-left: 10vw;
        }
        &:last-child {
          margin-right: 10vw;
        }
      }
    }
  }
`;

const CTA = styled.section`
  padding: 0 !important;
  box-shadow: 0 -3px 10px #e9e9e9;

  .contact-item {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 60px;
    height: 100%;
    aspect-ratio: 3/1;
    color: inherit;
    text-decoration: none;
    transition: all 0.3s ease;
    cursor: pointer;

    h3 {
      font-size: 2rem;
      font-family: 'EN_Bd', 'TW_Bd';
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.1rem;
      opacity: 0.8;
    }

    .icon {
      transition: transform 0.3s;
    }

    &:hover .icon {
      transform: translateX(10px);
    }

    &.work {
      background: var(--light-gray-color);
      color: var(--dark-gray-color);
    }

    &.contact {
      background: var(--secondary-color);
      color: white;

      h3,
      p {
        color: white;
      }
    }
  }

  @media (max-width: 576px) {
    .contact-item {
      padding: 30px;
      aspect-ratio: auto;
      min-height: 200px;
    }
  }
`;

export default About;
