
import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
// COMPONENTS  
import Home from './components/home/Home';

// SCSS 
import "../src/styles/styles.scss";

// CREATING A ROUTER 
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Home />} />
))

export default function App() {
  return (
        <RouterProvider router={router} />
  )
}
