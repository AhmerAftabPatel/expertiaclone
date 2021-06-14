import React, { Fragment, useState } from "react";
import {
  Button,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Container,
  Grid,
  Search,
  Divider,
  Item,
  Form,
  TextArea
} from "semantic-ui-react";
import Base from "../Core/Base";
import Step3 from "./step3";

/**
 * @author
 * @function Dashboard
 **/

const Dashboard = props => {
  const [step, setStep] = useState(1);
  const anotherSegement = (
    <>
      <Segment
        style={{
          minHeight: "200px",
          margin: "45px",
          marginTop: "20px",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        }}
      >
        <Container>
          <Item style={{ display: "flex" }}>
            <Icon size="large" name="pencil" />
            <Item.Content verticalAlign="middle">
              <span style={{ color: "black", fontWeight: "bold" }}>
                Create a new JD with Expertia
              </span>{" "}
              <br />
              <span style={{ color: "silver" }}>
                create jd in few seconds with our smart editor
              </span>
            </Item.Content>
            <br />
          </Item>
          <Form>
            <TextArea
              style={{ outline: "none", marginTop: "20px" }}
              placeholder="start typing your requirements..."
            />
          </Form>
        </Container>
      </Segment>
      <Button
        onClick={() => (step === 1 ? setStep(3) : setStep(1))}
        style={{
          color: "white",
          position: "absolute",
          bottom: "0px",
          right: "20px",
          width: "150px",
          margin: "5px",
          background: "blue",
          borderRadius: "19px"
        }}
      >
        {step === 1 ? "Next" : "Back"}
      </Button>
    </>
  );
  const resumeUpload = (
    <>
      <Segment
        style={{
          minHeight: "300 px",
          margin: "45px",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        }}
      >
        <Grid columns={2} relaxed="very">
          <Grid.Column>
            <Container style={{ padding: "15px", textColor: "black" }}>
              <Item style={{ display: "flex" }}>
                <Icon size="big" name="file pdf outline" />
                <Item.Content verticalAlign="middle">
                  Upload a JD file <br />
                  <p>use your file browser or just drag and drop</p>
                </Item.Content>
                <br />
              </Item>
              <Segment
                basic
                style={{
                  border: "3px dashed grey",
                  borderRadius: "5px",
                  width: "100%",
                  margin: "auto",
                  marginTop: "50px",
                  height: "150px",
                  paddingTop: "50px"
                }}
                textAlign="center"
              >
                <Icon size="big" name="file pdf outline"></Icon>
                <br />
                <label>pdf, doc, docx</label>
              </Segment>
            </Container>
          </Grid.Column>
          <Grid.Column>
            <Container style={{ padding: "15px", textColor: "black" }}>
              <Item style={{ display: "flex" }}>
                <Icon size="big" name="linkify" />
                <Item.Content verticalAlign="middle">
                  Link a URL <br />
                  <p>copy and paste a url to from any job platform</p>
                </Item.Content>
                <br />
              </Item>
              <Segment basic textAlign="center">
                <Image
                  size="small"
                  style={{ marginLeft: "40px" }}
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.JOK8X5Yz-9mptYDBE9WdbAHaHa%26pid%3DApi&f=1"
                ></Image>
              </Segment>
              <Form.Field>
                <input
                  style={{
                    borderRadius: "15px",
                    minWidth: "400px",
                    height: "35px",
                    outline: "none",
                    paddingLeft: "15px",
                    border: "1px solid grey",
                    marginTop: "5px"
                  }}
                  placeholder="Enter the url to the job posting from any platform"
                />
                <Icon size="large" name="arrow right"></Icon>
              </Form.Field>
            </Container>
          </Grid.Column>
        </Grid>

        <Divider vertical>or</Divider>
      </Segment>
    </>
  );

  const step1 = (
    <>
      <Container style={{ position: "relative" }}>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <label style={{ marginLeft: "10px" }}>
                Tell us your company name
              </label>{" "}
              <br />
              <Form.Field>
                <input
                  style={{
                    borderRadius: "15px",
                    width: "300px",
                    height: "30px",
                    outline: "none",
                    paddingLeft: "15px",
                    border: "1px solid grey",
                    marginTop: "5px"
                  }}
                  placeholder="your company name"
                />
              </Form.Field>
            </Grid.Column>
            <Grid.Column>
              <label style={{ marginLeft: "10px" }}>
                What role are you hiring for
              </label>
              <Form.Field>
                <input
                  style={{
                    borderRadius: "15px",
                    width: "300px",
                    height: "30px",
                    marginTop: "5px",
                    outline: "none",
                    paddingLeft: "15px",
                    border: "1px solid grey"
                  }}
                  placeholder="choose a role"
                />
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      {resumeUpload}
      {anotherSegement}
    </>
  );

  const renderSteps = () => {
    switch (step) {
      case 1:
        return step1;
      case 3:
        return <Step3 history={props.history} />;
    }
  };
  return (
    <Fragment>
      <Base>
        <Menu inverted secondary>
          {/* <Segment basic> */}

          <Header style={{ padding: "10px" }} as="h3">
            <Icon name="pie chart"></Icon> Your Company name
          </Header>
          <Menu.Item as="a" position="right">
            <Button
              style={{
                borderRadius: "20px",
                width: "150px",
                background: "blue",
                color: "#FFFFFF"
              }}
            >
              Signup
            </Button>
          </Menu.Item>
          {/* </Segment> */}
        </Menu>
        <Container fluid style={{ padding: "10px" }}>
          <Segment
            style={{
              minHeight: "650px",
              // padding: "0px",
              boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"
            }}
          >
            <Header style={{ padding: "30px", margin: "0px" }}>
              {/* <hr style ={{zIndex : "-1"}}/> */}
              <Grid columns="equal">
                <Grid.Row>
                  <Grid.Column>
                    <h3 style={{ textAlign: "center", top: "0" }}>
                      <Button
                        circular
                        onClick={() => setStep(1)}
                        color={step === 1 ? "facebook" : ""}
                        style={{ padding: "9px" }}
                        icon="checkmark"
                      />
                      Upload/Create JD
                    </h3>
                  </Grid.Column>
                  <Grid.Column>
                    <h3 style={{ textAlign: "center" }}>
                      {" "}
                      <Icon name="checkmark"></Icon> Source candidates
                    </h3>
                  </Grid.Column>
                  <Grid.Column>
                    <h3 style={{ textAlign: "center", top: "0" }}>
                      <Button
                        onClick={() => setStep(3)}
                        circular
                        color={step === 3 ? "facebook" : ""}
                        style={{ padding: "9px" }}
                        icon="checkmark"
                      />
                      Get results
                    </h3>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Header>
            {renderSteps()}
          </Segment>
        </Container>
      </Base>
    </Fragment>
  );
};

export default Dashboard;
