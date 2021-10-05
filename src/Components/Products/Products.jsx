import React from "react";
import ProductCards from "../ProductCards/ProductCards";
import "./products.css";
import { CardImages } from "../../data";
import ProductAd from "../ProductAd/ProductAd";
import ProductSlider from "../ProductSlider/ProductSlider";

const Products = () => {
  return (
    <div className="products-container">
      <div className="home-tagline">
        <p>
          You are on amazon.com. You can also shop on Amazon India for millions
          of products with fast local delivery.
          <a href="">Click here to go to amazon.in</a>
        </p>
      </div>
      {/* product cards */}
      <div className="products">
        <div className="product-cards">
          {CardImages.map((item) => (
            <ProductCards product={item} />
          ))}
        </div>
        <div className="product-ads">
          <ProductAd />
        </div>
      </div>
      <div className="products-sliders">
        <ProductSlider/>
      </div>
    </div>
  );
};

export default Products;
