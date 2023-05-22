import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Páginas
import Home from './routes/Home';
import Adicionar from './routes/Adicionar';

// Importando algumas coisas que vamos utilizar do Router
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

// Criar objeto de configuração de roteamento
const router = createBrowserRouter([
  {
    // Passar qual é o elemento principal
    element: <App />,

    // São as rotas
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/adicionar",
        element: <Adicionar />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)