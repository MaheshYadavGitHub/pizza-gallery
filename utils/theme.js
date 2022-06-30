import { createTheme } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: ["Arial", "Roboto Condensed"].join(","),
    fontWeight: 700,
    h6: {
      fontWeight: 700,
    },
    body2: {
      color: "#616161",
    },
    navLinks: {
      color: "#fff",
    },
  },
});

export default theme;
