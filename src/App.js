import React from "react";
import "./App.css";
import Header from "./containers/components/Header";
import { Routes, Route } from "react-router-dom";
import ProductListing from "./containers/components/ProductListing";
import ProductDetails from "./containers/components/ProductDetails";
import ProductComponents from "./containers/ProductComponents";
import NotFound from "./containers/components/NotFound";

// https://www.youtube.com/watch?v=0W6i5LYKCSI&list=LL&index=1&t=355s link
const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/ProductComponents" element={<ProductComponents />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
