
import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
// COMPONENTS  
import Home from './components/home/Home';
import CurrentProduct from './components/current-product/CurrentProduct';
import Header from './components/layouts/header/Header';
import AllProducts from './components/all-products/AllProducts';
import Search from './components/search/Search';
import UserLogin from './components/authentication/UserLogin';
import UserRegistration from './components/authentication/UserRegistration';
import Profile from "./components/account/Profile"
import MyOrder from './components/orders/MyOrder';
import ChangePassword from './components/password/ChangePassword';
import EditProfile from './components/account/EditProfile';
import MyCart from './components/cart/MyCart';

// SCSS 
import "../src/styles/styles.scss";
import UnderDevComponent from './components/under-development/UnderDevComponent';

// CREATING A ROUTER 
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Header />} >
    <Route index element={<Home />} />
    <Route path="product/:id" element={<CurrentProduct />} />
    <Route path="products" element={<AllProducts />} />
    <Route path="products/product/:id" element={<CurrentProduct />} />
    <Route path="search" element={<Search />} />
    <Route path="/login" element={<UserLogin />} />
    <Route path="/register" element={<UserRegistration />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/orders" element={<MyOrder />} />
    <Route path="/change-password" element={<ChangePassword />} />
    <Route path="/edit-profile" element={<EditProfile />} />
    <Route path="/my-cart" element={<MyCart />} />
    <Route path="/under-development" element={<UnderDevComponent />} />
  </Route>
))

export default function App() {
  return (
        <RouterProvider router={router} />
  )
}
