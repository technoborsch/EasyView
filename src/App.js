import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";

import {CssBaseline} from "@mui/material";

import NavBar from "./NavBar";
import NavMenu from "./NavMenu";
import Scene from "./Scene";

import APIService from "./APIService";
import LoginForm from "./LoginForm";

const apiUrl = 'https://easyview.myk8s.ru/api/v1'
const api = new APIService(apiUrl);

function App() {

    const user = useSelector(state => state.user);

    const[menuState, toggleMenu] = useState(false);

    const handleMenuToggle = () => {
        toggleMenu(!menuState)
    };

    const[loadingSuccess, toggleLoadingSuccess] = useState(true);

    const setLoadingSuccess = (loadingState) => {
        toggleLoadingSuccess(loadingState);
    }

    const[isLoading, toggleLoading] = useState(false);

    const setIsLoading = (state) => {
        toggleLoading(state);
    };

    const[projects, changeProjects] = useState([]);

    const reloadProjects = () => {
        setIsLoading(true);
        api.getProjectsList().then((projectList) => {
            changeProjects(projectList);
            setLoadingSuccess(true);
        }).catch(() => {
            setLoadingSuccess(false);
        });
        setIsLoading(false);
    };

    useEffect(() => {
        reloadProjects();
    }, []);

  return (
        <CssBaseline>
            <NavBar
                togglerCallback={handleMenuToggle}
            />
            <NavMenu
                api={api}
                isLoading={isLoading}
                loadingSuccess={loadingSuccess}
                reload={reloadProjects}
                open={menuState}
                togglerCallback={handleMenuToggle}
                projects={projects}
            />
            {user? <Scene /> : <LoginForm />}

        </CssBaseline>
  );
}

export default App;
