import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginCard from "../pages/form/LoginCard";
import RegisterCard from "../pages/form/Register";

const Approutes = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginCard />} />
            <Route path="/signup" element={<RegisterCard />} />
        </Routes>
        </BrowserRouter>
    )
};

export default Approutes;