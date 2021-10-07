import React from "react";
import "./CategoryCards.css";

const CategoryCards = ({product}) => {
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

export default CategoryCards;
