import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Input } from "antd";

//ICON
import { BiSearch } from "react-icons/bi";

// LOGO IMG
import logo from "./../../assets/imgs/logo.png";

function LogoSearch() {
  const [toggleInput, setToggleInput] = useState(false);

  return (
    <div className="navbar__col">
      <Link to="/">
        <img
          className={
            !toggleInput ? `navbar__img` : `navbar__img navbar__img--hide`
          }
          src={logo}
          alt="logo"
        />
      </Link>
      <Input
        className="navbar__input"
        placeholder="Search on Facebook"
        prefix={<BiSearch className="navbar__icon" />}
        bordered={false}
        size="large"
      ></Input>
      {/* <div className="navbar__search">
        <button
          className="navbar__search--trigger"
          onClick={() => setToggleInput(!toggleInput)}
        >
          <BiSearch className="icon" />
        </button>
        <form className="navbar__search--form">
          <input
            type="search"
            className="navbar__search--input"
            placeholder="Search"
          />
        </form>
      </div> */}
    </div>
    // <Row align="middle">
    //   <Col span={8}>

    //   </Col>
    //   <Col span={16}>

    //   </Col>
    // </Row>
  );
}

export default LogoSearch;
