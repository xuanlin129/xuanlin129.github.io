import React from 'react';
import { App as AntdApp, ConfigProvider } from 'antd';
import { HelmetProvider } from 'react-helmet-async';
import theme from './config/theme';
import GlobalStyle from './styles/global';
import GlobalSvgDefs from './components/GlobalSvgDefs';
import GlobalSpinner from './components/GlobalSpinner';
import { getOutlet } from 'reconnect.js';
import { useTranslation } from 'react-i18next';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function App({ helmetContext, children }) {
  const { i18n } = useTranslation();
  React.useEffect(() => {
    getOutlet('loading').update({ loading: false });
  }, []);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [i18n.language]);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: theme.primary,
          fontSize: 16,
          fontFamily: "'EN_Rg', 'TW_Rg', sans-serif",
        },
        components: {
          Input: {
            colorBorder: 'transparent',
          },
          Select: {
            colorBorder: 'transparent',
          },
          Checkbox: {
            colorBorder: 'transparent',
          },
          Dropdown: {
            fontSize: 14,
            fontFamily: "'EN_Bd', 'TW_Bd', sans-serif",
          },
        },
      }}
    >
      <AntdApp>
        <HelmetProvider context={helmetContext}>
          <GlobalStyle />
          <GlobalSvgDefs />
          <GlobalSpinner />
          {children}
        </HelmetProvider>
      </AntdApp>
    </ConfigProvider>
  );
}

export default App;
