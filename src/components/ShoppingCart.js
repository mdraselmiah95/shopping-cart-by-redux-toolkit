import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch } from "react-redux";
import mack from "../images/mack.png";
import img1 from "../images/product-1.png";
import img2 from "../images/product-2.png";
import remove from "../images/remove.png";

import { add } from "../redux/slices/cartSlice";

const products = [
  {
    title: "iPhone 11 128GB Black",
    img: img1,
    price: 1219,
  },
  {
    title: "iPhone 11 Silicone Case - Black",
    img: img2,
    price: 52,
  },
  {
    title: "Apple MacBook Pro 14-Inch M1",
    img: mack,
    price: 2650,
  },
];

const ShoppingCart = () => {
  const PlusSquare = <FontAwesomeIcon icon={faPlus} />;
  const PlusMinus = <FontAwesomeIcon icon={faMinus} />;

  const dispatch = useDispatch();

  return (
    <div className="container m-auto">
      <h2 className="text-3xl text-lime-600 text-center font-bold my-8">
        Shopping Cart using Redux
      </h2>
      <div className="bg-BG-Gray p-12 my-9">
        {products.map((item, i) => (
          <div kye={i} className="container bg-white m-auto rounded-md mb-2">
            <div className="md:flex md:flex-row px-4 py-3">
              <div className="flex item-center justify-start items-center xl:w-2/3 md:w-1/2 ">
                <img src={item.img} alt="productOne" className="h-36" />
                <h5 className="text-xl font-bold px-7">{item.title}</h5>
              </div>
              <div className="flex item-center justify-start items-center xl:w-1/3 md:w-1/2">
                <button
                  onClick={() => dispatch(add(item))}
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Add Product
                </button>
                {/* <button className="hover:bg-zinc-300 rounded-md hover:text-emerald-700 p-2">
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
                <h5 className="text-lg font-bold md:px-10 px-4">
                  $ {item.price}
                </h5>
                <img src={remove} alt="remove" className="cursor-pointer" /> */}
              </div>
            </div>
          </div>
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
