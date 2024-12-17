
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router.tsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

createRoot(document.getElementById('root')!).render(
  <>
    <ToastContainer autoClose={1000} />
    <RouterProvider router={router} />
  </>,
);
