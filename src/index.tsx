import {createRoot} from 'react-dom/client';
import React, {StrictMode, Suspense} from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App';
import {LazyHomePage} from './pages/MainPage/HomePage.async';
import {LazyAboutPage} from './pages/AboutPage/AboutPage.async';
import Loader from './components/Loader/Loader';
import ThemeProvider from './theme/ThemeProvider';

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
          <Suspense fallback={<Loader/>}>
              <LazyHomePage />
          </Suspense>   ,
      },
      {
        path: '/about',
        element:
          <Suspense fallback={<Loader/>}>
              <LazyAboutPage />
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
