import React, { Component } from "react";
import axios from "axios";

import styles from "./User.module.css";
import { HiUserRemove } from "react-icons/hi";

class Patient extends Component {
  onDeleteHandler = (ev) => {
    console.log(ev.target.id);

    const data = {
      id: ev.target.id,
    };
    axios
      .post("http://localhost:9000/patient/delte-patient", data)
      .then((res) => {
        console.log(res);
      })
      .then((err) => {
        console.log(err);
      });
  };

  onScheduleHandler = (ev) => {
    console.log(this.props.van)
    console.log(ev.target.id)
    console.log('reached')

    const data = {
      vanNumber: this.props.van,
      patientId: ev.target.id
    }

    axios.post("http://localhost:9000/patient/schedulePatient", data)
    .then((res) => {
      console.log(res)
    })
    .then((err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className={styles.box}>
        <button className={styles.buttond1}>
          {this.props.vaccinated ? "Vaccinated" : "Not Vaccinated"}
        </button>
        <button className={styles.cross}>
          <div
            key={this.props.id}
            id={this.props.id}
            onClick={this.onDeleteHandler}
          >
            <HiUserRemove key={this.props.id} id={this.props.id} />
          </div>
        </button>
        <div className={styles.flexp}>
          <div className={styles.name}>{this.props.name}</div>
          <div className={styles.flex2}>
            {/*<div className={styles.age}>{this.props.age}</div> */}
            Sex:<div className={styles.gender}>{this.props.gender}</div>
          </div>
        </div>
        <div className={styles.flexp}>
          <div className={styles.flex2}>
            OTP: <div className={styles.otp}>{this.props.otp}</div>
          </div>
          <div className={styles.flex2}>
            Category:{" "}
            <div className={styles.sp}>
              {this.props.special ? "specially abled" : "none"}
            </div>
          </div>
        </div>
        <div className={styles.flexp4}>
          {/* plis ad these */}
          {/* date/time of vaccination */}
          <div>22 / 06 / 2021</div>
          {/* plis ad these */}

          <button className={styles.buttons2}>Covishield</button>
        </div>
        <div className={styles.flexp3}>
          <div className={styles.sch}>Dose {this.props.dose}</div>
          <button className={styles.buttons}  key={this.props.id} id={this.props.id} onClick={this.onScheduleHandler}>Schedule</button>
        </div>
      </div>
    );
  }
}

export default Patient;
