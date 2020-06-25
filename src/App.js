import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

import AllPages from "./pages/AllPagesComponent/AllPages";

import "./App.css";

import {
  Typography,
  responsiveFontSizes,
  createMuiTheme,
  MuiThemeProvider,
} from "@material-ui/core";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <MuiThemeProvider theme={theme}>
            <Typography>
              <Route
                render={({ location }) => <AllPages location={location} />}
              />
              <Footer />
            </Typography>
          </MuiThemeProvider>
        </Router>
      </div>
    );
  }
}

export default App;
