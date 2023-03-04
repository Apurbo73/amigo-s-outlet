// Context API er page

import { useState, useContext, createContext } from "react";
const SearchContext = createContext();
//Declaring Gobal State:
const SearchProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    keywords: "",
    results: [],
  });

  return (
    <SearchContext.Provider value={[auth, setAuth]}>
      {children}
    </SearchContext.Provider>
  );
};

//making custom hooks
const useSearch = () => useContext(SearchContext);
export { useSearch, SearchProvider };
