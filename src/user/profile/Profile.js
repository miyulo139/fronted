import React, { Component } from "react";
//import "./Profile.css";

import { useLocation, Route, Switch } from "react-router-dom";

import AdminNavbar from "../../components/Navbars/AdminNavbar.js";
import Footer from "../../components/Footer/Footer.js";
import Sidebar from "../../components/Sidebar/Sidebar.js";
import routes from "../../routes.js";
import sidebarImage from "../../assets/img/sidebar-3.jpg";


function Profile() {
  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState("black");
  const [hasImage, setHasImage] = React.useState(true);
  const location = useLocation();
  const mainPanel = React.useRef(null);
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/profile") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
  }, [location]);
  return (
    <>
      <div className="wrapper">
        <Sidebar color={color} image={hasImage ? image : ""} routes={routes} />
        <div className="main-panel" ref={mainPanel}>
          <AdminNavbar />
          <div className="content">
            <Switch>{getRoutes(routes)}</Switch>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Profile;



/*class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      image: sidebarImage,
      color: "black",
      hasImage: true,
    };
  }

  async componentDidMount() {
    await this.loadCurrentlyLoggedInUserDetails();
  }

  async loadCurrentlyLoggedInUserDetails() {
    try {
      this.setState({
        loading: true
      });

      this.setState({
        loading: false
      });
    } catch (error) {
      this.setState({
        loading: false
      });
    }
  }

  location = useLocation();
  mainPanel = React.useRef(null);

  getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={(props) => <prop.component {...props} />}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  render() {
    return (
      <>
        <div className="wrapper">
          <Sidebar color={color} image={hasImage ? image : ""} routes={routes} />
          <div className="main-panel" ref={mainPanel}>
            <AdminNavbar />
            <div className="content">
              <Switch>{getRoutes(routes)}</Switch>
            </div>
            <Footer />
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
*/