import React, { useEffect, useState } from "react";
// import config from "config";

import { Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import Footer from "./components/footer";

const AppContainer = function () {
  const [token, setToken] = useState();
  useEffect(() => {
    // Extract the token directly from the URL
    const url = window.location.href;
    const tokenFromUrl = url.split("/?")[1]; // Gets the token part after `/?`

    if (tokenFromUrl) {
      // Save token to localStorage and state
      localStorage.setItem("token", tokenFromUrl);
      setToken(tokenFromUrl);
    } else if (typeof window !== "undefined") {
      // Retrieve token from localStorage if not found in URL
      const storedToken = localStorage.getItem("token");
      setToken(storedToken);
    }
  }, []);

  if (!token) {
    return null; // Exit if no token
  }
  console.log(token);
  return (
    // <Router basename={`${config.publicPath}`}>
    <Router basename="/react">
      <>
        <Route render={(props) => <Header {...props} />} />

        {/* home */}
        <Route exact path="/home" component={Home} />

        <Route render={(props) => <Footer {...props} />} />
      </>
    </Router>
  );
};

export default AppContainer;
