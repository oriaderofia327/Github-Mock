import {
    createBrowserRouter, useNavigate,
  } from "react-router-dom";
import { Home, RepoSpecific, Error } from "../pages";
import { MainLayout } from "../layouts";
import { ErrorFallback, NotFound } from "../component";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorFallback 
          error=''
          />,
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
            path: '/error-boundary',
            element: <Error />
          },
          {
            path: '*',
            element: <NotFound />
          }
        ]
    },
    
    
  ]);