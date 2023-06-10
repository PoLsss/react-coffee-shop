import React, { useState, useContext } from 'react';
import SnowAnimation from './compo/Snow';
import Header from './compo/Header';
import Home from './compo/Home';
import Footer from './compo/Footer';
import About from './pages/About';
import Locations from './pages/Location';
import Nav from "./compo/Nav";
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import BlackCoffeePage from './pages/BlackCoffee';
import { BackgContext } from './compo/BackgroundContext';



function Homepage() {
  const [nav, setNav] = React.useState("Home");
  const [backg, setBackg] = useContext(BackgContext);
  
  return (
    <body style={{ backgroundColor: backg }}>
      <div style={{ padding: "10px 0px" }}>
        <div id="container">
          <SnowAnimation />
          <Header />
          <main >
            <Nav nav={nav} setNav={setNav} />
            {nav === "Home" ? <Home /> : nav === "About" ? <About /> : nav === 'Locations' ? <Locations /> : nav === 'Menu' ? <Menu /> : <Contact />}
            {/* <BlackCoffeePage /> */}
          </main>
          <Footer />
        </div>
      </div>
    </body>
  );
}

export default Homepage;
