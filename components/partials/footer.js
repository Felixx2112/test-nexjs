import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const FooterComponent = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      Component Design ©2021 Created by NextJS
    </Footer>
  );
};

export default React.memo(FooterComponent);
