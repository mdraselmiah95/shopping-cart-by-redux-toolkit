import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import img1 from "../images/product-1.png";
import remove from "../images/remove.png";

const ShoppingCart = () => {
  const PlusSquare = <FontAwesomeIcon icon={faPlus} />;
  const PlusMinus = <FontAwesomeIcon icon={faMinus} />;
  return (
    <div className="container m-auto">
      <h2 className="text-3xl text-lime-600 text-center font-bold my-8">
        This is a Shopping Cart using Tailwind
      </h2>
      <div className="bg-BG-Gray p-12">
        <div className="container bg-white m-auto rounded-md">
          <div className="flex flex-row">
            <div className="flex item-center justify-start items-center w-2/3">
              <img src={img1} alt="productOne" className="h-36" />
              <h5 className="text-xl font-bold px-7">iPhone 11 128GB Black</h5>
            </div>
            <div className="flex item-center justify-start items-center w-1/3">
              <button className="">{PlusSquare}</button>
              <input
                type="number"
                min="0"
                className="text-center border-none text-xl w-16 font-bold py-2 rounded-lg mx-6"
                value="1"
              ></input>
              <button className="">{PlusMinus}</button>
              <h5 className="text-lg font-bold px-10">$1219</h5>
              <img src={remove} alt="remove" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
