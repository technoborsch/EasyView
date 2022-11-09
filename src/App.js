import React, {useState, useEffect} from "react";

import Box from '@mui/material/Box';
import {CssBaseline} from "@mui/material";

import NavBar from "./NavBar";
import NavMenu from "./NavMenu";

import APIService from "./APIService";

const apiUrl = 'https://easyview.myk8s.ru/api/v1'
const api = new APIService(apiUrl);

function App() {
    const[auth, setAuth] = useState(true);

    const handleAuth = () => {
        setAuth(!auth);
    };

    const[menuState, toggleMenu] = useState(false);

    const[projects, changeProjects] = useState([]);

    useEffect(() => {
        api.getProjectsList().then((projectList) => {
            changeProjects(projectList);
        })
    }, []);

    const handleMenuToggle = () => {
        toggleMenu(!menuState)
    };

  return (
      <Box>
        <CssBaseline>
            <NavBar
                auth={auth}
                handleAuth={handleAuth}
                togglerCallback={handleMenuToggle}
            />
            <NavMenu
                api={api}
                auth={auth}
                open={menuState}
                togglerCallback={handleMenuToggle}
                projects={projects}
            />
        </CssBaseline>
      </Box>
  );
}

export default App;
