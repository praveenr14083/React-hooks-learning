import React, { useState } from "react";
import CartCard from "../../components/Cart/CartCard";

const cartData = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

export default function Cart() {
  const [products, setProducts] = useState(cartData);
  const handleDelete = (id) => {
    const updatedValue = products.filter((x) => x.id !== id);
    setProducts(updatedValue);
  };

  const handleDeleteAll = () => {
    setProducts([]);
  };
  return (
    <div className="bg-gray-300 w-1/2 mx-auto p-15 flex flex-col items-center gap-y-8 rounded-4xl">
      <h1>Cart Items: {products.length}</h1>
      {products.map((product) => (
        <CartCard key={product.id} data={product} onDelete={handleDelete} />
      ))}

      <button
        className="w-full bg-black text-white py-5 rounded-2xl"
        onClick={() => handleDeleteAll()}
      >
        Delete All
      </button>
    </div>
  );
}
