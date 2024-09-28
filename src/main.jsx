import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home, RepoSpecific } from './pages'
import './styles/index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import {router} from './routes';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
