import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';
import * as Ant from 'antd';
import CtaButton from '../../components/CtaButton';
import projects from '../../config/projects';

const { useBreakpoint } = Ant.Grid;

const autoplaySpeed = 3000;

export default function Portfolio() {
  const { t } = useTranslation();
  const screens = useBreakpoint();
  const portfolioRef = React.useRef();
  const [autoPlay, setAutoPlay] = React.useState(false);

  React.useEffect(() => {
    if (!portfolioRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setAutoPlay(entry.isIntersecting);
      },
      {
        threshold: 0.6,
      },
    );

    observer.observe(portfolioRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Wrapper ref={portfolioRef}>
      <div className="container">
        <h2 className="title">{t('home.portfolio.title')}</h2>

        {screens.md && <CtaButton target="/portfolio" />}
      </div>
      <StyledCarousel
        $autoplaySpeed={autoplaySpeed}
        infinite={true}
        slidesToShow={1}
        slidesToScroll={1}
        draggable={true}
        autoplay={autoPlay && { dotDuration: true }}
        autoplaySpeed={autoplaySpeed}
        pauseOnHover={false}
        centerMode={true}
        centerPadding={screens.md ? '25%' : '15%'}
      >
        {projects
          .filter((it) => it.highlight)
          ?.map((work) => {
            return (
              <div key={work.name} className="carousel-item-wrapper">
                <StyledCard
                  onClick={() => {
                    window.open(work.path);
                  }}
                  hoverable
                  cover={
                    <div className="image-cover">
                      <img draggable={false} alt={work.name} src={work.image} />
                      <div className="mask">View Project</div>
                    </div>
                  }
                >
                  <Ant.Card.Meta title={t(work.name)} />
                </StyledCard>
              </div>
            );
          })}
      </StyledCarousel>

      {!screens.md && (
        <div style={{ textAlign: 'center', marginTop: 100 }}>
          <CtaButton target="/portfolio" />
        </div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: var(--light-gray-color);
  padding: 90px 0;

  @media (min-width: 768px) {
    & > .container {
      width: 80% !important;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const StyledCard = styled(Ant.Card)`
  --padding: 16px;
  border-radius: 0;
  overflow: hidden;
  position: relative;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-radius: 14px;

  &:hover {
    .image-cover {
      & > .mask {
        opacity: 1;
        clip-path: circle(75% at 50% 50%);
      }
    }
  }

  .ant-card-body {
    padding: 0;
  }

  .image-cover {
    width: 100%;
    padding: var(--padding);
    position: relative;

    & > .mask {
      width: calc(100% - var(--padding) * 2);
      height: calc(100% - var(--padding) * 2);
      background: #000000af;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
      font-family: 'EN_Bd';
      color: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      clip-path: circle(0% at 50% 50%);
      transition:
        opacity 0.3s,
        clip-path 420ms cubic-bezier(0.22, 0.9, 0.33, 1);
    }

    &::before,
    &::after {
      content: '';
      width: 15%;
      aspect-ratio: 1/1;
      position: absolute;
      filter: blur(0.1);
      z-index: 2;
    }

    &::before {
      background: linear-gradient(45deg, transparent 48%, #cccccc3f 50%, #fff 50%);
      top: calc(var(--padding) / 2);
      right: calc(var(--padding) / 2);
    }

    &::after {
      background: linear-gradient(45deg, #fff 50%, #cccccc3f 50%, transparent 52%);
      bottom: calc(var(--padding) / 2);
      left: calc(var(--padding) / 2);
    }

    & > img {
      border-radius: 0;
      box-shadow: 0px 0px 5px #ccc;
      width: 100%;
      height: auto;
      aspect-ratio: 16/9;
      object-fit: cover;
      object-position: top;
    }
  }

  .ant-card-meta {
    width: 100%;
    background: #fff;
    padding: var(--padding);
    overflow: visible;
    position: relative;
  }

  .ant-card-meta-title {
    font-family: 'TW_Bd';
    margin-bottom: 6px;
  }

  .ant-card-meta-description {
    color: #666;
    font-family: 'TW_Rg';
  }

  @media (min-width: 576px) {
    --padding: 24px;

    .ant-card-meta-title {
      font-size: 1.5rem;
    }
  }
`;

const activeLine = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

const StyledCarousel = styled(Ant.Carousel)`
  --dotHeight: 5px;
  margin: 50px 0;

  .carousel-item-wrapper {
    max-width: 1200px;
    padding: 5px;
    transform: scale(0.9);
    transition: transform 0.3s;
  }

  .slick-list {
    overflow-x: clip;
    overflow-y: visible;
  }

  .slick-center .carousel-item-wrapper {
    transform: scale(1);
  }

  .slick-dots {
    bottom: -30px;

    li {
      width: 20px;
      height: var(--dotHeight);
      position: relative;

      button {
        height: var(--dotHeight);
        background: var(--dark-gray-color);
        transition: width 0.3s;
      }

      &.slick-active {
        width: 40px;
      }

      &.slick-active::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: var(--dotHeight);
        background: var(--primary-color);
        animation: ${activeLine} ${(props) => props.$autoplaySpeed || 3000}ms linear forwards;
      }
    }
  }

  @media (min-width: 768px) {
    .carousel-item-wrapper {
      padding: 15px;
    }
  }
`;
