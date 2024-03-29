import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/test/users">
        Users
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/test/items"
              className={
                window.location.pathname === "/test/items" ||
                window.location.pathname === "/test/orders"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Sell Items
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/test/itemsGrid"
              className={
                window.location.pathname === "/test/itemsGrid"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Buy Items
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/test/orders"
              className={
                window.location.pathname === "/test/orders"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Check Order
            </Link>
          </li>
        </ul>
        {props.cart ? (
          <ul className="">
            <li>
              <Link to={"/test/orders"}> Cart</Link>{" "}
              <span>{props.cartCount}</span>
            </li>
          </ul>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}

export default Navbar;
