import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import data from './data';
import './App.css';
import Cart from './components/Cart';
import Content from './components/Content';
import Navbar from './components/Navbar';
import ProductModal from './components/ProductModal';

const App = () => {
    const [content, setContent] = useState(data);
    const [cart, setCart] = useState([]);

    return (
        <div id="main">
            <Navbar cart={cart} />
            <Routes>
                <Route path="/" element={<Content data={content} />} />
                <Route
                    path="/productModal/:index"
                    element={<ProductModal setCart={setCart} cart={cart} />}
                />
                <Route path="/cart" element={<Cart cartItems={cart} />} />
            </Routes>
        </div>
    );
};

export default App;
