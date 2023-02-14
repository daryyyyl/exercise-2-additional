import React from "react";
import ProductForm from "../components/ProductForm";

const AddProductPage = ({ onAddProduct }) => {
  return (
    <div>
      <ProductForm onSubmit={onAddProduct} />
    </div>
  );
};

export default AddProductPage;
