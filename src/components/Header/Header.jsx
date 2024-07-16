import { useState } from "react";
import "./Header.css";
import InputSearch from "../Inputs/InputSearch";
import ButtonA from "../buttons/ButtonA";
import { Link } from "react-router-dom";
import SideBar from "../drawer/SideBar";

export default function Header() {
  const [menu, setMenu] = useState("inicio");

  return (
    <header>
      <nav className="header-navbar">
        <strong className="navbar-logo">E-Gamer</strong>
        <InputSearch />
        <ul>
          <li>
            <Link
              to="/e-commerce/"
              onClick={() => setMenu("inicio")}
              className={menu === "inicio" ? "active" : ""}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/e-commerce/pc"
              className={menu === "pc" ? "active" : ""}
              onClick={() => setMenu("pc")}
            >
              PC
            </Link>
          </li>
          <li>
            <Link
              to="/e-commerce/ps"
              className={menu === "ps" ? "active" : ""}
              onClick={() => setMenu("ps")}
            >
              Playstation
            </Link>
          </li>
          <li>
            <Link
              to="/e-commerce/xbox"
              className={menu === "xbox" ? "active" : ""}
              onClick={() => setMenu("xbox")}
            >
              Xbox
            </Link>
          </li>
          <li>
            <Link
              to="/e-commerce/nsw"
              onClick={() => setMenu("nintendo")}
              className={menu === "nintendo" ? "active" : ""}
            >
              Nintendo
            </Link>
          </li>
        </ul>
        <ButtonA />
        <button>Carrito</button>
        <SideBar />
      </nav>
    </header>
  );
}
