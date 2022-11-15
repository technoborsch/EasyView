import {CssBaseline} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import LoginForm from "../components/LoginForm";

export default function LoginPage() {

  return (
        <CssBaseline>
            <AppBar position='static' sx={{marginBottom: '30px'}}>
                <Toolbar />
            </AppBar>
            <LoginForm />
        </CssBaseline>
  );
}