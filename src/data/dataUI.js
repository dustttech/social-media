import React from "react";

import { AiFillHome } from "react-icons/ai";

import { BsBellFill } from "react-icons/bs";

import { IoMdArrowDropdown } from "react-icons/io";

import { FiUsers } from "react-icons/fi";

import { RiGroup2Line, RiVideoFill, RiMessengerFill } from "react-icons/ri";

import { CgMenuGridO } from "react-icons/cg";

export const pageNav = [
  {
    id: 1,
    name: "Home",
    icon: <AiFillHome />,
    location: "/",
  },
  {
    id: 2,
    name: "FriendList",
    icon: <FiUsers />,
    location: "/friendlist",
  },
  {
    id: 3,
    name: "Watch Video",
    icon: <RiVideoFill />,
    location: "/watch",
  },
  {
    id: 4,
    name: "Group News",
    icon: <RiGroup2Line />,
    location: "/group",
  },
];
export const userSetting = [
  {
    id: 1,
    name: "Menu",
    icon: <CgMenuGridO />,
    location: "/",
  },
  {
    id: 2,
    name: "Messenger",
    icon: <RiMessengerFill />,
    location: "/",
  },
  {
    id: 3,
    name: "Notifications",
    icon: <BsBellFill />,
    location: "/",
  },
  {
    id: 4,
    name: "Account",
    icon: <IoMdArrowDropdown />,
    location: "/",
  },
];
