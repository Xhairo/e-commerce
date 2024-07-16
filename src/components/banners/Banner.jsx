import banner01 from "../banners/eldensofte.jpg";
import banner02 from "../banners/bannerprox.png";
import banner03 from "../banners/bannermostrecent.jpg";
import banner04 from "../banners/bannerps.png";
import banner05 from "../banners/bannerxbox.jpg";
import banner06 from "../banners/bannernsw.png";
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
              ? banner01
              : "" || set === "prox"
              ? banner02
              : "" || set === "pc"
              ? banner03
              : "" || set === "ps"
              ? banner04
              : "" || set === "xbox"
              ? banner05
              : "" || set === "nsw"
              ? banner06
              : ""
          }
          alt="banner"
        />
      </article>
    </>
  );
}
