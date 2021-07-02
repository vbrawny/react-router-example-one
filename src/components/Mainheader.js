import React from "react";
import classes from "./Mainheader.module.css";
import { Link, NavLink } from "react-router-dom";

export const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          {/*
          The below a href works as react is a nothing but javascript.
          But downside of it is, it will render a new page
          as page refreshes for every link click
          which violates SPA implemention.
          */}
          {/* <li>
            <a href="/welcome">Welcome</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li> */}
          {/*
          So we use the builtin React Router Dom implementation
          called Link which takes 'to' prop to navigate to respective
          route and component.
          */}
          {/* <li>
            <Link to="/welcome">Welcome</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li> */}
          <li>
            <NavLink activeClassName={classes.active} to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
