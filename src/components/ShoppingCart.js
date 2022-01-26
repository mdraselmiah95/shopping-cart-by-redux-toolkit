import React from "react";
import mack from "../images/mack.png";
import img1 from "../images/product-1.png";
import img2 from "../images/product-2.png";
import Cart from "./Cart";

const products = [
  {
    id: 1,
    title: "iPhone 11 128GB Black",
    img: img1,
    price: 1219,
  },
  {
    id: 2,
    title: "iPhone 11 Silicone Case - Black",
    img: img2,
    price: 52,
  },
  {
    id: 3,
    title: "Apple MacBook Pro 14-Inch M1",
    img: mack,
    price: 2650,
  },
];

const ShoppingCart = () => {
  return (
    <div className="container m-auto">
      <h2 className="text-3xl text-lime-600 text-center font-bold my-8">
        Shopping Cart using Redux
      </h2>
      <div className="bg-BG-Gray p-12 my-9">
        {products.map((item) => (
          <Cart item={item} key={item.id} />
        ))}
        <div className="container m-auto rounded-md my-2 flex justify-end">
          <div className="px-4 py-3 text-xl font-medium bg-white w-72">
            <h5>
              Subtotal: <span className="ml-2">$ 1235</span>
            </h5>
            <h5>
              Tax:<span className="ml-2">$ 1335</span>
            </h5>
            <h5>
              Total:<span className="ml-2">$ 1235</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
