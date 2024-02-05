
import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
// COMPONENTS  
import Home from './components/home/Home';

// SCSS 
import "../src/styles/styles.scss";
import CurrentProduct from './components/current-product/CurrentProduct';

// CREATING A ROUTER 
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Home />} >
    <Route path="product/:id" element={<CurrentProduct />} />
    <Route path="hi" element={<h2>this is view product</h2>} />
  </Route>
))

export default function App() {
  return (
        <RouterProvider router={router} />
  )
}
