import {createRoot} from 'react-dom/client';
import React, {StrictMode} from 'react';
import {RouterProvider} from 'react-router-dom';
import {router} from 'app/providers/router';



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
