import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import { auth } from "../../firebase/firebase.utils";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./Header.scss";

const Header = ({ user, history }) => {
  return (
    <header className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <ul className="options">
        <li className="option">
          <Link to="/shop">SHOP</Link>
        </li>
        <li className="option">
          <Link to="/shop">CONTACT</Link>
        </li>
        {user ? (
          <li
            className="option"
            onClick={() => {
              auth.signOut();
              history.push("/");
            }}
          >
            SIGN OUT
          </li>
        ) : (
          <li>
            <Link className="option" to="/signin">
              SIGN IN
            </Link>
          </li>
        )}
      </ul>
    </header>
  );
};

export default withRouter(Header);
