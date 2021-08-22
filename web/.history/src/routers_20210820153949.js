import React from "react";
import { Route, Switch } from "react-router-dom";

export default (class extends React.PureComponent {
  render() {
    return (
      <Switch
      >
        {/* <Route path="/timer" render={ props =>
                    <Timer {...props} desc={this.desc} setting={Setting}/>
                }/> */}
        <Route
          path="/"
          render={(props) => <Main {...props} desc={this.desc} />}
        />
      </Switch>
    );
  }
});
