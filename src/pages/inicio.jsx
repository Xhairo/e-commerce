import React from "react";
import Banner from "../components/banners/Banner";
import Database from "../assets/products/allproducts";
import Card from "../components/cards/Card";
import "./Pages.css";
export default function Inicio() {
  const dataNewFilter = Database.filter(
    (producto) => producto.estado === "nuevo"
  );
  const dataPvFilter = Database.filter(
    (producto) => producto.estado === "preventa"
  );
  return (
    <div className="page-container">
      <section className="container">
        <Banner titulo="Juegos Mas Recientes" set="mostrecent" />
        <div className="grid-container">
          {dataNewFilter.map((producto) => (
            <Card key={producto.id} producto={producto} />
          ))}
        </div>
      </section>
      <section className="container">
        <Banner titulo="Preventas" set="prox" />
        <div className="grid-container">
          {dataPvFilter.map((producto) => (
            <Card key={producto.id} producto={producto} />
          ))}
        </div>
      </section>
    </div>
  );
}
