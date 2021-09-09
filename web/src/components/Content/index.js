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
// const Content2 = ({ children, style, all }) => {
//   return (
//     <div>
//       <div
//         style={{
//           background: "rgb(248,248,248)",
//           width: "1280px",
//           margin: "0 auto",
//           ...style,
//         }}
//       >
//         {children}
//       </div>
//     </div>
//   );
// };

// class Index extends React.Component {
//   state = {
//     width: window.innerWidth,
//   };
//   componentDidMount() {
//     window.onresize = () => {
//       this.setState({
//         width: window.innerWidth,
//       });
//     };
//   }
//   render() {
//     return <Content children={this.props.children} />;
//   }
// }

export default Content;
