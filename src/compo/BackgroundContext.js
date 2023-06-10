import React, { createContext, useContext, useState } from "react";


export const BackgContext = createContext(["#f0bd5e", () => {}]);

export function BackgProvider({ children }) {
  const [backgDefault, _] = useContext(BackgContext);
  const [backg, setBackg] = useState(backgDefault);

  return (
    <BackgContext.Provider value={[backg, setBackg]}>
      {children}
    </BackgContext.Provider>
  );
}