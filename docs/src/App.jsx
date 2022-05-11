import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import LandPage from "./Pages/LandPage";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<LandPage />}></Route>
                <Route path="/About" element={<About />}></Route>
                <Route path="/Projects" element={<Projects />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
