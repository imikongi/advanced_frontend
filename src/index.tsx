import {createRoot} from 'react-dom/client';
import React, {StrictMode, Suspense} from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './app/App';
import {ThemeProvider} from 'app/providers/ThemeProvider';
import {LazyHomePage} from 'pages/HomePage/ui/HomePage.async';
import {LazyAboutPage} from 'pages/AboutPage/ui/AboutPage.async';
import {HomePage} from 'pages/HomePage';
import {AboutPage} from 'pages/AboutPage';

const router = createBrowserRouter([
  {
    path: '/',
    element:
      <ThemeProvider>
        <App />
      </ThemeProvider>   ,
    children: [
      {
        path: '/',
        element:
          <Suspense fallback={<div>Loading...</div>  }>
              <HomePage />
          </Suspense>   ,
      },
      {
        path: '/about',
        element:
          <Suspense fallback={<div>Loading...</div>  }>
              <AboutPage />
          </Suspense>,
      },
    ],
  },
]);



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
