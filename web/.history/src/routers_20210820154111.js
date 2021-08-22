import React from "react";
import { Route, Switch } from "react-router-dom";
imp
export default (class extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route
          path="/"
          render={(props) => <Main {...props} desc={this.desc} />}
        />
      </Switch>
    );
  }
});
