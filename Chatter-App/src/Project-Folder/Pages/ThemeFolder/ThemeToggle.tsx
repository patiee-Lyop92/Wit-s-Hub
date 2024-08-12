import { useState, createContext, useEffect } from "react";
import { IThemeContext, IThemeMode } from "./themeTypes";
import { Theme } from "@emotion/react";
import { WITDARKMode, WITLightMode } from "./allThemes";
import { ThemeProvider, useMediaQuery } from "@mui/material";

const ThemeContext = createContext<IThemeContext | null>(null);
const ThemeContextProvider: React.FunctionComponent<
  React.PropsWithChildren
> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<IThemeMode>(IThemeMode.LIGHT);
  const [theme, setTheme] = useState<Theme>(WITLightMode);

  const SYSTEM_THEME: Exclude<IThemeMode, IThemeMode.SYSTEM> = useMediaQuery(
    "(preferes-color-scheme: dark)"
  )
    ? IThemeMode.DARK
    : IThemeMode.LIGHT;

  useEffect(() => {
    switch (themeMode) {
      case IThemeMode.LIGHT:
        setTheme(WITLightMode);
        break;
      case IThemeMode.DARK:
        setTheme(WITDARKMode);
        break;
      case IThemeMode.SYSTEM:
        switch (SYSTEM_THEME) {
          case IThemeMode.LIGHT:
            setTheme(WITLightMode);
            break;
          case IThemeMode.DARK:
            setTheme(WITDARKMode);
            break;
        }
        break;
      default:
        setTheme(WITLightMode);
        break;
    }
  }, [themeMode, SYSTEM_THEME]);
  const HandleTheme = (mode: IThemeMode) => {
    setThemeMode(mode);
    
  };
  return (
    <>
      <ThemeContext.Provider value={{ themeMode, HandleTheme }}>
        <ThemeProvider theme={theme}></ThemeProvider>
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export default ThemeContextProvider;
