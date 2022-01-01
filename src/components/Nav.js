import React from "react";
import { Link } from "react-router-dom";
import classes from "./Nav.module.css";
import Search from "./Search";

function Nav() {
  return (
    <div className={classes.nav}>
      <Link to="/" className={classes.logo}>
        MovieDb
      </Link>
      <Search />
    </div>
  );
}

export default Nav;
