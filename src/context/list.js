import { createContext, useState } from "react";

export const listContext = createContext();

const ListProvider = ({ children }) => {
  const [list, setList] = useState(null);
  return (
    <listContext.Provider value={{ list, setList }}>
      {children}
    </listContext.Provider>
  );
};

export default ListProvider;
