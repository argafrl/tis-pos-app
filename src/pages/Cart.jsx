import { useEffect, useState } from "react";
import data from "../utils/database.json"

const Cart = () => {
  const [savedUser, setSavedUser] = useState('');
  const [indexUser, setIndexUser] = useState(0);
  const [items, setItems] = useState('')

  const getAllCart = () => {
    try {
      const item = JSON.parse(localStorage.getItem("tokens"))
      setItems(item);
      data.Transaction.filter(function(e) {
        return e.buyer.toLowerCase().indexOf(item) !== -1
      })
      const index = data.Buyers.findIndex( item => items.toLowerCase() === item.name.toLowerCase())
      setIndexUser(index);
      console.log(indexUser)
    } catch {
      console.log("err")
    } finally {
    }
  };

  useEffect(() => {
    getAllCart();
  }, [])
  
  return (
    <div className="">
      <div className="text-black">
        <h1 className="mb-3 text-center md:text-left font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            { indexUser && data.Transaction.filter(function(e) {
                return e.buyer.toLowerCase().indexOf(items) !== -1
              }).map((e) => {
              return (
                <div className="justify-between mb-6 rounded-xl bg-white p-6 border shadow-sm sm:flex sm:justify-start">
                  <img src={"/images/" + data.Items.find((dat) => dat.name == e.item).img} alt="product-image" className="w-full rounded-lg sm:w-40" />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900">{e.item}</h2>
                      <p className="mt-1 text-xs text-gray-700">{data.Items.find((dat) => dat.name == e.item).type}</p>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div className="flex items-center justify-end border-gray-100">
                        <p className="h-8 w-8 border bg-white text-center text-xs outline-none flex justify-center items-center" type="number">{e.qty}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        {/* <p className="text-sm">{data.Items.find((dat) => dat.name == e.item).prices[indexUser] ? e.prices[indexUser].price : e.prices[0].price}</p> */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-6 h-full rounded-xl border bg-white p-6 shadow-sm md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">Rp 129.99</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">Rp 4.99</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">Rp 134.98 USD</p>
                <p className="text-sm text-gray-700">including PPN</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-primary py-1.5 font-medium text-blue-50 hover:bg-primary-focus transition duration-500">Check out</button>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Cart;