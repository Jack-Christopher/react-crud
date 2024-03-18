import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { API_URL } from "../constants";
import Alert from "../components/Alert";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [alert, setAlert] = useState({
    type: "",
    message: "",
  });

  const fetchProducts = () => {
    fetch(API_URL + "/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  const deleteProduct = (id) => {
    fetch(API_URL + "/products/" + id, {
      method: "DELETE",
    }).then((response) => {
      if (response.status === 200) {
        setAlert({
          type: "success",
          message: "Product deleted successfully",
        });
        fetchProducts();
      } else {
        setAlert({
          type: "error",
          message: "An error occurred while deleting the product",
        });
      }
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100">
      <Navbar />

      <div className="mt-8">
        {alert.type && (
          <div className="mt-4 w-1/3 mx-auto">
            <Alert type={alert.type} message={alert.message} />
          </div>
        )}

        <h1 className="text-center text-black font-bold text-2xl pt-4">
          Products
        </h1>

        <div className="mt-4 px-12">
          <table className="table-auto w-full text-center">
            <thead>
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Age</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="border px-4 py-2">{product.name}</td>
                  <td className="border px-4 py-2">{product.price}</td>
                  <td className="border px-4 py-2">{product.date}</td>
                  <td className="border px-4 py-2">{product.age}</td>
                  <td className="border px-4 py-2 space-x-6">
                    <button
                      className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => {
                        window.location.href = "/product/" + product.id;
                      }}
                    >
                      View
                    </button>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => {
                        window.location.href = "/edit/" + product.id;
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => deleteProduct(product.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
