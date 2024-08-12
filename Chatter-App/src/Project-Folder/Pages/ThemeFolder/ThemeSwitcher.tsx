import { Palette } from "@mui/icons-material";
import { Button, Menu, MenuItem } from "@mui/material";
import { useContext,  useRef, useState } from "react";
import { ThemeContext } from "@emotion/react";
import { IThemeContext, IThemeMode } from "./themeTypes";

const ThemeSwitcher: React.FunctionComponent = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [openmenu, setOpenMenu] = useState<boolean>(false);
  const { themeMode, HandleTheme } = useContext(ThemeContext) as IThemeContext;

  const handleOpen = () => {
    setOpenMenu(true);
  };
  const handleClose = () => {
    setOpenMenu(false);
  };
  const handleSwitch = (mode: IThemeMode) => {
    HandleTheme(mode);
    handleClose();
  };
  console.log(HandleTheme)

  return (
    <>
      <Button
        variant="contained"
        onClick={handleOpen}
        startIcon={<Palette />}
        ref={buttonRef}
      >
        Switch Themes
      </Button>
      <Menu open={openmenu} anchorEl={buttonRef.current} onClose={handleClose}>
        <MenuItem
          onClick={() => handleSwitch(IThemeMode.LIGHT)}
          selected={themeMode === IThemeMode.LIGHT}
        >
          Light
        </MenuItem>
        <MenuItem
          onClick={() => handleSwitch(IThemeMode.DARK)}
          selected={themeMode === IThemeMode.DARK}
        >
          Dark
        </MenuItem>
        <MenuItem
          onClick={() => handleSwitch(IThemeMode.SYSTEM)}
          selected={themeMode === IThemeMode.SYSTEM}
        >
          System
        </MenuItem>
      </Menu>
    </>
  );
};

export default ThemeSwitcher;
