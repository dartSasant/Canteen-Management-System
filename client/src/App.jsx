import { Routes, Route, BrowserRouter } from "react-router-dom";
import Approutes from "./routes/pages";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginCard />} />
        <Route path="/signup" element={<RegisterCard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
