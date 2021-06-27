import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";


import styles from "./Admin.module.css";
import Modal from "../../../UI/Modal/Modal";
import * as actions from "../../../Store/actions/auth";
// import Spinner from "../../../UI/Spinner/Spinner"

class Admin extends Component {
  state = {
    username: "",
    password: "",
    showpass: false,
    loading: false
  };

  onUserChange = (event) => {
    this.setState({ username: event.target.value });
    console.log(this.state.username)
  };

  onPassChange = (event) => {
    this.setState({ password: event.target.value });
    console.log(this.state.password)
  };

  onSubmitHandler = () => {
    this.props.onAuth(
      this.state.username,
      this.state.password
    );
  };

  onSwitchEyeHandler = () => {
    this.setState({ showpass: !this.state.showpass });
  };

  render() {

    const redirect = this.props.isAuth ? <Redirect to="/admin" /> : null;

    return (

      <div>

    {redirect}

        <Modal show={this.props.show} switch={this.props.switch}>

          <div className={styles.creds}>
            default creds
           
          </div>

          <div className={styles.creds_cont}>
          <div className={styles.creds}>
             username: admin1
            password: Password1
          </div>
          <div className={styles.creds}>
             username: admin2
            password: Password2
          </div>
          <div className={styles.creds}>
             username: admin3
            password: Password3
          </div>
          </div>

         

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
                onChange={this.onUserChange}
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
            <div className={styles.absclass}>
              <button className={styles.button} onClick={this.onSubmitHandler}>
                Sign in
              </button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return{
        isAuth: state.adminAuth,
        error: state.error
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (userName, password) => dispatch(actions.adminAuth(userName, password)),
  
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
