import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';
import UsersPage from './pages/users.jsx';
import ProductsPage from './pages/products.jsx';

import './styles/global.css';

const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello world!</div>,
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/users",
    element: <UsersPage />
  },
  {
    path: "/products",
    element: <ProductsPage />
  },
]);

// la file chay dau tien
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* render component App */}
    {/* nhet App vao ben trong div root */}
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
