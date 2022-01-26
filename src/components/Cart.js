import React from "react";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { add, cartSelector, remove } from "../redux/slices/cartSlice";
import rm from "../images/remove.png";

const Cart = ({ item }) => {
  const PlusSquare = <FontAwesomeIcon icon={faPlus} />;
  const PlusMinus = <FontAwesomeIcon icon={faMinus} />;

  const dispatch = useDispatch();
  const { cart } = useSelector(cartSelector);
  const inCart = cart.find((pd) => pd.id === item.id);

  return (
    <div className="container bg-white m-auto rounded-md mb-2">
      <div className="md:flex md:flex-row px-4 py-3">
        <div className="flex item-center justify-start items-center xl:w-2/3 md:w-1/2 ">
          <img src={item.img} alt="productOne" className="h-36" />
          <h5 className="text-xl font-bold px-7">{item.title}</h5>
        </div>
        <div className="flex item-center justify-start items-center xl:w-1/3 md:w-1/2">
          {!inCart ? (
            <button
              onClick={() => dispatch(add(item))}
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Product
            </button>
          ) : (
            <>
              {" "}
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
              <h5 className="text-lg font-bold md:px-10 px-4">
                $ {item.price}
              </h5>
              <img
                src={rm}
                alt="remove"
                className="cursor-pointer"
                onClick={() => dispatch(remove(item.id))}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
