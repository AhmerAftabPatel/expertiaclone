import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { Header, Icon, Menu, Sidebar } from "semantic-ui-react";
/**
 * @author
 * @function Base
 **/



const Base = ({ children }) => {
  return (
    <>
      <Sidebar.Pushable as="a" style={{ color: "#000000" }}>
        <Sidebar
          as={Menu}
          animation="overlay"
          style={{ position: "fixed" }}
          //   icon="labeled"
          inverted
          vertical
          visible
          width={50}
        >
          <Header
            style={{ padding: "15px", color: "white" }}
            textAlign="center"
            as="h2"
          >
            Expertia
          </Header>
          <Menu.Item as="a">
            <Icon name="pie chart" style={{ float: "left" }} />
            &nbsp; <span style={{ color: "white" }}>Overview</span>
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="group" style={{ float: "left" }} />
            &nbsp; Candidates
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="group" style={{ float: "left" }} />
            &nbsp; Hiring Team
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="file" style={{ float: "left" }} />
            &nbsp; Resume Folder
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="book" style={{ float: "left" }} />
            &nbsp; Articles
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="setting" style={{ float: "left" }} />
            &nbsp; settings
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher
          style={{
            paddingLeft: "265px",
            height: "750px",
            overflow: "auto",
            overflowX: "hidden"
          }}
        >
          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </>
  );
};

export default Base;
