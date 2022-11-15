import {CssBaseline} from "@mui/material";
import NavBar from "../components/NavBar";

import LoginForm from "../components/LoginForm";

export default function LoginPage() {

  return (
        <CssBaseline>
            <NavBar
                forLoginPage={true}
            />
            <LoginForm />
        </CssBaseline>
  );
}