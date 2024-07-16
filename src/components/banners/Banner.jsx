import { useState } from "react";
import "./Banners.css";

export default function Banner({ titulo, set }) {
  console.log(set);

  return (
    <>
      <article className="banner">
        <h3>{titulo}</h3>

        <img
          src={
            set === "mostrecent"
              ? "src/assets/imagenes/eldensofte.jpg"
              : "" || set === "prox"
              ? "src/assets/imagenes/gta6banner.png"
              : "" || set === "pc"
              ? "src/assets/imagenes/elden-ring-fantasy-arpg-key-art-banner.jpg"
              : "" || set === "ps"
              ? "src/assets/imagenes/BANNER-GOD-OF-WAR.png"
              : "" || set === "xbox"
              ? "src/assets/imagenes/forza-l.jpg"
              : "" || set === "nsw"
              ? "src/assets/imagenes/BANNER-TRANSFORMOSIS-KIRBY.png"
              : ""
          }
          alt="banner"
        />
      </article>
    </>
  );
}
