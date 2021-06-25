import React, { Component } from "react";
import { connect } from "react-redux";
// import { connect } from 'react-redux';

import styles from "./Admin.module.css";
import Modal from "../../../UI/Modal/Modal";
import * as actions from "../../../Store/actions/auth";
// import * as actions from '../../../store/actions/auth'
// import Spinner from "../../../UI/Spinner/Spinner"

class Admin extends Component {
  state = {
    user: "",
    password: "",
    showpass: false,
  };

  onUserChange = (event) => {
    this.setState({ user: event.target.value });
  };

  onPassChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmitHandler = () => {
    this.props.onAuth(
      this.state.name,
      this.state.email,
      this.state.password,
      false
    );
  };

  onSwitchEyeHandler = () => {
    this.setState({ showpass: !this.state.showpass });
  };

  render() {
    return (
      <div>
        <Modal show={this.props.show} switch={this.props.switch}>
          <div className={styles.cont}>
            <div className={styles.header}>
              <div className={styles.doc}>
                <i className="fa fa-user-md"></i>
              </div>
            </div>

            <div className={styles.text}>Login as Admin</div>

            <div className={styles.input}>
              <div className={styles.icon}>
                <i className="fa fa-user-circle"></i>
              </div>
              <input
                type="text"
                className={styles.txt}
                placeholder="username"
                onChange={this.onEmailChange}
              ></input>
            </div>
            <br></br>
            <div className={styles.input}>
              <div className={styles.icon}>
                <i className="fa fa-key"></i>
              </div>
              <input
                type={this.state.showpass ? "text" : "password"}
                className={styles.txt}
                placeholder="password"
                onChange={this.onPassChange}
              ></input>
            </div>
            <div className={styles.pass}>
              {!this.state.showpass ? (
                <div className={styles.eye} onClick={this.onSwitchEyeHandler}>
                  <i className="fa fa-eye"></i>
                </div>
              ) : (
                <div className={styles.eye} onClick={this.onSwitchEyeHandler}>
                  <i className="fa fa-eye-slash"></i>
                </div>
              )}
            </div>

            <br></br>
            <button className={styles.button} onClick={this.onSubmitHandler}>
              Sign in
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}




export default Admin;
