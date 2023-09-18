import './index.css'
import {Login, Signup, Onboarding, Dashboard, AllTables, Layout, Insights, Pricing} from 'pages'
import { createBrowserRouter } from "react-router-dom";
import {routes} from 'routes'
import Auth from './Auth/Auth';

export const router = createBrowserRouter([
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
    element: <Auth><Layout /></Auth>,
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


function App() {

  return (
    <>
      
    </>
  )
}

export default App
