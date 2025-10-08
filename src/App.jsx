import React from 'react'
import { createBrowserRouter, RouterProvider,  } from 'react-router-dom';
import Contact from './pages/Contact';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
    const routes = createBrowserRouter([
      {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },

          {
            path: "/contact",
            element: <Contact />,
          },
          {
            path: "/about",
            element: <About />,
          },
          {
            path: "/projects",
            element: <Projects/>,
          },
        ],
      },
    ]);
    
  return <RouterProvider router={routes} />;
}

export default App
