import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/colors.css'
import './styles/main.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Inicio from './pages/index'
import Biblioteca from './pages/Bibiloteca'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Inicio />
  },
  {
    path: '/library',
    element: <Biblioteca />
  }
]) 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
