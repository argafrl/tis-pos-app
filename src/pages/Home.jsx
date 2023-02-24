import { DoubleCheck } from "akar-icons";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../utils/CartContext";
import data from "../data/database.json";
import { UserContext } from "../utils/UserContext";

const Home = () => {

  const { items, setItems, addItem } = useContext(CartContext);
  const { userName, indexUser, getUserInfo,} = useContext(UserContext);

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <div className="min-h-screen">
      <div id="content">
        <div id="24h">
          <h1 className="text-black font-interSemiBold py-4">
            Total Statistics
          </h1>
          <div className="stats stats-vertical lg:stats-horizontal shadow w-full md:w-fit">
            <div className="stat">
              <div className="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Total Transactions</div>
              <div className="stat-value text-xl md:text-3xl text-primary">
                {data.Summary.totalTransaction}
              </div>
              <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Best Selling Item</div>
              <div className="stat-value text-xl md:text-3xl text-secondary">
                {data.Summary.bestSellingItem}
              </div>
              <div className="stat-desc">30% more than other items</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <DoubleCheck strokeWidth={2} size={36} className="text-black" />
              </div>
              <div className="stat-title">Best Selling Category</div>
              <div className="stat-value text-xl md:text-3xl text-black">
                {data.Summary.bestSellingCategory}
              </div>
              <div className="stat-desc">User wants this item!</div>
            </div>
          </div>
        </div>
        <div id="last-incomes">
          <h1 className="text-black font-interSemiBold py-4">Revenue</h1>
          <div className="stats stats-vertical lg:stats-horizontal shadow w-full md:w-fit">
            <div className="stat">
              <div className="stat-title">Total Revenue</div>
              <div className="stat-value text-xl md:text-3xl">
                <span className="text-lg">Rp </span>
                {data.Summary.revenue}
              </div>
              <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>
            {data.Summary.rpc.map((e, idx) => {
              return (
                <div className="stat" key={idx}>
                  <div className="stat-title">{e.category}</div>
                  <div className="stat-value text-xl md:text-3xl">
                    <span className="text-lg">Rp </span>
                    {e.revenue}
                  </div>
                  <div className="stat-desc">↗︎ {e.revenue / 2} (50%)</div>
                </div>
              );
            })}
          </div>
        </div>

        <div id="most-spender">
          <h1 className="text-black font-interSemiBold py-4">
            Most Spender Customers
          </h1>
          <div className="stats stats-vertical lg:stats-horizontal shadow w-full md:w-fit">
            {data.Summary.bestSpenders.map((e, idx) => {
              return (
                <div className="stat" key={idx}>
                  <div className="stat-title">
                    {e.name} ({e.type})
                  </div>
                  <div className="stat-value text-xl md:text-3xl">
                    <span className="text-lg">Rp </span>
                    {e.spent}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div id="last-users">
          <h1 className="text-black font-interSemiBold py-4">Last 24h users</h1>
          {/* <Home /> */}
          <section>
            <div className="grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              { userName &&
                data.Items.map((e, idx) => {
                  return (
                    <article
                      key={idx}
                      className="rounded-2xl bg-white p-3 border shadow-sm hover:shadow-xl hover:transform hover:scale-105 duration-300 "
                    >
                      <a>
                        <div className="relative flex items-end overflow-hidden rounded-xl">
                          <div className="w-full h-52 flex items-center">
                            <img src={`/images/${e.img}`} alt="Hotel Photo" />
                          </div>
                        </div>

                        <div className="mt-1 p-2">
                          <h2 className="text-slate-700">{e.name}</h2>
                          <p className="mt-1 text-sm text-slate-400">
                            {e.type}
                          </p>

                          <div className="mt-3 flex items-end justify-between">
                            <p className="text-lg font-bold text-blue-500">
                              {e.prices[indexUser]
                                ? e.prices[indexUser].price
                                : e.prices[0].price}
                            </p>

                            <button
                              onClick={() =>
                                addItem({
                                  item: e.name,
                                  qty: 1,
                                  buyer: indexUser,
                                  price: e.prices[indexUser]
                                    ? e.prices[indexUser].price
                                    : e.prices[0].price,
                                })
                              }
                              className="flex items-center space-x-1.5 rounded-lg bg-primary px-4 py-1.5 text-white duration-100 hover:bg-primary-focus"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-4 w-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                />
                              </svg>
                              <div className="text-sm">Add to cart</div>
                            </button>
                          </div>
                        </div>
                      </a>
                    </article>
                  );
                })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
