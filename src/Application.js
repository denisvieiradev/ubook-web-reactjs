import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./modules/home/Home";

const Application = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Route pattern="/" component={Home} />
    </BrowserRouter>
  </Provider>
);

Application.propTypes = {
  store: PropTypes.object.isRequired
};

export default Application;
