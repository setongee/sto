import React from 'react'
import {
    createBrowserRouter,
  } from "react-router-dom";
import App from '../App';
import Home from '../pages/home/home';
import About from '../pages/about/about';
import News_Events from '../pages/news_events/News_Events';
import News_view from '../pages/news_events/news_view';
import Connect from '../pages/connect/connect';
import Finance from '../pages/financial_statement/Finance';
import Resources from '../pages/resources/resources';
import Authy from '../admin/authy';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <h1>This is an Error Page</h1>,
      children : [
        {
          path: "home",
          element: <Home/>
        },
        {
          path: "connect",
          element: <Connect/>
        },
        {
          path: "financial_statements",
          element: <Resources/>
        },
        {
          path : "about",
          children : [
            {
              path : "",
              element : <About/>
            }
          ]
        },
        {
          path: "newsroom",
          children : [
            {
              path : ":page",
              element : <News_Events/>
            },
            {
              path : "view/:id",
              element : <News_view/>
            }
          ]
        },
        {
          path : "admin",
          children : [
            {
              path : "",
              element : <Authy/>
            },
            {
              path : ":page",
              element : <Authy/>
            }
          ]
        }
      ]
    }
  ]);

  export default router;
  
