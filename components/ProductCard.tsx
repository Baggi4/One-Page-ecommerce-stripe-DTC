import { FunctionComponent, useContext } from "react";
import Stripe from "stripe";
import CartContext from "./context/CartContext";
import {
  getPriceTotal,
  getProductDescription,
  getProductImage,
  getProductName,
} from "../utils/computed";

type CardProps = {
  price: Stripe.Price;
};

const ProductCard: FunctionComponent<CardProps> = ({ price }) => {
  const { add } = useContext(CartContext);

  const addToCart = (p: Stripe.Price) => {
    if (add) {
      add(p);
    }
  };

  return (
    <div>
      <div className="relative">
        <div className="relative w-full h-72 rounded-lg overflow-hidden">
          <img
            src={getProductImage(price.product)}
            alt={getProductDescription(price.product)}
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className="relative mt-4">
          <h3 className="text-sm font-medium text-gray-900">
            {getProductName(price.product)}
          </h3>
        </div>
        <div className="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
          />
          <p className="relative text-lg font-semibold text-white">
            ${getPriceTotal(price)}
          </p>
        </div>
      </div>
      <div className="mt-6">
        <button
          onClick={() => addToCart(price)}
          className="relative w-full flex bg-gray-200 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-400 shadow-inner"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <span className="sr-only">, {getProductName(price.product)}</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
