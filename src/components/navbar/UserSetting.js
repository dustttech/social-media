import React from "react";
import { Link } from "react-router-dom";

import { FaUser } from "react-icons/fa";

import { Avatar, Button } from "antd";

import { userSetting } from "./../../data/dataUI";

function UserSetting(props) {
  return (
    <div className="navbar__col">
      <Link className="navbar__user" to="/userinfo">
        <Avatar icon={<FaUser />} />
        <span className="navbar__user--name">User Name</span>
      </Link>
      <ul className="navbar__user--links">
        {userSetting.map((item) => {
          return (
            <li key={item.id}>
              <Link to="/">
                <Button shape="circle" icon={item.icon} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UserSetting;
