import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { getPageUrl, site } from '../config/site';
import { createStructuredData, serializeStructuredData } from '../seo/structured-data';

function PageWithHelmet({ title, children }) {
  const { t, i18n } = useTranslation();
  const isNotFound = title === 'notFound';
  const pageTitle = isNotFound ? `${t('notFound.title')} - ${site.name}` : t(`seo.${title}.title`);
  const description = isNotFound ? t('notFound.message') : t(`seo.${title}.description`);
  const url = getPageUrl(title);
  const language = i18n.resolvedLanguage || 'zh-TW';
  const structuredData = createStructuredData(title, t, language);

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
        {!isNotFound && <meta property="og:image" content={site.image} />}
        {!isNotFound && <meta property="og:image:width" content="1200" />}
        {!isNotFound && <meta property="og:image:height" content="630" />}
        {!isNotFound && <meta property="og:image:alt" content={t('seo.imageAlt')} />}
        {!isNotFound && <meta name="twitter:card" content="summary_large_image" />}
        {!isNotFound && <meta name="twitter:title" content={pageTitle} />}
        {!isNotFound && <meta name="twitter:description" content={description} />}
        {!isNotFound && <meta name="twitter:image" content={site.image} />}
        {!isNotFound && <meta name="twitter:image:alt" content={t('seo.imageAlt')} />}
        {structuredData && <script type="application/ld+json">{serializeStructuredData(structuredData)}</script>}
      </Helmet>
      {children}
    </>
  );
}

export default PageWithHelmet;
