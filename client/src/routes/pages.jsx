import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginCard from "../pages/form/LoginCard";
import RegisterCard from "../pages/form/Register";
import Dashboard from "../Dashboard";

const Approutes = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginCard />} />
            <Route path="/signup" element={<RegisterCard />} />
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
        </BrowserRouter>
    )
};

export default Approutes;