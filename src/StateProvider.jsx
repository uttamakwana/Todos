import { createContext, useState } from "react";
export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <StateContext.Provider
      value={{
        count,
        setCount,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
