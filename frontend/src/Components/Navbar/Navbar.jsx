import React, { Component } from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../../Images/logo.png";
import SideDrawer from "../SideDrawer/SideDrawer";
import { connect } from "react-redux";
import * as actions from "../../Store/actions/auth";

class Navbar extends Component {
  state = {
    drawer: false,
  };

  onDrawerChange = () => {
    this.setState({ drawer: !this.state.drawer });
    console.log(this.state.drawer);
  };

  render() {
    return (
      <div>
        <SideDrawer />
        <ul className={styles.main_nav}>
          <li>
            <NavLink
              className={styles.log}
              exact
              to={this.props.admin ? "/admin" : "/home"}
              activeClassName={styles.activel}
            >
              <img src={Logo} className={styles.logo}></img>
              <div className={styles.name}>
                mobi<span className={styles.vax}>Vax</span>
              </div>
            </NavLink>
          </li>

          <li className={styles.link}>
            {this.props.admin ? (
              <NavLink
                className={styles.tag}
                exact
                to="/admin"
                activeClassName={styles.active}
              >
                Patients
              </NavLink>
            ) : (
              <NavLink
                className={styles.tag}
                exact
                to="/home"
                activeClassName={styles.active}
              >
                Home
              </NavLink>
            )}
          </li>

          <li className={styles.link}>
            {this.props.admin ? (
              <NavLink
                className={styles.tag}
                exact
                to="/directions"
                activeClassName={styles.active}
              >
                Directions
              </NavLink>
            ) : (
              <NavLink
                className={styles.tag}
                exact
                to="/help"
                activeClassName={styles.active}
              >
                Help
              </NavLink>
            )}
          </li>

          <li className={styles.link}>
            {this.props.admin ? (
              <NavLink
                className={styles.tag}
                exact
                to="/chat"
                activeClassName={styles.active}
              >
                Chat
              </NavLink>
            ) : (
              <NavLink
                className={styles.tag}
                exact
                to="/chat"
                activeClassName={styles.active}
              >
                Chat
              </NavLink>
            )}
          </li>

          <li className={`${styles.link} ${styles.push}`}>
            <NavLink
              className={styles.tag}
              exact
              to="/"
              activeClassName={styles.active}
            >
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};

export default connect(null, mapDispatchToProps)(Navbar);
