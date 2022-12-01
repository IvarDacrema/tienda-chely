import "./NavBar.css";


import { CartWidget } from "../cartWidget/CartWidget";

const NavBar = () => {

    const nombre = "Articulos"

  return (
    <div className="navbar-container">
      <div className="container-logo">
        <img
          className="logo-navbar"
          src="https://res.cloudinary.com/dczsskjpw/image/upload/v1669642320/Chely-design-fluffy-name_t7txar.png"
          alt=""
        />
      </div>
      <ul className="navbar">
        <li className="navbar-item">{nombre}</li>
        <li className="navbar-item">Consolas</li>
        <li className="navbar-item">PC Gamers</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
