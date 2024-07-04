import React from 'react'
import ReactDOM from 'react-dom/client'
//styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss'
//comps
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Inicio from './pages/index'
import Biblioteca from './pages/Bibiloteca'
import Ruleta from './pages/Ruleta';
import Game from './pages/QAGame';
import QAGamePlay from './pages/QAGame_play';
import LoadingTimer from './config/LoadingTimer';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Inicio />
  },
  {
    path: '/library',
    element: <Biblioteca />
  },
  {
    path: '/library/:id',
    element: <Biblioteca />
  },
  {
    path: '/ruleta',
    element: <Ruleta />
  },
  {
    path: '/qagame',
    element: <Game />
  },
  {
    path: '/qagame/play',
    element: <QAGamePlay />
  },
  {
    path: '/testload',
    element: <LoadingTimer />
  }
]) 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
