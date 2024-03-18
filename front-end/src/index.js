import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Start from './routes/start';
import PrijzenPage from './routes/prijzen';
import BoekenPage from './routes/boeken';
import MerchPage from './routes/merch';
import SocialsPage from './routes/socials';
import OverOns from './routes/overons';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Start />
  },
  {
    path: '/prijzen',
    element: <PrijzenPage />
  },
  {
    path: '/boeken',
    element: <BoekenPage />
  },
  {
    path: '/merch',
    element: <MerchPage />
  },
  {
    path: '/socials',
    element: <SocialsPage />
  },
  {
    path: '/over_ons',
    element: <OverOns />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
