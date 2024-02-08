
import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
// COMPONENTS  
import Home from './components/home/Home';

// SCSS 
import "../src/styles/styles.scss";
import CurrentProduct from './components/current-product/CurrentProduct';
import Header from './components/layouts/header/Header';
import AllProducts from './components/all-products/AllProducts';
import Search from './components/search/Search';

// CREATING A ROUTER 
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Header />} >
    <Route index element={<Home />} />
    <Route path="product/:id" element={<CurrentProduct />} />
    <Route path="products" element={<AllProducts />} />
    <Route path="products/product/:id" element={<CurrentProduct />} />
    <Route path="search" element={<Search />} />
  </Route>
))

export default function App() {
  return (
        <RouterProvider router={router} />
  )
}
