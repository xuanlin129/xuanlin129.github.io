import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, Spin, Tag } from 'antd';
import styled from 'styled-components';
import Helmet from '../components/Helmet';
import NotFound from './NotFound';
import { useProjectDetails } from '../hooks/useProjectDetails';
import { handleLinkNavigation } from '../utils';

function ProjectMetadata({ project }) {
  const { t } = useTranslation();
  const taskTags = project.taskTags ?? [];
  if (!project.projectType && !project.projectYear && !taskTags.length && !project.path) return null;

  return (
    <dl className="metadata">
      {project.projectType && (
        <div>
          <dt>{t('projectDetails.type')}</dt>
          <dd>{t(`projectDetails.types.${project.projectType}`)}</dd>
        </div>
      )}
      {project.projectYear && (
        <div>
          <dt>{t('projectDetails.year')}</dt>
          <dd>{project.projectYear}</dd>
        </div>
      )}
      {taskTags.length > 0 && (
        <div className="wide">
          <dt>{t('projectDetails.tasks')}</dt>
          <dd>
            <ul className="tags">
              {taskTags.map((tag) => (
                <li key={tag}>
                  <Tag>{tag}</Tag>
                </li>
              ))}
            </ul>
          </dd>
        </div>
      )}
      {project.path && (
        <div className="wide">
          <dt>{t('projectDetails.link')}</dt>
          <dd>
            <a className="project-link" href={project.path} target="_blank" rel="noopener noreferrer">
              {project.path}
              <span aria-hidden="true">↗</span>
            </a>
          </dd>
        </div>
      )}
    </dl>
  );
}

export default function ProjectDetails() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const { project, status, retry } = useProjectDetails(slug);
  if (status === 'notFound')
    return (
      <Helmet title="notFound">
        <NotFound />
      </Helmet>
    );
  if (status !== 'ready') {
    return (
      <Helmet title="notFound">
        <Wrapper>
          <div className="container state" role="status">
            {status === 'loading' ? (
              <>
                <Spin />
                <p>{t('projectDetails.loading')}</p>
              </>
            ) : (
              <>
                <p>{t('projectDetails.error')}</p>
                <Button onClick={retry}>{t('projectDetails.retry')}</Button>
              </>
            )}
            <Link to="/portfolio" onClick={(event) => handleLinkNavigation(event, '/portfolio')}>
              {t('projectDetails.back')}
            </Link>
          </div>
        </Wrapper>
      </Helmet>
    );
  }

  return (
    <Helmet title="portfolio" project={project}>
      <Wrapper>
        <div className="container">
          <nav className="breadcrumb" aria-label={t('projectDetails.back')}>
            <Link to="/portfolio" onClick={(event) => handleLinkNavigation(event, '/portfolio')}>
              {t('portfolio.title')}
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{project.title}</span>
          </nav>
          <section className="summary" aria-labelledby="project-title">
            <div className="cover">
              <img src={project.image} alt={project.imageAlt || project.title} decoding="async" fetchpriority="high" />
            </div>
            <div className="content">
              <p className="eyebrow">{t('projectDetails.title')}</p>
              <h1 id="project-title">{project.title}</h1>
              {project.summary && <p className="description">{project.summary}</p>}
              <ProjectMetadata project={project} />
            </div>
          </section>
        </div>
      </Wrapper>
    </Helmet>
  );
}

const Wrapper = styled.main`
  flex: 1;
  padding: calc(var(--navbar-height) + 40px) 0 80px;
  color: var(--dark-gray-color);

  .breadcrumb {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    font-size: 13px;
    margin-bottom: 36px;
  }
  .breadcrumb a,
  .breadcrumb > span:first-of-type {
    color: #848580;
  }
  .breadcrumb a:hover {
    color: var(--secondary-color);
  }
  .summary {
    display: grid;
    grid-template-columns: 1.08fr 1fr;
    gap: clamp(40px, 6vw, 86px);
    align-items: center;
  }
  .cover {
    background: #e1e2dc;
    overflow: hidden;
  }
  .cover img {
    display: block;
    width: 100%;
    height: auto;
  }
  .content {
    min-width: 0;
  }
  .eyebrow {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    letter-spacing: 2px;
    color: #888b83;
    margin: 0 0 24px;
  }
  .eyebrow::before {
    content: '';
    width: 24px;
    height: 3px;
    background: var(--primary-color);
  }
  h1 {
    margin: 0 0 32px;
    font-family: 'EN_Bd', 'TW_Bd', sans-serif;
    font-size: clamp(40px, 4.2vw, 64px);
    line-height: 1.2;
    letter-spacing: -1px;
    overflow-wrap: anywhere;
  }
  h1::after {
    content: '.';
    color: var(--secondary-color);
  }
  .description {
    font-size: 17px;
    line-height: 2;
    color: #7a7e76;
    margin: 0 0 36px;
    white-space: pre-line;
    overflow-wrap: anywhere;
  }
  .metadata {
    border-top: 1px solid #d5d7d1;
    padding-top: 30px;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px 20px;
  }
  dt {
    font-size: 12px;
    color: #888b83;
    margin-bottom: 12px;
    letter-spacing: 1.5px;
  }
  dd {
    margin: 0;
    font-size: 18px;
    font-family: 'EN_Bd', 'TW_Bd', sans-serif;
    line-height: 1.6;
    overflow-wrap: anywhere;
  }
  .project-link {
    display: inline-flex;
    align-items: baseline;
    gap: 12px;
    color: var(--dark-gray-color);
    text-decoration: underline;
    text-decoration-color: var(--primary-color);
    text-underline-offset: 6px;
  }
  .project-link:hover {
    color: var(--secondary-color);
  }
  .wide {
    grid-column: 1 / -1;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .tags li {
    max-width: 100%;
  }
  .tags .ant-tag {
    margin: 0;
    padding: 6px 14px;
    color: var(--dark-gray-color);
    border-color: color-mix(in srgb, var(--secondary-color) 22%, white);
    border-radius: 999px;
    background: color-mix(in srgb, var(--primary-color) 18%, white);
    font-size: 14px;
    font-family: 'EN_Rg', 'TW_Rg', sans-serif;
    line-height: 1.6;
    max-width: 100%;
    white-space: normal;
    overflow-wrap: anywhere;
  }
  .state {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    padding-block: 100px;
  }
  @media (max-width: 760px) {
    padding: calc(var(--navbar-height) + 28px) 0 48px;
    .container {
      padding-inline: 24px;
    }
    .breadcrumb {
      margin-bottom: 28px;
    }
    .summary {
      grid-template-columns: 1fr;
      gap: 36px;
    }
    .eyebrow {
      margin-bottom: 18px;
    }
    h1 {
      font-size: 42px;
      margin-bottom: 22px;
    }
    .description {
      font-size: 16px;
      margin-bottom: 28px;
    }
    .metadata {
      gap: 26px 18px;
    }
    dd {
      font-size: 17px;
    }
  }
`;
