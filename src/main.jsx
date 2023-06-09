import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'




import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import User from './components/user.jsx';


let router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "user",
    element: <User></User>,
    loader: () => fetch('http://localhost:5000/user')
  },
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router}></RouterProvider>

  </React.StrictMode>,
)
