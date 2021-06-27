import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import styles from "./Public.module.css";
import logo from "../../../Images/logo.png";
import Admin from "../Admin/Admin";
import Verify from "../../../UI/Modal/Modal";
import * as actions from "../../../Store/actions/auth";

class Public extends Component {
  state = {
    phone: null,
    admin: false,
    otp: "",
  };

  onPhoneChange = (event) => {
    this.setState({ phone: event.target.value });
  };

  onSwitchLoginHandler = () => {
    this.setState({ admin: !this.state.admin });
  };

  onSubmitHandler = () => {
    this.props.onAuth(this.state.phone, true);
  };

  otpChangeHandler = (event) => {
    this.setState({ otp: event.target.value });
  };

  onVerifyHandler = () => {
    this.props.onVerify(localStorage.getItem("phone"), this.state.otp);
  };

  render() {
    const redirect = this.props.isAuth ? <Redirect to="/home" /> : null;

    return (
      <div className={styles.back}>
        {this.props.error == "" ? null : (
          <div className={styles.error}>{this.props.error}</div>
        )}

        {redirect}

        <Admin show={this.state.admin} switch={this.onSwitchLoginHandler} />

        <Verify show={this.props.verify}>
          <div className={styles.verify}>
            <div className={styles.header}>
              <div className={styles.env}>
                <i className="fa fa-envelope"></i>
              </div>
            </div>

            <div className={styles.otp_head}>OTP verification</div>
            <div className={styles.sent}>An OTP has been sent to </div>
            <div className={styles.no}>{localStorage.getItem("phone")}</div>

            <input
              className={styles.otp_input}
              onChange={this.otpChangeHandler}
              type="Password"
              placeholder="Enter OTP"
            ></input>
            <div
              className={styles.verify_button}
              onClick={this.onVerifyHandler}
            >
              Verify
            </div>
          </div>
        </Verify>

        {/* {spinner} */}

        {/* {this.props.isAuth ?  <Redirect to="/user" /> : null} */}

        {/* <Login switch={this.props.switch} show={this.props.modal_show}/>  */}

        <div className={styles.nav}>
          <img alt="logo" className={styles.logo} src={logo} />
          <div className={styles.name}>
            <span className={styles.mobi}>mobi</span>Vax
          </div>
          <div className={styles.admin} onClick={this.onSwitchLoginHandler}>
            Login as Admin
          </div>
        </div>

        <div className={styles.signup}>
          <div className={styles.welcome}>Register / SignIn</div>
          <div className={styles.text}>
            An OTP will be sent to your mobile number for verification
          </div>
          <form>
            <input
              type="text"
              className={`${styles.input} ${styles.namee}`}
              placeholder="+91 Enter your Mobile Number"
              onChange={this.onPhoneChange}
            ></input>
            <br />
            {/* <input type="email" className={`${styles.input} ${styles.email}`} placeholder="Email" onChange={this.onEmailChange}></input><br/> */}
            {/* <input type={this.state.showpass ? "text" : "password"} className={`${styles.input} ${styles.pass}`} placeholder="Password" onChange={this.onPassChange}></input> */}
            <br />
          </form>

          <button className={styles.button} onClick={this.onSubmitHandler}>
            Send OTP
          </button>
          <div className={styles.button2} onClick={this.onSwitchLoginHandler}>
            Login as Admin
          </div>
        </div>

        <div className={styles.feat_cont}>
          <div className={styles.feature1}>
            <div className={styles.cont1}>
              <div className={styles.icon}>
                <i className="fa fa-lock"></i>
              </div>
              <div className={styles.feat_txt}>Secure</div>
            </div>
          </div>

          <div className={styles.feature2}>
            <div className={styles.cont2}>
              <div className={styles.icon}>
                <i className="fa fa-home"></i>
              </div>
              <div className={styles.feat_txt}>Convenient</div>
            </div>
          </div>

          <div className={styles.feature3}>
            <div className={styles.cont3}>
              <div className={styles.icon}>
                <i className="fa fa-plus"></i>
              </div>
              <div className={styles.feat_txt}>Safe</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    verify: state.verify,
    isAuth: state.auth,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (no, staff) => dispatch(actions.auth(no, staff)),
    onVerify: (no, otp) => dispatch(actions.verify(no, otp)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Public);
