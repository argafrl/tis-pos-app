import React, { useEffect, useState } from "react";
import data from "../data/database.json";

const UserContext = React.createContext();

const UserStore = ({children}) => {
  const [userName, setUserName] = useState("");
  const [indexUser, setIndexUser] = useState(0);

  const getUserInfo = async () => {
    try {
      const res = JSON.parse(localStorage.getItem("tokens"));
      setUserName(res);
    } catch {
      console.log("err");
    } finally {
      if (userName) {
        const index = data.Buyers.findIndex(
          (item) => userName.toLowerCase() === item.name.toLowerCase()
        );
        setIndexUser(index);
      }
    }
  };

  return (
    <UserContext.Provider value={{
        userName,
        indexUser,
        getUserInfo,
    }}>
      {children}
    </UserContext.Provider>
  );
}
 
export {UserContext, UserStore};