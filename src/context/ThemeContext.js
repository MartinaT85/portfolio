import * as React from "react";
import { createContex, useState } from "react";

import getInitialColor from "../helpers/initialColourMode";

const ThemeContext = createContex();

export const ThemeProvider = ({ children }) => {
  const [colorMode, setColorMode] = useState(getInitialColor);

  const updateColorMode = (value) => {
    setColorMode(value);

    window.localStorage.setItem("color-mode", value);
  };

  return (
    <ThemeContext.Provider value={{ colorMode, updateColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
