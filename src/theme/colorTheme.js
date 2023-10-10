import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const colorTheme = createTheme({
  palette: {
    primary: {
      main: "#15171a",
    },

    secondary: {
      main: "#543884",
    },

    error: {
      main: red.A400,
    },
  },
});
