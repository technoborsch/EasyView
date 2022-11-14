import React, {useState} from "react";
import {CssBaseline} from "@mui/material";
import NavBar from "../components/NavBar";
import NavMenu from "../components/NavMenu";

import {PrivateOutlet} from "../utils/PrivateOutlet";

export default function Layout() {

    const[menuState, toggleMenu] = useState(false);

    const handleMenuToggle = () => {toggleMenu(!menuState)};

  return (
        <CssBaseline>
            <NavBar
                togglerCallback={handleMenuToggle}
            />
            <NavMenu
                open={menuState}
                togglerCallback={handleMenuToggle}
            />
            <PrivateOutlet/>
        </CssBaseline>
  );
}
