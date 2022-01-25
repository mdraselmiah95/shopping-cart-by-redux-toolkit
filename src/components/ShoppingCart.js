import React from "react";
import img1 from "../images/product-1.png";

const ShoppingCart = () => {
  return (
    <div className="container">
      <h2 className="text-3xl text-lime-600 text-center font-bold my-8">
        This is a Shopping Cart using Tailwind
      </h2>
      <div className="container bg-BG-Gray m-10">
        <div className="flex flex-row">
          <div className="flex item-center justify-start items-center">
            <img src={img1} alt="productOne" style={{ width: "115px" }} />
            <h5 className="text-xl font-bold px-7">iPhone 11 128GB Black</h5>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
