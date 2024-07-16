import Banner from "../components/banners/Banner";
import Database from "../assets/products/allproducts";
import Card from "../components/cards/Card";
import "./Pages.css";

export default function Xbox() {
  const dataFilter = Database.filter(
    (producto) => producto.categoria === "Xbox"
  );
  return (
    <div className="page-container">
      <section className="container">
        <Banner titulo="Mas Popular en Xbox" set="xbox" />
        <div className="grid-container">
          {dataFilter.map((producto) => (
            <Card key={producto.id} producto={producto} />
          ))}
        </div>
      </section>
    </div>
  );
}
