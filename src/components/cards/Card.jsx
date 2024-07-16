import "./card.css";
import classNames from "classnames";
import { Navigate, useNavigate } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
export default function Card({ producto }) {
  const navigate = useNavigate();

  const handleCardClick = (key) => {
    navigate(`/producto/${key}`);
  };
  return (
    <div
      className={classNames("card", {
        pv: producto.estado === "preventa",
        new: producto.estado === "nuevo",
      })}
      onClick={() => handleCardClick(producto.id)}
    >
      <span></span>
      <div className="card-container">
        <div className="card-gamecover-container">
          <img className="card-gamecover" src={producto.img} alt="game-cover" />
        </div>
        <div className="card-info-container">
          <strong className="tittle-card">{producto.nombre}</strong>
          <p className="previus-price">{producto.precio}</p>
          <strong className="actual-price">
            $ {producto.precio_oferta} CLP
          </strong>
          <button>
            {" "}
            <FaCartArrowDown />
            Agregar al carro
          </button>
        </div>
      </div>
    </div>
  );
}
