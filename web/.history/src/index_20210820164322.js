import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import routers from "./router";
import { Provider } from "react-redux";
import { configureStore, runSaga } from "./configureStore";

const store = configureStore();
runSaga();
//该组件通过递归的方式，将所有route中带有children路由的父路由进行解构,最终用createBasicRoute函数来渲染
const createFixRoute = (route, index) => {
  const { path, component: RouteComponent, children } = route;
  if (children) {
    return (
      <Route
        // exact
        key={index + "sub"}
        path={path}
        render={(props) => {
          let redirectPath = null;
          return (
            <RouteComponent {...props}>
              <Switch timeout={200}>
                {children.map((child, index2) => {
                  const { path: childPath, redirect } = child;
                  if (redirect) {
                    redirectPath = childPath;
                  }
                  return createFixRoute(
                    { ...child, path: path + childPath },
                    `${index}-${index2}`
                  );
                })}
                <Redirect
                  from={`${path}`}
                  to={`${path}${redirectPath || children[0].path}`}
                />
              </Switch>
            </RouteComponent>
          );
        }}
      />
    );
  } else {
    return createBasicRoute(route, index);
  }
};

const createBasicRoute = (route, index) => {
  const { path, component: Component, redirect, title } = route;
  if (redirect && window.location.pathname === path) {
    return <Redirect to={redirect} />;
  }
  return (
    <Route
      exact
      key={index}
      path={path}
      render={(props) => {
        if (title) {
          document.title = title;
        }
        props.history.listen((path) => {
          // console.log(path, "路由监听");
        });
        return <Component {...props} />;
      }}
    />
  );
};
class Index extends React.PureComponent {
  componentDidMount() {
    // this.props.login();
  }
  render() {
    return (
      <div>
        <Na
        <Router
          basename={process.env.NODE_ENV === "development" ? "" : "ticket"}
        >
          {routers.map((router, index) => {
            const {
              path,
              //  component: RouteComponent,
              children,
            } = router;
            if (children) {
              return (
                <Route
                  // exact
                  key={index}
                  path={path}
                  render={(props) => {
                    let redirectPath = null;
                    return (
                      // <RouteComponent {...props}>
                      <Switch timeout={200}>
                        {children.map((child, index2) => {
                          const { path: childPath, redirect } = child;
                          if (redirect) {
                            redirectPath = childPath;
                          }
                          return createFixRoute(
                            { ...child, path: path + childPath },
                            `${index}-${index2}`
                          );
                        })}
                        <Redirect
                          from={`${path}`}
                          to={`${path}${redirectPath || children[0].path}`}
                        />
                      </Switch>
                      // </RouteComponent>
                    );
                  }}
                />
              );
            } else {
              return createBasicRoute(router, index);
            }
          })}
        </Router>
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store || {}}>
    <Index />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
