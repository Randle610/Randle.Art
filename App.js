import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Prints from './pages/Prints';
import Apparel from './pages/Apparel';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prints" element={<Prints />} />
        <Route path="/apparel" element={<Apparel />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
