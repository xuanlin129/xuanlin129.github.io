import { getPageUrl, site } from '../config/site';
import { getProjects } from '../config/projects';

function createPerson(t) {
  return {
    '@type': 'Person',
    '@id': `${site.url}/#person`,
    name: site.personName,
    alternateName: site.name,
    url: getPageUrl('about'),
    jobTitle: t('seo.jobTitle'),
    description: t('home.intro.desc1'),
    email: site.email,
    sameAs: [site.github],
    knowsAbout: ['JavaScript', 'React', 'React Native', 'Vue', 'Ant Design', 'GSAP'],
  };
}

function createProjectList(t, language) {
  const projects = getProjects(language === 'en' ? 'en' : 'zh-TW');
  return {
    '@type': 'ItemList',
    '@id': `${getPageUrl('portfolio')}#projects`,
    name: t('portfolio.title'),
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: project.title,
      url: new URL(`/portfolio/${project.slug}`, site.url).href,
    })),
  };
}

export function createStructuredData(page, t, language) {
  const url = getPageUrl(page);
  if (!url) return undefined;

  const person = createPerson(t);
  const website = {
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: getPageUrl('home'),
    name: site.name,
    alternateName: site.personName,
    inLanguage: ['zh-TW', 'en'],
    publisher: { '@id': person['@id'] },
  };
  const types = { home: 'WebPage', about: 'ProfilePage', portfolio: 'CollectionPage', contact: 'ContactPage' };
  const webpage = {
    '@type': types[page],
    '@id': `${url}#webpage`,
    url,
    name: t(`seo.${page}.title`),
    description: t(`seo.${page}.description`),
    inLanguage: language,
    isPartOf: { '@id': website['@id'] },
    about: { '@id': person['@id'] },
  };
  const graph = [website, person, webpage];
  if (page === 'about' || page === 'home') webpage.mainEntity = { '@id': person['@id'] };
  if (page === 'portfolio') {
    const projectList = createProjectList(t, language);
    webpage.mainEntity = { '@id': projectList['@id'] };
    graph.push(projectList);
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

export function serializeStructuredData(data) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
