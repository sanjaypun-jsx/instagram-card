import React from "react";
import InstagramCard from "./InstagramCard";
import "./styles.css";
import { Data } from "./Data";
import { Col, Row } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

export default function App() {
  return (
    <div className="App">
      <h1>Instagram Card</h1>

      <Row>
        {Data.map((data, i) => {
          return (
            <Col
              key={i}
              span={8}
              xs={24}
              sm={24}
              md={24}
              lg={12}
              xl={8}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0rem 3rem"
              }}
            >
              <InstagramCard data={data} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
