import React, { Component } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "../home/home.js";
import About from "../about/about.js";
import Menu from "../menu/menu.js";
import Reservations from "../reservations/reservations.js";
import Contact from "../contact/contact.js";
import { AnimatePresence } from "framer-motion";

import "./AllPages.style.css";

const AllPages = ({ location }) => {
  return (
    <AnimatePresence>
      <Switch location={location}>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/reservations" component={Reservations} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </AnimatePresence>
  );
};

export default AllPages;
