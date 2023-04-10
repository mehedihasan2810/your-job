import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const AppContext = createContext();

const initialState = {
    category: [],
    featuredJobs: [],
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);


//   const fetchData = async () => {
//     const response = await fetch('data.json');
//   }

//     useEffect(() => {

//     }, [])
  return (
  <AppContext.Provider value="hello">
    {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useGlobalContext = () => {
  return useContext(AppContext);
};
