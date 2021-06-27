import React, { Component } from "react";
import axios from "axios";

import styles from "./Patient.module.css";
import { HiUserRemove } from "react-icons/hi";
import Spinner from '../../../UI/Spinner/Spinner'

class Patient extends Component {
  state = {
    vaccineType: "",
    loading: false
  };

  onVaccinateHandler = (ev) => {
    this.setState({loading: true})
    console.log(ev.target.id);

    const data = {
      id: ev.target.id,
      vaccine: this.state.vaccineType,
    };

    axios
      .post("https://mobivax-api.herokuapp.com/patient/vaccinate", data)
      .then((res) => {
        console.log(res);
        this.setState({loading: false})
        window.location.reload(false);
      })
      .then((err) => {
        console.log(err);
        this.setState({loading: false})
        window.location.reload(false);
      });
  };

  onVaccineChangeHandler = (ev) => {
    this.setState({ vaccineType: ev.target.value });
    console.log(this.state.vaccineType);
  };

  render() {
    return (
      <div>
        {this.state.loading ? <Spinner/> : null}
        {this.props.vaccinated ? null : (
          <div className={styles.box}>
            <div>
              <div className={styles.flexclass}>
                <div className={styles.name}>{this.props.name}</div>
                <div className={styles.age}>{this.props.age}</div>
                <div className={styles.gender}>{this.props.gender}</div>
              </div>
              <div className={styles.flexclass}>
                <div className={styles.aadhar}>{this.props.aadhar}</div>
              </div>
              {/*<div className={styles.address}>Address</div> */}
              <input
                name="vaccine"
                type="radio"
                id="covaxine"
                value="covaxine"
                onClick={this.onVaccineChangeHandler}
              />
                <label for="covaxine">covaxine</label> {" "}
              <input
                name="vaccine"
                type="radio"
                id="covishield"
                value="covishield"
                onClick={this.onVaccineChangeHandler}
              />
                <label for="covishield">covishield</label>
            </div>

            <div className={styles.flexp}>
              <div className={styles.flex2}>
                Secret OTP: <div className={styles.otp}>5020</div>
              </div>
              <div className={styles.flex2}>
                Category:{" "}
                <div className={styles.sp}>
                  {this.props.special ? "specialy abled" : "none"}
                </div>
              </div>
            </div>

            <div className={styles.flexp3}>
              <div className={styles.sch}>Dose {this.props.dose}</div>
              <button
                className={styles.buttons}
                id={this.props.id}
                key={this.props.id}
                onClick={this.onVaccinateHandler}
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Patient;
