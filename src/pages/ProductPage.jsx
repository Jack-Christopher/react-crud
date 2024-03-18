import { useEffect, useState } from "react";
import { API_URL } from "../constants";
import Navbar from "../components/Navbar";

const ProductPage = () => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const productId = window.location.pathname.split("/").pop();
    fetch(API_URL + "/products/" + productId)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  return (
    <div>
      <Navbar />

      <div className="mt-24">
        <h1 className="text-3xl font-bold text-center mb-8">
          Product: {product.name}
        </h1>

        {/* vertical table */}
        <div className="mx-auto max-w-2xl">
          <table className="w-full">
            <tbody>
              <tr>
                <td className="border px-4 py-2">ID</td>
                <td className="border px-4 py-2">{product.id}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Name</td>
                <td className="border px-4 py-2">{product.name}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Price</td>
                <td className="border px-4 py-2">$ {product.price}</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Age</td>
                <td className="border px-4 py-2">{product.age} years</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Description</td>
                <td className="border px-4 py-2">
                  {product.name} is a product that costs ${product.price} and is{" "}
                  {product.age} years old.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
