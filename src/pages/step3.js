import React, { useState } from "react";
import {
  Card,
  Container,
  Header,
  Form,
  Icon,
  Grid,
  Button,
  Image,
  Message
} from "semantic-ui-react";
import imageUrl from "../assets/devs.jpg";
import GoogleLogin from "react-google-login";
/**
 * @author
 * @function Step3
 **/

const Step3 = props => {
  const [user, setUser] = useState("");
  const responseGoogle = response => {
    const { googleId, name, email, imageUrl } = response.profileObj;
    console.log("if", response);
    const user = {
      password: googleId,
      name: name,
      email: email,
      photo: imageUrl
    };
    console.log("user obj to social login: ", user);
    setUser(user);
  };
  const PositiveMessage = (
    <>
      {user && (
        <Message
          positive
          icon
          style={{ display: user ? "" : "none", marginBottom: "100px" }}
        >
          <Image size="mini" src={user.photo} />
          <Message.Header>&nbsp; Awesome! &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</Message.Header>

          <p>
          {user.name} Your <b> email is </b> {user.email}.
            <br />
            you are now signed in to expertia
          </p>
        </Message>
      )}
    </>
  );
  const LeftSide = (
    <>
      <Container textAlign="center" style={{ margin: "15px", float: "left" }}>
        {!user ? <Image size="large" src={imageUrl}></Image> : PositiveMessage}
        <Container>
          <Header as="h1" style={{ fontWeight: "bold" }}>
            Awesome!
          </Header>
          <Header as="h3" style={{ fontWeight: "bold" }}>
            The Position of UX designer for Paytm <br /> has been succussfully
            created.
          </Header>
          <Header as="h5" style={{ fontWeight: "lighter" }}>
            Please Signup to recieve the <br /> list of shortlisted candidates
            on your email...
          </Header>
        </Container>
      </Container>
    </>
  );
  const Midlevel = (
    <>
      <Container
        style={{
          margin: "0px",
          padding: "20px",
          paddingTop: "5px",
          background: "#46B2E0",
          textAlign: "center"
        }}
      >
        <span
          style={{
            textAlign: "center",
            fontWeight: "lighter",
            marginTop: "0px"
          }}
        >
          or Signup using
        </span>
        <Grid columns="2">
          <Grid.Row>
            <Grid.Column>
              <Icon
                size="big"
                name="linkedin"
                style={{ borderRadius: "15px" }}
              />
              <br />
              <span>LinkedIn</span>
            </Grid.Column>
            <Grid.Column>
              <GoogleLogin
                clientId="389504607319-q7akb3vjg4eefv764kqqc5ntts7bc2ij.apps.googleusercontent.com"
                render={renderProps => (
                  <>
                    <Icon
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      name="google"
                      size="big"
                      style={{ borderRadius: "15px" }}
                    />
                    <br />
                    <span>Google</span>
                  </>
                )}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
  return (
    <>
      <>
        <Container style={{ position: "relative", padding: "0px" }}>
          <Grid columns="2">
            <Grid.Row>
              <Grid.Column>{LeftSide}</Grid.Column>
              <Grid.Column>
                <Card
                  style={{
                    width: "380px",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    float: "right"
                  }}
                >
                  <Card.Content>
                    <Card.Header
                      style={{
                        marginLeft: "20px",
                        fontSize: "15px",
                        fontWeight: "lighter"
                      }}
                    >
                      SignUp
                    </Card.Header>
                    {/* <Card.Meta>Co-Worker</Card.Meta> */}
                    <Header
                      as="h3"
                      color="black"
                      style={{ marginLeft: "20px" }}
                    >
                      To continue to <br /> hire like an expert
                    </Header>
                    <Card.Description style={{ padding: "17px" }}>
                      <Form>
                        <Form.Field>
                          <input
                            style={{
                              borderRadius: "21px",
                              width: "100%",
                              height: "40px",
                              outline: "none",
                              paddingLeft: "15px",
                              marginBottom: "5px",
                              border: "1px solid grey",
                              marginTop: "5px"
                            }}
                            placeholder="your name"
                          />
                        </Form.Field>
                        <Form.Field>
                          <input
                            style={{
                              borderRadius: "21px",
                              width: "100%",
                              height: "40px",
                              outline: "none",
                              paddingLeft: "15px",
                              marginBottom: "5px",
                              border: "1px solid grey",
                              marginTop: "5px"
                            }}
                            placeholder="your email"
                          />
                        </Form.Field>
                        <Form.Field>
                          <input
                            style={{
                              borderRadius: "21px",
                              width: "100%",
                              height: "40px",
                              outline: "none",
                              paddingLeft: "15px",
                              border: "1px solid grey",
                              marginTop: "5px"
                            }}
                            placeholder="your phone number"
                          />
                        </Form.Field>
                      </Form>
                    </Card.Description>
                  </Card.Content>
                  {Midlevel}
                  <span
                    style={{
                      textAlign: "center",
                      fontSize: "12px",
                      margin: "15px"
                    }}
                  >
                    By signing up you agree to terms and conditions and privacy
                    policy
                  </span>
                  <p style={{ paddingBottom: "5px", textAlign: "center" }}>
                    <Button
                      fluid
                      textAlign="center"
                      style={{
                        textAlign: "center",
                        display: "block",
                        marginLeft: "30%",
                        background: "blue",
                        color: "white",
                        borderRadius: "25px",
                        width: "150px"
                      }}
                    >
                      Agree & Sign Up
                    </Button>
                  </p>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </>
    </>
  );
};

export default Step3;
