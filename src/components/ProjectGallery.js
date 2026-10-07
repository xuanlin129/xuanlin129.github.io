import { lazy, Suspense, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const ProjectGalleryPreview = lazy(() => import('./ProjectGalleryPreview'));

function groupGalleryImages(images) {
  const rows = [];
  for (let startIndex = 0; startIndex < images.length; startIndex += 2) {
    rows.push({ startIndex, images: images.slice(startIndex, startIndex + 2) });
  }
  return rows;
}

export default function ProjectGallery({ images = [] }) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const previewTriggerRef = useRef(null);
  if (!images.length) return null;

  function openPreview(index, trigger) {
    previewTriggerRef.current = trigger;
    setCurrent(index);
    setIsOpen(true);
  }

  function closePreview() {
    setIsOpen(false);
    previewTriggerRef.current?.focus();
  }

  return (
    <Wrapper aria-label={t('projectDetails.gallery')}>
      <div className="gallery-heading">
        <h2>
          {t('projectDetails.gallery')}
          <span className="gallery-heading-dot" aria-hidden="true">.</span>
        </h2>
      </div>
      <div className="gallery-grid">
        {groupGalleryImages(images).map((row, rowIndex) => (
          <div key={row.images[0].id} className={`gallery-row${rowIndex % 2 === 1 ? ' gallery-row--reversed' : ''}${row.images.length === 1 ? ' gallery-row--single' : ''}`}>
            {row.images.map((image, index) => (
              <button key={image.id} type="button" className="gallery-image" aria-label={t('projectDetails.openImage', { index: row.startIndex + index + 1 })} onClick={(event) => openPreview(row.startIndex + index, event.currentTarget)}>
                <img src={image.url} alt="" loading="lazy" decoding="async" />
              </button>
            ))}
          </div>
        ))}
      </div>
      {isOpen && (
        <Suspense fallback={<div className="gallery-preview-loading" role="status">{t('projectDetails.loadingPreview')}</div>}>
          <ProjectGalleryPreview images={images} current={current} onChange={setCurrent} onClose={closePreview} />
        </Suspense>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 72px;
  .gallery-heading {
    display: flex;
    align-items: flex-end;
    gap: 24px;
    margin-bottom: 36px;
  }
  .gallery-heading::after {
    content: '';
    flex: 1;
    min-width: 24px;
    height: 1px;
    margin-bottom: 8px;
    background: #d5d7d1;
  }
  h2 {
    min-width: 0;
    margin: 0;
    font-family: 'EN_Bd', 'TW_Bd', sans-serif;
    font-size: 36px;
    line-height: 1.25;
    overflow-wrap: anywhere;
  }
  .gallery-heading-dot {
    color: var(--secondary-color);
  }
  .gallery-preview-loading {
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1002;
    padding: 12px 20px;
    border: 1px solid #d5d7d1;
    border-radius: 999px;
    background: white;
    font-size: 14px;
  }
  .gallery-grid {
    display: grid;
    gap: 24px;
  }
  .gallery-row {
    display: grid;
    grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr);
    gap: 24px;
    align-items: end;
  }
  .gallery-row--reversed {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.6fr);
    align-items: start;
  }
  .gallery-row--single {
    grid-template-columns: minmax(0, 1fr);
  }
  .gallery-image {
    display: block;
    width: 100%;
    padding: 0;
    border: 0;
    background: #e1e2dc;
    cursor: zoom-in;
  }
  .gallery-image:focus-visible {
    outline: 3px solid var(--secondary-color);
    outline-offset: 4px;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }
  @media (max-width: 760px) {
    margin-top: 48px;
    .gallery-heading {
      gap: 16px;
      margin-bottom: 24px;
    }
    .gallery-heading::after {
      margin-bottom: 6px;
    }
    h2 {
      font-size: 28px;
    }
    .gallery-grid,
    .gallery-row {
      gap: 20px;
    }
    .gallery-row,
    .gallery-row--reversed {
      grid-template-columns: minmax(0, 1fr);
      align-items: start;
    }
  }
`;
