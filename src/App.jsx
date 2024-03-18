import { Routes, Route } from "react-router-dom";

import Home from "./pages/HomePage";
import Create from "./pages/CreatePage";
import Products from "./pages/ProductsPage";
import Edit from "./pages/EditPage";
import Product from "./pages/ProductPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<Product />} />
    </Routes>
  );
};

export default App;
