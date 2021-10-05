import React from "react";
import "./productCards.css";
// import { CardImages } from "../../data";

const ProductCards = ({product}) => {
    console.log(product)
  return (
          <div className="product-card" key={product?.id}>
            <span className="card-header">
              Up to 40% off | Mobiles & accessories
            </span>
            <div className="product-card-image">
              <img src={product?.img} alt="" />
            </div>
            <span className="card-footer">See all Offers</span>
          </div>
  );
};

export default ProductCards;
