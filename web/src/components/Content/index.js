import { Row, Col } from "antd";

const Content = ({ children, style, all }) => {
  return (
    <Row style={style || { background: "rgb(248,248,248)" }}>
      <Col
        style={{ margin: "0 auto" }}
        span={22}
        xs={21}
        sm={20}
        md={19}
        lg={18}
        xl={17}
        xxl={16}
      >
        {children}
      </Col>
    </Row>
  );
};
export default Content;
