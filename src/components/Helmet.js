import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { getPageUrl, site } from '../config/site';
import { createStructuredData, serializeStructuredData } from '../seo/structured-data';

function PageWithHelmet({ title, children, project }) {
  const { t, i18n } = useTranslation();
  const isNotFound = title === 'notFound';
  const pageTitle = project ? `${project.title}｜${site.name}` : isNotFound ? `${t('notFound.title')} - ${site.name}` : t(`seo.${title}.title`);
  const description = project?.summary || (isNotFound ? t('notFound.message') : t(`seo.${title}.description`));
  const url = project ? new URL(`/portfolio/${project.slug}`, site.url).href : getPageUrl(title);
  const language = i18n.resolvedLanguage || 'zh-TW';
  const structuredData = project ? {
    '@context': 'https://schema.org', '@type': 'CreativeWork',
    name: project.title, description, url, image: project.image,
    inLanguage: language, author: { '@type': 'Person', name: site.personName },
  } : createStructuredData(title, t, language);

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta name="author" content={`${site.personName} (${site.name})`} />
        <meta name="robots" content={isNotFound ? 'noindex, follow' : 'index, follow, max-image-preview:large'} />
        {url && <link rel="canonical" href={url} />}
        {!isNotFound && <meta property="og:type" content="website" />}
        {!isNotFound && <meta property="og:site_name" content={site.name} />}
        {!isNotFound && <meta property="og:title" content={pageTitle} />}
        {!isNotFound && <meta property="og:description" content={description} />}
        {url && <meta property="og:url" content={url} />}
        {!isNotFound && <meta property="og:locale" content={language === 'en' ? 'en_US' : 'zh_TW'} />}
        {!isNotFound && <meta property="og:image" content={project?.image || site.image} />}
        {!isNotFound && !project && <meta property="og:image:width" content="1200" />}
        {!isNotFound && !project && <meta property="og:image:height" content="630" />}
        {!isNotFound && <meta property="og:image:alt" content={project?.imageAlt || t('seo.imageAlt')} />}
        {!isNotFound && <meta name="twitter:card" content="summary_large_image" />}
        {!isNotFound && <meta name="twitter:title" content={pageTitle} />}
        {!isNotFound && <meta name="twitter:description" content={description} />}
        {!isNotFound && <meta name="twitter:image" content={project?.image || site.image} />}
        {!isNotFound && <meta name="twitter:image:alt" content={project?.imageAlt || t('seo.imageAlt')} />}
        {structuredData && <script type="application/ld+json">{serializeStructuredData(structuredData)}</script>}
      </Helmet>
      {children}
    </>
  );
}

export default PageWithHelmet;
