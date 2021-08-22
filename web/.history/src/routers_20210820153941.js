import React from "react";
import { Route, Switch } from "react-router-dom";

export default (class extends React.PureComponent {
  render() {
    return (
      <Switch
        location={this.props.location}
        history={this.props.history}
        level={1}
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
