import React from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const product = useLoaderData(); // Assumes product data is loaded by route loader

  return (
    <div className="p-4 my-10 max-w-4xl mx-auto">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[400px] object-cover"
        />
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-semibold text-orange-500">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-gray-500">Category: {product.category}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-gray-500">Brand: {product.brand}</span>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-gray-500">Ratings: {product.ratings} ⭐</span>
          </div>
          <div className="text-center">
            <a
              href="#"
              className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-300"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
