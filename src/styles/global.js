import { css, createGlobalStyle } from 'styled-components';
import theme from '../config/theme';

const fontCdnBaseUrl = 'https://cdn.jsdelivr.net/gh/xuanlin129/xuanlin129.github.io@f714478257c6711e41bb32a567417dfc3506df6a/src/assets/fonts';

const style = css`
  :root {
    --primary-color: ${theme.primary};
    --secondary-color: ${theme.secondary};
    --dark-gray-color: ${theme.darkGray};
    --light-gray-color: ${theme.lightGray};
    --navbar-height: 80px;
    --base-padding: 16px;
  }

  body {
    color: #202020;
    background: #fff;
    overflow-x: hidden;
    font-family: 'EN_Rg', 'TW_Rg', sans-serif;
    -webkit-tap-highlight-color: transparent;
  }

  .container {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 var(--base-padding);
  }

  /* 修正 Ant Design Row 的負邊距導致的溢出問題，並使其置中 */
  .ant-row {
    margin-inline: 0 !important;
  }

  h2.title {
    font-size: 2rem;
    font-family: 'EN_He', 'TW_Bd', sans-serif;
    text-align: center;
    letter-spacing: 2px;
    margin: 0 auto;
    position: relative;
    z-index: 1;

    @media (min-width: 768px) {
      font-size: 2.25rem;
      margin: 0;
    }

    @media (min-width: 992px) {
      font-size: 2.5rem;
      margin: 0;
    }
  }

  @media (min-width: 576px) {
    :root {
      --navbar-height: 120px;
    }
  }
`;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'TW_Rg';
    src: url(${fontCdnBaseUrl}/LINESeedTW_Rg.woff2) format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: 'TW_Bd';
    src: url(${fontCdnBaseUrl}/LINESeedTW_Bd.woff2) format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: 'EN_Rg';
    src: url(${fontCdnBaseUrl}/LINESeedSans_Rg.woff2) format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: 'EN_Bd';
    src: url(${fontCdnBaseUrl}/LINESeedSans_Bd.woff2) format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }

  @font-face {
    font-family: 'EN_He';
    src: url(${fontCdnBaseUrl}/LINESeedSans_He.woff2) format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }

  ${style}
`;

export default GlobalStyle;
