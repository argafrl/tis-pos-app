import ShoppingBag from "../assets/images/shopping-bag.svg"
import { useNavigate } from "react-router-dom";
import data from "../utils/database.json"
import { useState } from "react";
import { useAuth } from "../utils/auth";

const Login = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState('')
  const {setAuthTokens} = useAuth();
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault()
    if(data.Buyers.findIndex( item => user.toLowerCase() === item.name.toLowerCase()) !== -1){
      setAuthTokens(user);
      setLoggedIn(true);
    } else {
      console.log("User tidak ditemukan");
    }
  }

  if(isLoggedIn){
    return navigate("/content/home");
  }

  return (
    <div>
      <form onSubmit={handleLogin} className="bg-no-repeat bg-cover bg-center relative bg-white">
        <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
            <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
              <div className="self-start hidden lg:flex flex-col items-start text-black">
                <img src={ShoppingBag} className="mb-6 h-80" />
                <h1 className="mb-1 text-4xl font-interBold">The Island Shop</h1>
                <p className="pr-3">Tropical-inspired retail store offering unique clothing, accessories, home decor, and souvenirs.</p>
              </div>
            </div>
            <div className="flex justify-center self-center z-10 rounded-lg border bg-white shadow-md">
              <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
                  <div className="mb-4">
                    <h3 className="font-semibold text-2xl font-interSemiBold text-gray-800">Sign In </h3>
                    <p className="text-gray-500">Please sign in to your account.</p>
                  </div>
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 tracking-wide">Email</label>
                      <input className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" type="" placeholder="Enter your email" onChange={(e) => setUser(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                        Password
                      </label>
                      <input className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" type="" placeholder="Enter your password" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded" />
                        <label for="remember_me" className="ml-2 block text-sm text-gray-800">
                          Remember me
                        </label>
                      </div>
                      <div className="text-sm">
                        <a href="#" className="text-blue-400 hover:text-blue-500 underline">
                          Forgot your password?
                        </a>
                      </div>
                    </div>
                    <div>
                      <button type="submit" className="w-full flex justify-center bg-primary hover:bg-primary-focus text-gray-100 p-3 rounded-lg tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500">
                        Sign in
                      </button>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </form>
    </div>
  );
}
 
export default Login;