import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { App as AntdApp, ConfigProvider } from 'antd';
import { HelmetProvider } from 'react-helmet-async';
import theme from './config/theme';
import router from './router';
import GlobalStyle from './styles/global';
import GlobalSvgDefs from './components/GlobalSvgDefs';
import GlobalSpinner from './components/GlobalSpinner';
import { getOutlet } from 'reconnect.js';

window.addEventListener('load', () => {
  setTimeout(() => {
    getOutlet('loading').update({ loading: false });
  }, 500);
});

function App() {
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
        <HelmetProvider>
          <GlobalStyle />
          <GlobalSvgDefs />
          <GlobalSpinner />
          <RouterProvider router={router} />
        </HelmetProvider>
      </AntdApp>
    </ConfigProvider>
  );
}

export default App;
