import React from "react";

import { Row, Col } from "antd";

import LogoSearch from "./LogoSearch";
import UserSetting from "./UserSetting";
import PageNav from "./PageNav";

function Navbar() {
  return (
    <Row className="navbar">
      {/* LOGO SEARCH */}
      <Col span={5}>
        <LogoSearch />
      </Col>
      {/* LOGO SEARCH */}
      {/* NEWSFEED */}
      <Col span={14}>
        <div className="container">
          <PageNav />
        </div>
      </Col>
      {/* END NEWSFEED */}
      {/* USER SETTING */}
      <Col span={5}>
        <UserSetting />
      </Col>
      {/* USER SETTING */}
    </Row>
  );
}

export default Navbar;
