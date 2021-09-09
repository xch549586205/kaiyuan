import { Row, Col } from "antd";
import React from "react";

const isPhone = window.innerWidth < 768;

const Content = ({ children, style, all }) => {
  return (
    <Row style={{ ...style }}>
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
          background: "#fff",
          width: window.screen.width * (isPhone ? 22 / 24 : 0.666666667) + "px",
          margin: "0 auto",
          ...style,
        }}
      >
        {children}
      </div>
    </div>
  );
};

class Index extends React.Component {
  state = {
    flag: window.innerWidth / window.screen.width > 0.66666666667,
  };
  componentDidMount() {
    window.onresize = () => {
      this.setState({
        flag: window.innerWidth / window.screen.width > 0.66666666667,
      });
    };
  }
  render() {
    if (this.state.flag) {
      return <Content2 children={this.props.children} />;
    } else {
      return <Content children={this.props.children} />;
    }
  }
}

export default Index;
