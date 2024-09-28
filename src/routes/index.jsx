import {
    createBrowserRouter,
  } from "react-router-dom";
import { Home, RepoSpecific } from "../pages";
import { MainLayout } from "../layouts";
import { NotFound } from "../component";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <div>An error has occured. Do something about it</div>,
        children: [
          {
            path: '/',
            element: <Home />,
          },
          {
            path: 'repo/:name',
            element: <RepoSpecific />,
          },
          {
            path: '*',
            element: <NotFound />
          }
        ]
    },
    
    
  ]);