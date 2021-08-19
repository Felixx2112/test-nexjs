import React from "react";
import { Breadcrumb } from "antd";

function BreadcrumbComponent(props) {
  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      <Breadcrumb.Item>{props.sub1}</Breadcrumb.Item>
      <Breadcrumb.Item>{props.sub2}</Breadcrumb.Item>
      <Breadcrumb.Item>{props.sub3}</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default React.memo(BreadcrumbComponent);
