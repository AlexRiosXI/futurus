import React, { createContext, useEffect, useState } from "react";
import { supabase } from "../lib/helper/supabaseClient";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  
  const [darkMode, setDarkMode] = useState("");
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");


  return (
    <AppContext.Provider
      value={{
        darkMode,
        setDarkMode,
        userId,
        setUserId,
        userName,
        setUserName
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
