import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/main";
export default class Router extends React.PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" render={(props) => <Main {...props} />} />
        </Switch>
      </Router>
    );
  }
}
