import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Link,
} from "@material-ui/core";
import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import useStyles from "../utils/styles";

const Layout = ({ title, children }) => {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>{title ? `${title} - Pizza Gallery` : "Pizza Gallery"}</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NextLink href="/" passHref>
            <Link>
              <Typography
                variant="h6"
                className={classes.brand}
                component="div"
              >
                Pizza Gallery
              </Typography>
            </Link>
          </NextLink>
          <div className={classes.grow}></div>
          <NextLink href="/login" passHref>
            <Link>
              <Typography>Login</Typography>
            </Link>
          </NextLink>
          <NextLink href="/cart" passHref>
            <Link>
              <Typography>Cart</Typography>
            </Link>
          </NextLink>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>all rights reserved © pizza gallery 2022</Typography>
      </footer>
    </>
  );
};

export default Layout;
