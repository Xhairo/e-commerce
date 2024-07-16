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
  }, []); //Al tener la depencia vacia, indica que se renderizara una vez el useEffect. Si no fuera asi, se actualizaria cada vez que el usuario interactuara con la app web
  const generarPedido = (producto) => {
    const [primera, segunda, tercera] = producto.nombre.split(" ", 3); //Estamos abstrayendo el dato desde un array
    const cod = `${primera[0]}-${segunda[0]}-${tercera[0]}-id-${producto.id}`;
    console.log(cod);

    producto["codigo"] = cod;
    producto["cantidad"] = 1;
    const nuevoArray = [...carrito, producto];
    /* carrit.push(producto) */
    setCarrito(nuevoArray);
  };

  return (
    <div className="page-container">
      <div className="product-container">
        <div className="grid-product-container">
          <img src={producto.img} alt="imagen del producto" />
          <div className="details-product">
            <h2>{producto.nombre}</h2>
            <p>Descripcion:{producto.descripcion}</p>
            <span>Categoria: {producto.categoria}</span>
            <span>Precio </span>
            <strong>Precio Actual </strong>
          </div>
        </div>
      </div>
    </div>
  );
}
