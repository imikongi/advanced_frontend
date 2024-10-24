import {createBrowserRouter} from 'react-router-dom';
import {ThemeProvider} from 'app/providers/ThemeProvider';
import App from 'app/App';
import React, {Suspense} from 'react';
import {HomePage} from 'pages/HomePage';
import {AboutPage} from 'pages/AboutPage';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about'
}

export const router = createBrowserRouter([
  {
    path: RoutePath.main,
    element:
      <ThemeProvider>
        <App />
      </ThemeProvider>   ,
    children: [
      {
        path: RoutePath.main,
        element:
          <Suspense fallback={<div>Loading...</div>  }>
            <HomePage />
          </Suspense>   ,
      },
      {
        path: RoutePath.about,
        element:
          <Suspense fallback={<div>Loading...</div>  }>
            <AboutPage />
          </Suspense>,
      },
    ],
  },
]);
