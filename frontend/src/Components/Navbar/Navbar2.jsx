import React, { Component } from "react";

import styles from "./Navbar2.module.css";
import { NavLink } from "react-router-dom";

import Logo from "../../Images/logo.png";

class Navbar extends Component {
  render() {
    return (
      <div>
        <ul className={styles.main_nav}>
          <li>
            <NavLink
              className={styles.log}
              exact
              to="/"
              activeClassName={styles.activel}
            >
              <img src={Logo} className={styles.logo}></img>
              <div className={styles.name}>
                Mobi<span className={styles.vax}>Vax</span>
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
                to="/"
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
                to="/support"
                activeClassName={styles.active}
              >
                Support
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
              to="/auth"
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

export default Navbar;
