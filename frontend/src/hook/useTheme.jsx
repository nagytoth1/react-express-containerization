import { useContext } from "react";
import { ThemeContext } from "../provider/ThemeContextProvider";

export function useTheme() {
  const theme = useContext(ThemeContext);
  if (!theme)
    throw new Error("useTheme must be used within ThemeContextProvider");
  return theme;
}
