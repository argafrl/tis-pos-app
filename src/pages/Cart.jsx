import { useContext, useEffect, useState } from "react";
import { CartContext } from "../utils/CartContext";
import data from "../utils/database.json";

const Cart = () => {
  const { items, sumItemsPrice, removeItem } = useContext(CartContext);

  return (
    <div className="">
      <div className="text-black">
        <h1 className="py-4 text-center md:text-left font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {/* {indexUser &&
              data.Transaction.filter(function (e) {
                return e.buyer.toLowerCase().indexOf(userName) !== -1;
              }).map((e) => { */}
            {items.map((e, idx) => {
              return (
                <div className="justify-between mb-6 rounded-2xl bg-white p-6 border shadow-sm sm:flex sm:justify-start">
                  <img
                    src={
                      "/images/" +
                      data.Items.find((dat) => dat.name == e.item).img
                    }
                    alt="product-image"
                    className="w-full rounded-lg sm:w-40"
                  />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900">
                        {e.item}
                      </h2>
                      <p className="mt-1 text-xs text-gray-700">
                        {data.Items.find((dat) => dat.name == e.item).type}
                      </p>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div className="flex items-center justify-end border-gray-100">
                        <p
                          className="h-8 w-8 border bg-white text-center text-xs outline-none flex justify-center items-center"
                          type="number"
                        >
                          {e.qty}
                        </p>
                      </div>
                      <div className="flex items-center space-x-4">
                        {/* <p className="text-sm">{data.Items.find((dat) => dat.name == e.item).prices[indexUser] ? e.prices[indexUser].price : e.prices[0].price}</p> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                          onClick={() => removeItem(idx)}
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 h-full rounded-2xl border bg-white p-6 shadow-sm md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">Rp {sumItemsPrice}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">Rp 15000</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">
                  Rp {sumItemsPrice + 15000}
                </p>
                <p className="text-sm text-gray-700">including PPN</p>
              </div>
            </div>
            <label
              htmlFor="my-modal-3"
              className="btn mt-6 w-full rounded-md bg-primary py-1.5 font-medium text-blue-50 hover:bg-primary-focus transition duration-500"
            >
              Check out
            </label>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-3"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold">Congratulations!</h3>
                <p className="py-4">Your Item has been checkout successfully</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
