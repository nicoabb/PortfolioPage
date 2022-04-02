import { FaLaptopCode, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const NavBar = () => {
    return (
        <nav>
            <a href="">
                <FaLaptopCode />
                Nicolás Briceño
            </a>
            <a href="">About Me</a>
            <a href="">Projects</a>
            <a href="">Resume</a>
            <a href="">
                <FaGithubSquare />
            </a>
            <a href="">
                <FaLinkedin />
            </a>
        </nav>
    );
};

export default NavBar;
