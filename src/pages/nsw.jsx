import Banner from "../components/banners/Banner";
import Database from "../assets/products/allproducts";
import Card from "../components/cards/Card";

export default function Nsw() {
  const dataFilter = Database.filter(
    (producto) => producto.categoria === "Nintendo Switch"
  );
  return (
    <div className="page-container">
      <section className="container">
        <Banner titulo="Mas Popular en Nintendo Switch" set="nsw" />
        <div className="grid-container">
          {dataFilter.map((producto) => (
            <Card key={producto.id} producto={producto} />
          ))}
        </div>
      </section>
    </div>
  );
}
