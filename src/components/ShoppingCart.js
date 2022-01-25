import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import mack from "../images/mack.png";
import img1 from "../images/product-1.png";
import img2 from "../images/product-2.png";
import remove from "../images/remove.png";

const ShoppingCart = () => {
  const PlusSquare = <FontAwesomeIcon icon={faPlus} />;
  const PlusMinus = <FontAwesomeIcon icon={faMinus} />;
  return (
    <div className="container m-auto">
      <h2 className="text-3xl text-lime-600 text-center font-bold my-8">
        This is a Shopping Cart using Tailwind
      </h2>
      <div className="bg-BG-Gray p-12 my-9">
        <div className="container bg-white m-auto rounded-md">
          <div className="md:flex md:flex-row px-4 py-3">
            <div className="flex item-center justify-start items-center xl:w-2/3 md:w-1/2 ">
              <img src={img1} alt="productOne" className="h-36" />
              <h5 className="text-xl font-bold px-7">iPhone 11 128GB Black</h5>
            </div>
            <div className="flex item-center justify-start items-center xl:w-1/3 md:w-1/2">
              <button className="hover:bg-zinc-300 rounded-md hover:text-emerald-700 p-2">
                {PlusSquare}
              </button>
              <input
                type="number"
                min="0"
                className="text-center border-none text-xl w-16 font-bold py-2 rounded-lg md:mx-3 mx-1"
                value="1"
              ></input>
              <button className="hover:bg-zinc-300 rounded-md hover:text-emerald-700 p-2">
                {PlusMinus}
              </button>
              <h5 className="text-lg font-bold md:px-10 px-4">$1219</h5>
              <img src={remove} alt="remove" className="cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="container bg-white m-auto rounded-md my-2">
          <div className="md:flex md:flex-row px-4 py-3">
            <div className="flex item-center justify-start items-center xl:w-2/3 md:w-1/2 ">
              <img src={img2} alt="productTwo" className="h-36" />
              <h5 className="text-xl font-bold px-7">
                iPhone 11 Silicone Case - Black
              </h5>
            </div>
            <div className="flex item-center justify-start items-center xl:w-1/3 md:w-1/2">
              <button className="hover:bg-zinc-300 rounded-md hover:text-emerald-700 p-2">
                {PlusSquare}
              </button>
              <input
                type="number"
                min="0"
                className="text-center border-none text-xl w-16 font-bold py-2 rounded-lg md:mx-3 mx-1"
                value="1"
              ></input>
              <button className="hover:bg-zinc-300 rounded-md hover:text-emerald-700 p-2">
                {PlusMinus}
              </button>
              <h5 className="text-lg font-bold md:px-10 px-4">$52</h5>
              <img src={remove} alt="remove" className="cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="container bg-white m-auto rounded-md my-2">
          <div className="md:flex md:flex-row px-4 py-3">
            <div className="flex item-center justify-start items-center xl:w-2/3 md:w-1/2 ">
              <img src={mack} alt="productThree" className="sm:h-36 h-20" />
              <h5 className="text-xl font-bold px-7">
                Apple MacBook Pro 14-Inch M1
              </h5>
            </div>
            <div className="flex item-center justify-start items-center xl:w-1/3 md:w-1/2">
              <button className="hover:bg-zinc-300 rounded-md hover:text-emerald-700 p-2">
                {PlusSquare}
              </button>
              <input
                type="number"
                min="0"
                className="text-center border-none text-xl w-16 font-bold py-2 rounded-lg md:mx-3 mx-1"
                value="1"
              ></input>
              <button className="hover:bg-zinc-300 rounded-md hover:text-emerald-700 p-2">
                {PlusMinus}
              </button>
              <h5 className="text-lg font-bold md:px-10 px-4">$2650</h5>
              <img src={remove} alt="remove" className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
