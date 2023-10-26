import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

import './index.css';
import App from './App/App'

//Páginas
import Agendamentos from './Routes/Agendamentos';
import Assistidos from './Routes/Assistidos';
import Configuracoes from './Routes/Configuracoes';
import Demandas from './Routes/Demandas';
import Login from './Routes/Login';
import Usuarios from './Routes/Usuarios';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/Agendamentos",
        element: <Agendamentos />
      },
      {
        path: "/Assistidos",
        element: <Assistidos />
      },
      {
        path: "/Configuracoes",
        element: <Configuracoes />
      },
      {
        path: "/",
        element: <Demandas />
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Usuarios",
        element: <Usuarios />
      },
    ],

  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();