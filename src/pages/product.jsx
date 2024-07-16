import data from "../assets/products/allproducts";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Grid, Typography, Button } from "@mui/material";
import "./Pages.css";
export default function Product() {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const datos = data.find((prod) => prod.id == id);
    setProducto(datos);
    console.log(datos);
  }, []); //Al tener la depencia vacia, indica que se renderizara una vez el useEffect. Si no fuera asi, se actualizaria cada vez que el usuario interactuara con la app web

  return (
    <div className="page-container">
      <div className="product-container">
        <div className="grid-product-container">
          <img src={producto && producto.img} alt="imagen del producto" />
          <div className="details-product">
            <h2>{producto && producto.nombre}</h2>
            <p>{producto && producto.descripcion}</p>
            <h3>{producto && producto.categoria}</h3>
            <span></span>
            <span>Precio {producto && producto.precio} </span>
            <strong>Precio Oferta {producto && producto.precio_oferta}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
