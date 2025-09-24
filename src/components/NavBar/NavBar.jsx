import "./NavBar.css";
import logo from "../../assets/img/a-favor-de-veta-logo.webp"
import CartWidget from "../CartWidget/CartWidget.jsx"

const NavBar = () => (
    <nav>
        <div className="logo-contenedor">
            <img src={logo} className="logoPagina" alt="logo de la pagina" />
            <h1>A Favor De Veta</h1>
        </div>
    
        <ul className="categoria">
            <li>Servicios</li>
            <li>Productos</li>
            <li>Proyectos Realizados</li>
        </ul>

        <CartWidget />
    </nav>
)

export default NavBar;