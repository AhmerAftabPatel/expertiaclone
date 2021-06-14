import React, { Fragment, useState } from "react";
import { Input, Menu, Divider, Button, Image } from "semantic-ui-react";
import DummyUrl from "../assets/Dummy.png";
/**
 * @author
 * @function PageHeader
 **/

const PageHeader = props => {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick =
    () =>
    (e, { name }) =>
      setActiveItem(name);
  return (
    <Fragment>
      <Menu secondary style={{ top: "0px", right: "0px" }}>
        <Menu.Item>
          <Image
            src={DummyUrl}
            size="mini"
            style={{ borderRadius: "15px" }}
          ></Image>
          &nbsp; Paytm - One97 Communications
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Button
              style={{
                borderRadius: "20px",
                width: "150px",
                background: "blue",
                color: "#FFFFFF"
              }}
            >
              + &nbsp; Create
            </Button>
          </Menu.Item>
          <Divider />
          <div
            class="vl"
            style={{
              borderLeft: "2px solid grey",
              height: "30px",
              margin: "auto"
            }}
          ></div>
          <Menu.Item>
            Ahmer Aftab &nbsp;
            <Image
              src={DummyUrl}
              size="mini"
              style={{ borderRadius: "15px" }}
            ></Image>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Fragment>
  );
};

export default PageHeader;
