import React, { Component } from "react";

import styles from "./Public.module.css";
import logo from "../../../Images/logo.png";


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


  render() {

    return (
      <div className={styles.back}>
        {this.props.error == "" ? null : (
          <div className={styles.error}>{this.props.error}</div>
        )}



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
          <div className={styles.welcome}>WELCOME</div>
          <div className={styles.text}>
            Consectetur exercitation duis consequat commodo excepteur ex
            adipisicing commodo non.
          </div>
          <form>
            <input
              type="text"
              className={`${styles.input} ${styles.namee}`}
              placeholder="+91 Enter your Mobile Number"
              onChange={this.onPhoneChange}
            ></input>
            <br />

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
              <div className={styles.feat_txt}>Convinient</div>
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

export default connect(Public);
