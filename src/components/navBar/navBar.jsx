import { CartWidget } from "../CartWidget/CartWidget";
import "./navBar.css";
import {Link} from "react-router-dom"


const NavBar = () => {
  

return (
    <div className="navbar-container">
      <Link to="/"className="container-logo">
        <img
          className="logo-navbar"
          src="https://res.cloudinary.com/dczsskjpw/image/upload/v1669642320/Chely-design-fluffy-name_t7txar.png"
          alt=""
        />
      </Link>
      <ul className="navbar">
        <Link to="/" className="navbar-item">Inicio</Link>
        <Link className="navbar-item" to="/category/PCs">PCs</Link>
        <Link className="navbar-item" to="/category/Pantallas">Pantallas</Link>
        <Link className="navbar-item" to="/category/Consolas">Consolas</Link>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;