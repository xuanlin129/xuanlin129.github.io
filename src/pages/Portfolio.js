import React from 'react';
import styled from 'styled-components';
import { Row, Col, Pagination, Skeleton } from 'antd';
import { useTranslation } from 'react-i18next';
import projectsData from '../config/projects';

function Portfolio() {
  const { t } = useTranslation();
  const [cursorState, setCursorState] = React.useState({ x: 0, y: 0, isHovering: false });
  const [currentPage, setCurrentPage] = React.useState(1);
  const [projects, setProjects] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const pageSize = 6;

  const fetchData = React.useCallback(async () => {
    setLoading(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    try {
      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = currentPage * pageSize;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const resp = projectsData.slice(startIndex, endIndex);
      setProjects(resp);
    } catch (error) {
      console.error('Failed to fetch projects:', error);
    } finally {
      setLoading(false);
    }
  }, [currentPage, pageSize]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  React.useEffect(() => {
    // 簡單判斷：如果是觸控裝置或寬度較小，就不啟用滑鼠跟隨邏輯
    const isMobile = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768;
    if (isMobile) return;

    const handleMouseMove = (e) => {
      const target = e.target;
      const isHovering = !!target.closest('.image-box');
      setCursorState({
        x: e.clientX,
        y: e.clientY,
        isHovering,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Wrapper>
      <ViewMoreCursor
        style={{
          left: `${cursorState.x}px`,
          top: `${cursorState.y}px`,
          opacity: cursorState.isHovering ? 1 : 0,
          transform: `translate(-50%, -50%) scale(${cursorState.isHovering ? 1 : 0.5})`,
        }}
      >
        View More
      </ViewMoreCursor>
      <section className="page-head">
        <div className="container">
          <h2>{t('portfolio.title')}</h2>
          <p>{t('portfolio.subtitle')}</p>
        </div>
      </section>
      <section className="page-body">
        <div className="container" style={{ minHeight: '60vh' }}>
          <Row gutter={[48, 48]}>
            {loading
              ? Array.from({ length: pageSize }).map((_, idx) => (
                  <Col span={24} md={12} lg={8} key={idx}>
                    <Card>
                      <div className="image-box skeleton">
                        <Skeleton.Node active style={{ width: '100%', height: '100%' }}>
                          {' '}
                        </Skeleton.Node>
                      </div>
                      <div className="content">
                        <Skeleton active paragraph={{ rows: 2 }} />
                      </div>
                    </Card>
                  </Col>
                ))
              : projects.map((it, idx) => (
                  <Col span={24} md={12} lg={8} key={idx}>
                    <Card className="card">
                      <div
                        className="image-box"
                        onClick={() => {
                          window.open(it.path);
                        }}
                      >
                        <img src={it.image} alt={t(it.name)} />
                      </div>
                      <div className="content">
                        <h4>{t(it.name)}</h4>
                        <a href={it.path} target="_blank">
                          {it.path}
                        </a>
                      </div>
                    </Card>
                  </Col>
                ))}
          </Row>
          {projectsData.length > 0 && (
            <div style={{ marginTop: 40, display: 'flex', justifyContent: 'center' }}>
              <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={projectsData.length}
                onChange={(page) => setCurrentPage(page)}
              />
            </div>
          )}
        </div>
      </section>
    </Wrapper>
  );
}

const ViewMoreCursor = styled.div`
  position: fixed;
  width: 100px;
  height: 100px;
  background: color-mix(in srgb, var(--secondary-color), transparent 15%);
  color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 700;
  font-size: 1rem;
  z-index: 9999;
  pointer-events: none;
  transition:
    opacity 0.3s cubic-bezier(0.33, 1, 0.68, 1),
    transform 0.3s cubic-bezier(0.33, 1, 0.68, 1);
  will-change: transform, opacity, left, top;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Card = styled.div`
  width: 100%;

  .image-box {
    width: 100%;
    aspect-ratio: 16/10;
    overflow: hidden;
    position: relative;
    box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.15);
    margin-bottom: 24px;
    background: #f0f0f0;
    cursor: none;
    transition: transform 0.6s cubic-bezier(0.33, 1, 0.68, 1);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: rgba(255, 255, 255, 0.3);
      opacity: 0;
      transition: opacity 0.3s;
    }
  }

  .content {
    h4 {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--dark-gray-color);
      margin: 0;
      transition: color 0.3s;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    a {
      color: color-mix(in srgb, var(--dark-gray-color), transparent 40%);
      font-size: 14px;
      display: block;
      word-break: break-all;
      margin-top: 8px;

      &:hover {
        color: color-mix(in srgb, var(--secondary-color), transparent 10%);
      }
    }
  }

  @media (hover: hover) {
    &:hover {
      .content h4 {
        color: #000;
      }
    }

    .image-box:hover {
      transform: translate(5px, -5px) rotate(-3deg);

      &::after {
        opacity: 1;
      }
    }
  }
`;

const Wrapper = styled.main`
  padding-top: var(--navbar-height);
  flex: 1;

  & > .page-head {
    padding: 50px 0;
    text-align: center;

    & h2 {
      font-size: 2.5rem;
      font-family: 'EN_Bd', 'TW_Bd', sans-serif;
    }
  }

  & > .page-body {
    padding: 90px 0;
  }
`;

export default Portfolio;
