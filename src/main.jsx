import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {Login, Signup, Onboarding, Dashboard, AllTables, Insights, Pricing, Root} from 'pages'
import {routes} from 'routes'
import Auth from './Auth/Auth';

const router = createBrowserRouter([
  {
    path: routes.LOGIN,
    element: <Login />,
  },
  {
    path: routes.SIGNUP,
    element: <Signup />
  },
  {
    path: routes.ONBOARDING,
    element: <Auth><Onboarding /></Auth>,
  },
  {
    path: routes.DASHBOARD,
    element: <Auth><Root /></Auth>,
    children: [
      {
        path: routes.DASHBOARD,
        element: <Dashboard />
      },
      {
        path: routes.ALLTABLES,
        element: <AllTables />
      },
      {
        path: routes.INSIGHTS,
        element: <Insights />
      },
      {
        path: routes.PRICING,
        element: <Pricing />
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
