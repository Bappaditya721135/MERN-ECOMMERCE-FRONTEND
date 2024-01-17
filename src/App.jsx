
import React from 'react';
// COMPONENTS  
import Header from "./components/layouts/header/Header";
import Footer from './components/layouts/footer/Footer';

// SCSS 
import "../src/styles/styles.scss";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Footer />
    </div>
  )
}
