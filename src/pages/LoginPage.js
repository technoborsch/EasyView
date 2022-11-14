import React, {useState} from "react";
import {CssBaseline} from "@mui/material";
import NavBar from "../components/NavBar";

import LoginForm from "../components/LoginForm";

export default function LoginPage() {

    const[menuState, toggleMenu] = useState(false);

    const handleMenuToggle = () => {toggleMenu(!menuState)};

  return (
        <CssBaseline>
            <NavBar
                forLoginPage={true}
                togglerCallback={handleMenuToggle}
            />
            <LoginForm />
        </CssBaseline>
  );
}