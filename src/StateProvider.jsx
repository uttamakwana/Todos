import { createContext } from "react";
export const StateContext = createContext();

// created this component for passing states from parent to children
const StateProvider = ({ children }) => {
  return (
    <StateContext.Provider
      value={{
        
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
