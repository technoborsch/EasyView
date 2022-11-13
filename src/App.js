import React, {useState} from "react";
import {useSelector} from "react-redux";

import {CssBaseline} from "@mui/material";

import NavBar from "./components/NavBar";
import NavMenu from "./components/NavMenu";
import Scene from "./components/Scene";

import LoginForm from "./components/LoginForm";

function App() {

    const user = useSelector(state => state.user);

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
            {user? <Scene /> : <LoginForm />}

        </CssBaseline>
  );
}

export default App;
