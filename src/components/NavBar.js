import "./NavBar.css";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
    <nav className="Menu">
        <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
            <li><CartWidget /></li>
        </ul>
    </nav>
    );
}

export default NavBar;