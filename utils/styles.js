import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "black",
    "& a": {
      color: "#fff",
      marginLeft: "10px",
    },
  },
  brand: { fontWeight: 800 },
  grow: { flexGrow: 1 },
  main: {
    minHeight: "80vh",
  },
  footer: { textAlign: "center" },
  btn: {
    fontWeight: 800,
  },
});

export default useStyles;
