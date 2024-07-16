import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import InicioPage from "./pages/inicio";
import NswPage from "./pages/nsw";
import PsPage from "./pages/ps";
import PcPage from "./pages/pc";
import XboxPage from "./pages/xbox";
import ProductPage from "./pages/product";

export const CarritoContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <CarritoContext.Provider value={cart}>
        <Header />
        <Routes>
          <Route path="/" element={<InicioPage />}></Route>
          <Route path="/pc" element={<PcPage />}></Route>
          <Route path="/ps" element={<PsPage />}></Route>
          <Route path="/xbox" element={<XboxPage />}></Route>
          <Route path="/nsw" element={<NswPage />}></Route>
          <Route
            path="/producto/:id"
            element={<ProductPage cart={cart} setCart={setCart} />}
          ></Route>
        </Routes>
      </CarritoContext.Provider>
    </>
  );
}

export default App;
