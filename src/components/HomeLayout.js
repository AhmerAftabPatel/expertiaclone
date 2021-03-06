import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Modal,
  Visibility
} from "semantic-ui-react";
import SampleChart from "./Chart";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024
  }
});

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const HomepageHeading = ({ mobile }) => (
  //   <Container>
  <Grid divided="vertically" style={{ marginTop: "150px" }}>
    <Grid.Row columns={2}>
      <Grid.Column>
        <Container style={{ padding: "50px 100px" }}>
          <Header as="h1" style={{ fontSize: "50px" }} textAlign="left">
            Let's Find that <br /> best candidate...
          </Header>
          <p style={{ textAlign: "left", fontWeight: "light" }}>
            Source, screen , rank, candidates
            <br />
            from multiple job boards, internal and external databases.
          </p>
          <Button
            floated="left"
            size="large"
            style={{
              background: "blue",
              color: "#FFFFFF",
              borderRadius: "20px",
              width: "200px"
            }}
          >
            Get Started
          </Button>
        </Container>
      </Grid.Column>
      <Grid.Column>
        {/* <SampleChart/> */}
        <Image
          size="large"
          style={{ textAlign: "center", margin: "auto" }}
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.oasisalignment.com%2Fwp-content%2Fuploads%2F2018%2F07%2Fvideo-icon.png&f=1&nofb=1"
        />
      </Grid.Column>
    </Grid.Row>
  </Grid>
  //   </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Media greaterThan="mobile">
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <div
            // inverted
            textAlign="center"
            style={{ minHeight: 700, padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              //   inverted={!fixed}
              //   pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item as="h1" position="left">
                  Expertia
                </Menu.Item>
                {/* <Menu.Item as='a' active>
                  Home
                </Menu.Item>
                <Menu.Item as='a'>Work</Menu.Item>
                <Menu.Item as='a'>Company</Menu.Item>
                <Menu.Item as='a'>Careers</Menu.Item> */}
                <Menu.Item position="right">
                  <Button
                    primary={fixed}
                    style={{
                      marginLeft: "0.5em",
                      background: "none",
                      borderRadius: "25px",
                      width: "150px"
                    }}
                  >
                    Solutions
                  </Button>
                  <Button
                    primary={fixed}
                    style={{
                      marginLeft: "0.5em",
                      background: "none",
                      borderRadius: "25px",
                      width: "150px"
                    }}
                  >
                    AboutUs
                  </Button>
                  <Button
                    primary={fixed}
                    style={{
                      marginLeft: "0.5em",
                      background: "none",
                      borderRadius: "25px",
                      width: "150px"
                    }}
                  >
                    Contact Us
                  </Button>
                  <Modal
                    dimmer="blurring"
                    size="mini"
                    closeIcon
                    style={{ height: "500px", borderRadius: "0px" }}
                    trigger={
                      <Button
                        primary={fixed}
                        style={{
                          marginLeft: "0.5em",
                          background: "blue",
                          color: "white",
                          borderRadius: "25px",
                          width: "150px"
                        }}
                      >
                        Sign Up
                      </Button>
                    }
                    header="Reminder!"
                  >
                    <Container style={{ padding: "25px" }}>
                      <div style={{ marginTop: "50px" }}>
                        <Header>Great!</Header>
                        <Header as="h1">
                          What are you <br /> looking for ?
                        </Header>
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          bottom: "20%",
                          left: "20%"
                        }}
                      >
                        <Link to="/dashboard">
                          <Button
                            style={{
                              borderRadius: "21px",
                              width: "200px",
                              marginBottom: "20px",
                              fontSize: "17px",
                              fontWeight: "bold",
                              background: "blue",
                              color: "#FFFFFF"
                            }}
                          >
                            To Hire
                          </Button>
                        </Link>
                        <br />
                        <Button
                          style={{
                            borderRadius: "21px",
                            width: "200px",
                            fontSize: "17px",
                            fontWeight: "bold",
                            background: "green",
                            color: "#FFFFFF"
                          }}
                        >
                          To Apply
                        </Button>
                        <br />
                        <br />
                        <a
                          href="#"
                          style={{
                            textAlign: "center",
                            marginLeft: "20px",
                            textDecoration: "underline"
                          }}
                        >
                          I already have an account
                        </a>
                      </div>
                    </Container>
                  </Modal>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </div>
          <p style={{ textAlign: "center", fontSize: "25px" }}>with expertia</p>
        </Visibility>

        {children}
      </Media>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Media as={Sidebar.Pushable} at="mobile">
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as="a" active>
              Home
            </Menu.Item>
            <Menu.Item as="a">Work</Menu.Item>
            <Menu.Item as="a">Company</Menu.Item>
            <Menu.Item as="a">Careers</Menu.Item>
            <Menu.Item as="a">Log in</Menu.Item>
            <Menu.Item as="a">Sign Up</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 350, padding: "1em 0em" }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                  <Menu.Item position="right">
                    <Button as="a" inverted>
                      Log in
                    </Button>
                    <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                      Sign Up
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h1" style={{ fontSize: "50px" }}>
              Source Widely,
            </Header>

            <p style={{ marginTop: "50px", fontWeight: "lighter" }}>
              Automatically source from your company <br /> database pr explore
              the existing job <br /> platforms for the best talent out there...
            </p>
            <a href="#">Know More</a>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Header as="h1" style={{ fontSize: "50px" }}>
              Source Widely,
            </Header>

            <p style={{ marginTop: "50px", fontWeight: "lighter" }}>
              Automatically source from your company <br /> database pr explore
              the existing job <br /> platforms for the best talent out there...
            </p>
            <a href="#">Know More</a>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    {/* <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "What a Company"
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              That is what they all say about us
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "I shouldn't have gone with their competitor."
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              <Image avatar src="/images/avatar/large/nan.jpg" />
              <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: "8em 0em" }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Breaking The Grid, Grabs Your Attention
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Instead of focusing on content creation and hard work, we have learned
          how to master the art of doing nothing by providing massive amounts of
          whitespace and generic content that can seem massive, monolithic and
          worth your attention.
        </p>
        <Button as="a" size="large">
          Read More
        </Button>

        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: "3em 0em", textTransform: "uppercase" }}
        >
          <a href="#">Case Studies</a>
        </Divider>

        <Header as="h3" style={{ fontSize: "2em" }}>
          Did We Tell You About Our Bananas?
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur
          filler content, but it's really true. It took years of gene splicing
          and combinatory DNA research, but our bananas can really dance.
        </p>
        <Button as="a" size="large">
          I'm Still Quite Interested
        </Button>
      </Container>
    </Segment>

    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item as="a">Sitemap</List.Item>
                <List.Item as="a">Contact Us</List.Item>
                <List.Item as="a">Religious Ceremonies</List.Item>
                <List.Item as="a">Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Services" />
              <List link inverted>
                <List.Item as="a">Banana Pre-Order</List.Item>
                <List.Item as="a">DNA FAQ</List.Item>
                <List.Item as="a">How To Access</List.Item>
                <List.Item as="a">Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could
                help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment> */}
  </ResponsiveContainer>
);

export default HomepageLayout;
