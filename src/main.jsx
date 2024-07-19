import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './pages/App.jsx'
import Login from './pages/Login.jsx'
import Automations from './pages/automations/Automations.jsx'
import Project from './pages/project/Project.jsx'
import Teams from './pages/teams/Teams.jsx'
import Run from './pages/run/Run.jsx'
import Support from './pages/support/Support.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/automations", element: <Automations /> },
      { path: "/automations/:id", element: <Project /> },
      { path: "/teams", element: <Teams /> },
      { path: "/", element: <Run /> },
      { path: "/support", element: <Support /> }
    ]
  },
  {
    path: "/login",
    element: <Login />,
    children: [
      {path: "/login", element: <Login />}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
