import React, {useState} from "react";
import {Outlet} from "react-router-dom";
import {CssBaseline} from "@mui/material";
import NavBar from "../components/NavBar";
import NavMenu from "../components/NavMenu";

export default function Layout() {

    const[menuState, toggleMenu] = useState(false);

    const handleMenuToggle = () => {
        toggleMenu(!menuState)
    };

  return (
        <CssBaseline>
            <NavBar
                togglerCallback={handleMenuToggle}
            />
            <NavMenu
                open={menuState}
                togglerCallback={handleMenuToggle}
            />
            <Outlet/>

        </CssBaseline>
  );
}
