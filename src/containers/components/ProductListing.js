import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProducts } from "../../redux/action/productActions";
import ProductComponents from "../ProductComponents";

const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err:", err);
      });
    //truyen du lieu response.data den reducer
    dispatch(setProducts(response.data));
    console.log("response.data:", response.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("products:", products);
  return (
    <div className="ui grid container">
      <ProductComponents />
      {/* <h1> produclisting</h1> */}
    </div>
  );
};

export default ProductListing;
