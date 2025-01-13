
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router.tsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { StrictMode } from 'react';

createRoot(document.getElementById('root')!).render(
  <StrictMode  >
    <ToastContainer autoClose={1000} />
    <RouterProvider router={router} />
  </StrictMode>,
);
