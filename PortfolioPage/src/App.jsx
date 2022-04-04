import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import LandPage from "./Pages/LandPage";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<LandPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
