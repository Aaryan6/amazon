import React from "react";
import { Link } from "react-router-dom";
import "./productCards.css";

const ProductCards = ({product}) => {
  return (
    <Link to="/product-list" style={{textDecoration: "none", color: "inherit"}}>
          <div className="product-card">
            <span className="card-header">
              Up to 40% off | Mobiles & accessories
            </span>
            <div className="product-card-image">
              <img src={product?.img} alt="" />
            </div>
            <span className="card-footer">See all Offers</span>
          </div>
          </Link>
  );
};

export default ProductCards;
