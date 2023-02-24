import { Hand } from "akar-icons";
import { useState } from "react";
import { useRoutes } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { CartStore } from "../utils/CartContext";
import { UserStore } from "../utils/UserContext";
import Cart from "./Cart";
import Home from "./Home";
import Users from "./Users";

const Content = () => {
  const [location, setLocation] = useState("home");

  let element = useRoutes([
    { path: "home", element: <Home /> },
    { path: "cart", element: <Cart /> },
    { path: "users", element: <Users /> },
  ]);

  return (
    <div>
      <UserStore>
        <CartStore>
          <Navbar />
          <div className="antialiased w-full min-h-screen relative py-4">
            <div className="alert shadow-sm mt-2 bg-white border font-interBold max-w-7xl mx-auto rounded-xl prose">
              <div className="flex flex-col justify-start items-start">
                <div className="flex gap-2 items-center">
                  <Hand strokeWidth={2} size={20} />
                  <h3 className="m-0 font-interRegular">
                    Welcome to The Island Shop
                  </h3>
                </div>
                <p className="m-0 p-0 font-interRegular">
                  Tropical-inspired retail store offering unique clothing,
                  accessories, home decor, and souvenirs.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-12 max-w-7xl mx-auto gap-2 sm:gap-4 md:gap-6 mt-7 mb-10 px-2 ">
              <Sidebar location={location} setLocation={setLocation} />
              <div className="col-span-9 md:col-span-10 bg-gray-100 rounded-lg p-6">
                {element}
              </div>
            </div>
          </div>
          <Footer />
        </CartStore>
      </UserStore>
    </div>
  );
};

export default Content;
