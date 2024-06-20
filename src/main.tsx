import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/buttons.css'
import './styles/main.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Inicio from './pages/index'
import Biblioteca from './pages/Bibiloteca'
import Ruleta from './pages/Ruleta';
import Game from './pages/QAGame';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Inicio />
  },
  {
    path: '/library',
    element: <Biblioteca />
  },{
    path: '/ruleta',
    element: <Ruleta />
  },
  {
    path: '/qagame',
    element: <Game />
  }
]) 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
