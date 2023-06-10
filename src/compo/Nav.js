import React from "react";
import clsx from "clsx";
import '../style/web_cafe.css'
import '../style/slide.css'
import '../style/contentslider.css'
import { useNavigate } from "react-router-dom";

const Nav = ({ nav, setNav }) => {
    const navigate = useNavigate();
    const handleClickMenu = () => {
        setNav("Menu");
        navigate("/")
    }
    return (

        <nav id="ver_menu">
            <section>
                <a
                    onClick={() => setNav("Home")}
                    className={clsx({ active: nav === "Home" })}
                >
                    Home
                </a>
                <a
                    onClick={() => setNav("About")}
                    className={clsx({ active: nav === "About" })}
                >
                    About
                </a>
                <a
                    onClick={() => setNav("Locations")}
                    className={clsx({ active: nav === "Locations" })}
                >
                    Location
                </a>
                <a
                    onClick={handleClickMenu}
                    className={clsx({ active: nav === "Menu" })}
                >
                    Menu
                </a>
                <a
                    onClick={() => setNav("Contact")}
                    className={clsx({ active: nav === "Contact" })}
                >
                    Contact
                </a>
            </section>
            <section id="cafe">
                <img src="../images/cafe.png" height="190" width="135" alt="cafe" />
            </section>
        </nav>

    );
};

export default Nav;
