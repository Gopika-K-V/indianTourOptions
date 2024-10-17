import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import CommonLayout from './pages/CommonLayout/commonLayout.jsx';
import Kochi from './pages/Kochi/kochi';
import Gallery from './pages/Gallery/index.js';
import ContactUs from './pages/ContactUs/index.js';


const router = createBrowserRouter([
  {
    path: "/",
    element: <CommonLayout />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/contact-us",
        element: <ContactUs/>,
      },
      {
        path: "/kochi",
        element: <Kochi/>
      },
      {
        path: "/gallery",
        element: <Gallery/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router} />
  </React.StrictMode>,
)