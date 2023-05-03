import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Layout/Main';
import Home from './components/Layout/Home/Home';
import Error_page from './Error_page';
import LogIn from './components/LogIn/LogIn';
import Registration from './components/Registration/Registration';
import AuthProviders from './components/AuthProviders/AuthProviders';
import Blocks from './components/Blocks/Blocks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error_page></Error_page>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<LogIn></LogIn>
      },
      {
        path:"registration",
        element:<Registration></Registration>
      },
      {
        path:'/block',
        element:<Blocks></Blocks>
      }
      
    ]},
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProviders>
<RouterProvider router={router} />
</AuthProviders>
  </React.StrictMode>,
)
