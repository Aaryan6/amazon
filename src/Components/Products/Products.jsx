import React from "react";
import ProductCards from "../ProductCards/ProductCards";
import "./products.css";
import { CardImages, CategoryCardImages } from "../../data";
import ProductAd from "../ProductAd/ProductAd";
import ProductSlider from "../ProductSlider/ProductSlider";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="products-container">
      <div className="home-tagline">
        <p>
          You are on amazon.com. You can also shop on Amazon India for millions
          of products with fast local delivery.
          <Link to="/" style={{textDecoration: "none", color:"#176ae7"}} >
Click here to go to amazon.in</Link>
        </p>
      </div>
      {/* product cards */}
      <div className="products">
        <div className="product-cards">
          {CardImages.map((item) => (
            <ProductCards product={item} key={item.id}/>
          ))}
        </div>
        <div className="product-ads">
          <ProductAd />
        </div>
      </div>
      <div className="products-sliders">
        <ProductSlider />
        <ProductSlider />
      </div>
      <div className="product-cards">
        {CategoryCardImages.map((item) => (
          <ProductCards product={item} />
        ))}
      </div>
      <div className="products-sliders">
        <ProductSlider />
      </div>
    </div>
  );
};

export default Products;
