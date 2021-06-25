import React, { Component } from "react";
import axios from "axios";

import styles from "./User.module.css";
import { HiUserRemove } from "react-icons/hi";

class Patient extends Component {

  onDeleteHandler = (ev) => {
    console.log(ev.target.id)

    const data = {
      id: ev.target.id
    }
    axios.post("http://localhost:9000/patient/delte-patient", data)
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

        {/* plis ad these */}
        <div>date/time of vaccination</div>
        <div>vaccine given</div>
        
        <button className={styles.buttond1}>{this.props.vaccinated ? "Vaccinated" : "Not Vaccinated"}</button>
        <button className={styles.cross}>
          <div key={this.props.id} id={this.props.id} onClick={this.onDeleteHandler}>
            <HiUserRemove key={this.props.id} id={this.props.id}/>
          </div>
         
        </button>
        <div className={styles.flexp}>
          <div className={styles.name}>{this.props.name}</div>
          <div className={styles.flex2}>
            <div className={styles.age}>{this.props.age}</div>
            <div className={styles.gender}>{this.props.gender}</div>
          </div>
        </div>
        <div className={styles.flexp}>
          <div className={styles.flex2}>
            Secret OTP: <div className={styles.otp}>{this.props.otp}</div>
          </div>
          <div className={styles.flex2}>
            Category: <div className={styles.sp}>{this.props.special ? "specially abled" : "none"}</div>
          </div>
        </div>
        
        <div className={styles.flexp3}>
          <div className={styles.sch}>Dose {this.props.dose}</div>
          <button className={styles.buttons}>Sechdule</button>
        </div>
      </div>
    );
  }
}

export default Patient;
