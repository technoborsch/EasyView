import {Routes, Route} from "react-router-dom";

import Layout from "./pages/Layout";
import HomePage from "./components/HomePage";
import LoginForm from "./components/LoginForm";

function App() {
    return <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='login' element={<LoginForm />} />
        </Route>
    </Routes>
}

export default App;
