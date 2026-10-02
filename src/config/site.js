export const site = {
  url: 'https://xuanlin129.github.io',
  name: 'Xuan Lin',
  personName: '林子軒',
  email: 'xuan.lin129@gmail.com',
  github: 'https://github.com/xuanlin129',
  image: 'https://xuanlin129.github.io/preview.png',
};

export const pagePaths = {
  home: '/',
  about: '/about',
  portfolio: '/portfolio',
  contact: '/contact',
};

export function getPageUrl(page) {
  const path = pagePaths[page];
  return path ? new URL(path, site.url).href : undefined;
}
