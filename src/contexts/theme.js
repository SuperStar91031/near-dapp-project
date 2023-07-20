import { createContext } from "react";

const initialState = {
  mode: "dark",
};

const ThemeContext = createContext(initialState);

export { ThemeContext, initialState };
