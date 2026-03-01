import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

function PageWithHelmet({ title, children }) {
  const { t } = useTranslation();

  let pageTitle = '';
  if (title === 'home') {
    pageTitle = 'Xuan Lin';
  } else if (title === 'notFound') {
    pageTitle = `${t('notFound.title')} - Xuan Lin`;
  } else {
    pageTitle = `${t(`nav.${title}`)} - Xuan Lin`;
  }

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      {children}
    </>
  );
}

export default PageWithHelmet;
