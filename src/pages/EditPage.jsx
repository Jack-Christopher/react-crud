import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { API_URL } from "../constants";
import Alert from "../components/Alert";

const EditPage = () => {
  const [product, setProduct] = useState({
    id: 0,
    name: "",
    price: 0,
    date: "",
  });
  const [alert, setAlert] = useState({
    type: "",
    message: "",
  });

  useEffect(() => {
    const productId = window.location.pathname.split("/").pop();
    fetch(API_URL + "/products/" + productId)
      .then((response) => response.json())
      .then((data) => {
        setProduct({
          id: data.id,
          name: data.name,
          price: data.price,
          date: data.date,
        });
      });
  }, []);

  const updateProduct = (e) => {
    e.preventDefault();
    fetch(API_URL + "/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    }).then((response) => {
      if (response.status === 201) {
        setAlert({
          type: "success",
          message: "Product updated successfully",
        });
      } else {
        setAlert({
          type: "error",
          message: "An error occurred while creating the product",
        });
      }

      setTimeout(() => {
        setAlert({
          type: "",
          message: "",
        });
      }, 5000);
    });
  };

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
          Update an existent product
        </h1>

        <div className="w-1/2 container center flex flex-col px-6 mx-auto">
          <form className="space-y-6 mx-auto">
            <div className="mt-4">
              <label
                htmlFor="product-name"
                className="block text-sm font-medium text-gray-700"
              >
                Product name
              </label>
              <input
                type="text"
                id="product-name"
                name="product-name"
                className="mt-1 p-2 w-full border rounded-md"
                value={product.name}
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Price
              </label>
              <input
                type="number"
                min={0}
                id="price"
                name="price"
                className="mt-1 p-2 w-full border rounded-md"
                value={product.price}
                onChange={(e) =>
                  setProduct({ ...product, price: e.target.value })
                }
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Date of purchase
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="mt-1 p-2 w-full border rounded-md"
                value={product.date}
                onChange={(e) =>
                  setProduct({ ...product, date: e.target.value })
                }
              />
            </div>

            <div className="mt-6">
              <button
                className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={updateProduct}
              >
                Update product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
