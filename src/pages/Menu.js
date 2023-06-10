import React, { useState } from 'react';
import '../style/web_cafe.css'
import '../style/slide.css'
import SubMenu from '../menu';
import { Routes, Route } from "react-router-dom"
import BlackCoffeePage from './BlackCoffee';

const Menu = () => {

    return (
        <main style={{ width: "80%" }}>
            <Routes>
                <Route path="/" element={<SubMenu />} />
                <Route path="/black-coffee" element={<BlackCoffeePage />} />
            </Routes>
        </main>
    );
}

export default Menu;
