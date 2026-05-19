import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterCard from "./Register";
import LoginCard from "./LoginCard";

const App = () => {
  return (
  <BrowserRouter> 
  <Routes>
    <Route path="/login" element={<LoginCard/>} />
    <Route path="/signup" element={<RegisterCard />} />
  </Routes>
  </BrowserRouter>
  );
};

export default App;
