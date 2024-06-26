import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Start from './routes/start';
import MerchPage from './routes/merch';
import OverOns from './routes/overons';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Start />
  },
  {
    path: '/merch',
    element: <MerchPage />
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
