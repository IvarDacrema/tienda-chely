import "./Navbar.css";


import { CartWidget } from "../cartWidget/CartWidget";

const NavBar = () => {

    const nombre = "Articulos"

  return (
    <div className="navbar-container">
      <div className="container-logo">
        <img
          className="logo-navbar"
          src="https://res.cloudinary.com/dczsskjpw/image/upload/v1669641179/kisspng-video-game-gamer-aerobolt-the-surge-5aef74e40aba85.299781691525642468044_zzp8jf.jpg"
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
