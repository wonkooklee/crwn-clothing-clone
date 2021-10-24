import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/Homepage.jsx";
import ShopPage from "./pages/shop/Shop.jsx";
import SignInSignUp from "./pages/sign-in-and-sign-up/SignInSignUp";
import Header from "./components/header/Header";
import { auth } from "./firebase/firebase.utils";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setUser(user);
      console.log(user);
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <Header user={user} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUp} />
      </Switch>
    </div>
  );
};

export default App;
