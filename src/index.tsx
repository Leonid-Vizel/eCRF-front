import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'app/styles/index.scss';
import { AuthProvider } from 'app/providers/AccessProviders';
import { RootStylesProvider } from 'app/providers/ThemeProvider';
import store from './store/store';
import App from './app/App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RootStylesProvider>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </RootStylesProvider>
  </Provider>
  ,
);
