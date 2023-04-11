import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Binnacle, {loader as appLoader} from './Presentation/pages/Binnacles'
import './Presentation/styles/index.css'
import CreateBinnacle from './Presentation/pages/CreateBinnacle';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Binnacle />,
      loader: appLoader,
      children:[

      ]
    },
    {
      path: '/CreateBinnacle',
      element: <CreateBinnacle />
    }
  ]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
