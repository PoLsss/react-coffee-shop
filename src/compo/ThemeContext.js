import React, { createContext, useContext, useState } from "react";

//#4e2801
export const ThemeContext = createContext(["#4e2801", () => {}]);

export function ThemeProvider({ children }) {
  const [themeDefault, _] = useContext(ThemeContext);
  const [theme, setTheme] = useState(themeDefault);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {
        console.log("themct" + theme)
      }
      {children}
    </ThemeContext.Provider>
  );
}