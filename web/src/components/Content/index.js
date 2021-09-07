import { Row, Col } from "antd";
import React from "react";
const Content = ({ children, style, all }) => {
  return (
    <Row style={{ background: "rgb(248,248,248)", ...style }}>
      <Col
        span={22}
        xs={21}
        sm={20}
        md={19}
        lg={18}
        xl={17}
        xxl={16}
        style={{ margin: "0 auto" }}
      >
        {children}
      </Col>
    </Row>
  );
};
const Content2 = ({ children, style, all }) => {
  return (
    <div>
      <div
        style={{
          background: "rgb(248,248,248)",
          width: "1280px",
          margin: "0 auto",
          ...style,
        }}
      >
        {children}
      </div>
    </div>
  );
};
function ppHOC(WrappedComponent) {
  return class Index extends React.Component {
    state = {
      width: window.innerWidth,
    };
    componentDidMount() {
      window.onresize = () => {
        setTimeout(() =>
          this.setState({
            width: window.innerWidth,
          })
        );
      };
    }
    render() {
      const key = this.state.width + "" + this.props.aa;
      console.log(this.props, 666);

      return (
        <div key={key}>
          {this.state.width > 1280 && (
            <div>
              <div
                style={{
                  background: "rgb(248,248,248)",
                  width: "1280px",
                  margin: "0 auto",
                  ...this.props.style,
                }}
              >
                <WrappedComponent />
              </div>
            </div>
            // <Content2 style={this.props.style} children={this.props.children} />
          )}
          {this.state.width <= 1280 && (
            <Row
              style={{ background: "rgb(248,248,248)", ...this.props.style }}
            >
              <Col
                span={22}
                xs={21}
                sm={20}
                md={19}
                lg={18}
                xl={17}
                xxl={16}
                style={{ margin: "0 auto" }}
              >
                <WrappedComponent />
              </Col>
            </Row>
          )}
        </div>
      );
    }
  };
}

export default ppHOC;
