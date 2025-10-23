import "./NavBar.css";
import logo from "../../assets/img/a-favor-de-veta-logo.webp"
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => (
    <nav>

        <div className="logo-contenedor">
            <Link to="/">
                <img src={logo} className="logoPagina" alt="logo de la pagina" />
            </Link>
            <h1>A Favor De Veta</h1>
        </div>
    
        <ul className="categoria">
            <li>
                <Link to="/category/mesas"> Mesas</Link>
            </li>
            <li>
                <Link to="/category/sillas"> Sillas</Link>
            </li>
            <li>
                <Link to="/category/muebles"> Muebles</Link>
            </li>
        </ul>

        <CartWidget />
    </nav>
)

export default NavBar;