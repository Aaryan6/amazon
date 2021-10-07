import React from "react";
import { Link } from "react-router-dom";
import "./productView.css";

const ProductView = () => {
  return (
    <div className="product-view-container">
      <div className="product-image">
        <img src="/assets/phone.jpg" alt="" />
      </div>
      <div className="product-info">
        <div className="information">
          <span className="title">
            Redmi 9 (Sporty Orange, 4GB RAM, 64GB Storage) | 2.3GHz Mediatek
            Helio G35 Octa core Processor
          </span>
          <div className="price">
            <b>Price: </b>
            <span>&#8377;9,999</span>
          </div>
          <div className="colors">
            <h4>Colors:</h4>
            <div className="color" style={{ background: "red" }}></div>
            <div className="color" style={{ background: "blue" }}></div>
            <div className="color" style={{ background: "black" }}></div>
          </div>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <button className="add-to-cart">Add to Cart</button>
          </Link>
          <div className="desc">
            <span>About this item</span>
            <ul>
              <li>
                13+2MP Rear camera with AI Portrait, AI scene recognition, HDR,
                Pro mode | 5MP front facing cameraBox also includes: Power
                adapter, USB cable, SIM eject tool, Warranty card, User guide
              </li>
              <li>
                16.58 centimeters (6.53-inch) HD+ multi-touch capacitive
                touchscreen with 1600 x 720 pixels resolution, 268 ppi pixel
                density, 20:9 aspect ratio
              </li>
              <li>
                Memory, Storage & SIM: 4GB RAM | 64GB storage expandable up to
                512GB| Dual SIM with dual standby (4G+4G)
              </li>
              <li>
                Android v10 operating system with 2.3GHz Mediatek Helio G35 octa
                core processor
              </li>
              <li>
                5000mAH lithium-polymer battery with 10W wired charger in-box
              </li>
              <li>
                1 year manufacturer warranty for device and 6 months
                manufacturer warranty for in-box accessories including batteries
                from the date of purchase
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
