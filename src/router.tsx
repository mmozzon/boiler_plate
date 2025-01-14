import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home'; 
import App from './App'; 

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Composant principal qui contient un <Outlet />
    children: [
      {
        path: "/",
        element: <Home /> 
      }
    ]
  }
]);
