export function renderDocument(template, { html, head, styles }) {
  return template
    .replace(/<title>.*?<\/title>/s, () => head)
    .replace('<!--ssr-head-->', () => styles)
    .replace('<!--ssr-outlet-->', () => html);
}
