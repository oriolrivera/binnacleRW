import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Binnacle, {loader as appLoader} from './Presentation/pages/Binnacles'
import './Presentation/styles/index.css'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Binnacle />,
      loader: appLoader,
      children:[

      ]
    }
  ]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
