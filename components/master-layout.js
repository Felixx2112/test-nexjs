import React from "react";
import HeaderComponent from "./partials/header";
import FooterComponent from "./partials/footer";
import BreadcrumbComponent from "./partials/breadcrumb";
import { Layout } from "antd";

const { Content } = Layout;

function MasterLayout(props) {
  const { sub1, sub2, sub3 } = props;
  return (
    <Layout className="layout">
      <HeaderComponent />
      <Content style={{ padding: "0 50px" }}>
        <BreadcrumbComponent sub1={sub1} sub2={sub2} sub3={sub3} />
        <div className="site-layout-content">{props.children}</div>
      </Content>
      <FooterComponent />
    </Layout>
  );
}

export default React.memo(MasterLayout);
