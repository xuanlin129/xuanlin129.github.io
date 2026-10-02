import { StrictMode } from 'react';
import { I18nextProvider } from 'react-i18next';
import './stores';
import App from './App';

export function createApp({ i18n, helmetContext, children }) {
  return (
    <StrictMode>
      <I18nextProvider i18n={i18n}>
        <App helmetContext={helmetContext}>{children}</App>
      </I18nextProvider>
    </StrictMode>
  );
}
