import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import MainLayout from './Componenet/Layout/MainLayout'
import Home from './Componenet/Home/Home'
import Login from './Componenet/Login'
import Register from './Componenet/Register'
import AuthProvider from './Componenet/Provider/AuthProvider'
import Order from './Componenet/Order/Order'
import PrivateRoute from './PrivateRoute/PrivateRoute'

const router=createBrowserRouter([
  {
    path:'/',
    element: <MainLayout />,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/login',
        element:<Login />,
      },
      {
        path:"/register",
        element:<Register />
      },
      {
        path:"/order",
        element:<PrivateRoute><Order /></PrivateRoute>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
