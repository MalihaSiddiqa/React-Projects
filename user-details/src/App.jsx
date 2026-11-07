import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Students from './components/Students'
import About from './components/About'
import NotFound from './components/NotFound'

// home - /
// about - /about
// students - /students


// Step 1: use 'createBrowserRouter' to create a browser router
const router = createBrowserRouter([
  { path: '/', element: <Home />  },
  { path: '/about', element: <About />  },
  { path: '/students/:id', element: <Students /> },
  { path: '/*', element: <NotFound/>}

])

// Step 2: use 'RouterProvider' to initialize/start using router
const App = () => {
  return (
    <RouterProvider router={router} />
    // <Home />
  )
}

export default App


// random students data: https://gist.github.com/OmerAhmedQuadri/eaf66aef41bea18a748d29502203e1b5