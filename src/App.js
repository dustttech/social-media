import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// ANT DESIGN UI
import { Row, Col } from "antd";

// COMPONENT
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Chat from "./components/chat/Chat";

// PAGE
import NewsList from "./pages/NewsList";
import NewsNavbar from "./components/navbar/NewsNavbar";
import FriendRequest from "./pages/FriendRequest";
import WatchList from "./pages/WatchList";
import GroupNews from "./pages/GroupNews";
import UserInfo from "./pages/UserInfo";

function App() {
  return (
    <Router>
      {/* NAVBAR */}
      <Row>
        <Col span={24}>
          <Navbar />
        </Col>
      </Row>
      {/* END NAVBAR */}
      {/* CONTENT */}
      <Row className="content">
        {/* SIDEBAR */}
        <Col span={5}>
          <Sidebar />
        </Col>
        {/* END SIDEBAR */}
        {/* NEWSFEED */}
        <Col span={14}>
          <NewsNavbar />
          <Switch>
            <Route exact path="/">
              <NewsList />
            </Route>
            <Route path="/friendlist">
              <FriendRequest />
            </Route>
            <Route path="/watch">
              <WatchList />
            </Route>
            <Route path="/group">
              <GroupNews />
            </Route>
            <Route path="/userinfo">
              <UserInfo />
            </Route>
          </Switch>
        </Col>
        {/* END NEWSFEED */}
        {/* CHAT */}
        <Col span={5}>
          <Chat />
        </Col>
        {/* END CHAT */}
      </Row>
      {/* END CONTENT */}
    </Router>
  );
}

export default App;
