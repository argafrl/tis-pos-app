import { Cart, HomeAlt1, PeopleGroup, SignOut } from "akar-icons";
import { Link, NavLink, useLocation } from "react-router-dom";

const Sidebar = ({ location, setLocation }) => {
  const locationPath = useLocation()

  return (
    <div
      id="menu"
      className="bg-white shadow-sm border col-span-3 md:col-span-2 rounded-xl p-4"
    >
      <div id="menu" className="flex flex-col space-y-5 my-5">
        <NavLink to="home" onClick={() => setLocation("home")}>
          <div
            className={`${
              locationPath.pathname == "/content/home"
                ? `bg-primary hover:bg-primary-focus shadow-md`
                : ""
            } transition rounded-lg duration-150 ease-linear py-3 px-2 group`}
          >
            <div className="flex flex-col space-y-2 text-center items-center">
              <div>
                <HomeAlt1
                  strokeWidth={2}
                  size={36}
                  className={`${
                    locationPath.pathname == "/content/home" ? `text-white` : "text-primary"
                  }`}
                />
              </div>
              <div
                className={`${
                  locationPath.pathname == "/content/home" ? `text-white` : "text-black"
                }`}
              >
                <p
                  className={`${
                    locationPath.pathname == "/content/home" ? `text-white` : "text-primary"
                  } font-bold text-base lg:text-lg leading-4`}
                >
                  Home
                </p>
                <p
                  className={`${
                    locationPath.pathname == "/content/home" ? `text-white` : "text-black"
                  } text-sm hidden md:block`}
                >
                  Stats overview
                </p>
              </div>
            </div>
          </div>
        </NavLink>
        <NavLink to="cart" onClick={() => setLocation("cart")}>
          <div
            className={`${
              locationPath.pathname == "/content/cart"
                ? `bg-primary hover:bg-primary-focus shadow-md`
                : ""
            } transition rounded-lg duration-150 ease-linear py-3 px-2 group`}
          >
            <div className="relative flex flex-col space-y-2 text-center md:space-y-0 items-center">
              <div>
                <Cart
                  strokeWidth={2}
                  size={36}
                  className={`${
                    locationPath.pathname == "/content/cart" ? `text-white` : "text-primary"
                  }`}
                />
              </div>
              <div
                className={`${
                  locationPath.pathname == "/content/cart" ? `text-white` : "text-black"
                }`}
              >
                <p
                  className={`${
                    locationPath.pathname == "/content/cart" ? `text-white` : "text-primary"
                  } font-bold text-base lg:text-lg leading-4`}
                >
                  Cart
                </p>
                <p
                  className={`${
                    locationPath.pathname == "/content/cart" ? `text-white` : "text-black"
                  } text-sm hidden md:block`}
                >
                  Checkout items
                </p>
              </div>
              {/* <div className="absolute -top-3 -right-3 md:top-0 md:right-0 px-2 py-1.5 rounded-full bg-indigo-800 text-xs font-mono font-bold">23</div> */}
            </div>
          </div>
        </NavLink>
        <NavLink to="users" onClick={() => setLocation("users")}>
          <div
            className={`${
              locationPath.pathname == "/content/users"
                ? `bg-primary hover:bg-primary-focus shadow-md`
                : ""
            } transition rounded-lg duration-150 ease-linear py-3 px-2 group`}
          >
            <div className="flex flex-col space-y-2 text-center md:space-y-0 items-center">
              <div>
                <PeopleGroup
                  strokeWidth={2}
                  size={36}
                  className={`${
                    locationPath.pathname == "/content/users" ? `text-white` : "text-primary"
                  }`}
                />
              </div>
              <div
                className={`${
                  locationPath.pathname == "/content/users" ? `text-white` : "text-black"
                }`}
              >
                <p
                  className={`${
                    locationPath.pathname == "/content/users" ? `text-white` : "text-primary"
                  } font-bold text-base lg:text-lg leading-4`}
                >
                  Users
                </p>
                <p
                  className={`${
                    locationPath.pathname == "/content/users" ? `text-white` : "text-black"
                  } text-sm hidden md:block`}
                >
                  Manage users
                </p>
              </div>
            </div>
          </div>
        </NavLink>
        <Link to="/" onClick={() => setLocation("logout")}>
          <div
            className={`${
              locationPath.pathname == "/content/logout"
                ? `bg-primary hover:bg-primary-focus shadow-md`
                : ""
            } transition rounded-lg duration-150 ease-linear py-3 px-2 group`}
          >
            <div className="flex flex-col space-y-2 text-center md:space-y-0 items-center">
              <div>
                <SignOut
                  strokeWidth={2}
                  size={36}
                  className={`${
                    locationPath.pathname == "/content/logout" ? `text-white` : "text-primary"
                  }`}
                />
              </div>
              <div
                className={`${
                  locationPath.pathname == "/content/logout" ? `text-white` : "text-black"
                }`}
              >
                <p
                  className={`${
                    locationPath.pathname == "/content/logout" ? `text-white` : "text-primary"
                  } font-bold text-base lg:text-lg leading-4`}
                >
                  Logout
                </p>
                <p
                  className={`${
                    locationPath.pathname == "/content/logout" ? `text-white` : "text-black"
                  } text-sm hidden md:block`}
                >
                  Exit app
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
