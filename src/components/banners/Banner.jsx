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
              ? "src/assets/imagenes/bannermostrecent.jpg"
              : "" || set === "prox"
              ? "src/assets/imagenes/bannerprox.png"
              : "" || set === "pc"
              ? "src/assets/imagenes/bannerpc.jpg"
              : "" || set === "ps"
              ? "src/assets/imagenes/bannerps.png"
              : "" || set === "xbox"
              ? "src/assets/imagenes/bannerxbox.jpg"
              : "" || set === "nsw"
              ? "src/assets/imagenes/bannernsw.png"
              : ""
          }
          alt="banner"
        />
      </article>
    </>
  );
}
