import React, {useContext} from "react";
import { GlobalContext } from "../App";

export default function Header() {

    const {header} = useContext(GlobalContext);


  return (
    <header ref={header} className="header">
      <h1 className="header__title">STOCK ALARM</h1>
      <nav className="navbar__wrapper">
        <ul className="navbar">
          <li className="nav__item">Home</li>
          <li className="nav__item">Features</li>
          <li className="nav__item">Blog</li>
          <li className="nav__item">FAQ</li>
          <li className="nav__item">Contact</li>
          <li className="nav__item">Download</li>
          <li className="nav__item">Login / SignUp</li>
        </ul>
      </nav>
    </header>
  );
}
