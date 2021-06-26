import React, { Component } from "react";
import axios from "axios";

import styles from "./Patient.module.css";
import { HiUserRemove } from "react-icons/hi";
class Patient extends Component {

  state = {
    vaccineType : ""
  }

  onVaccinateHandler = (ev) => {
    console.log(ev.target.id)

    const data = {
      id: ev.target.id,
      vaccine: this.state.vaccineType
    }

    axios.post("http://localhost:9000/patient/vaccinate", data)
    .then((res) => {
      console.log(res)
    })
    .then((err) => {
      console.log(err)
    })
  }

  onVaccineChangeHandler = (ev) => {
    this.setState({vaccineType: ev.target.value})
    console.log(this.state.vaccineType)
  }


  render() {



    return (
      <div>
      {this.props.vaccinated ? null :

        <div className={styles.box}>
        <div>
          <div className={styles.name}>{this.props.name}</div>
          <div className={styles.age}>{this.props.age}</div>
          <div className={styles.gender}>{this.props.gender}</div>
          <div className={styles.aadhar}>{this.props.aadhar}</div>
          <div className={styles.address}>Address</div>
          <input name="vaccine" type="radio" id="covaxine" value="covaxine" onClick={this.onVaccineChangeHandler}/> {" "}
          <label for="covaxine">covaxine</label>
            <input name="vaccine" type="radio" id="covishield" value="covishield" onClick={this.onVaccineChangeHandler}/> {" "}
          <label for="covishield">covishield</label>
         
        </div>
        <button className={styles.buttond1}>Not Vaccinated</button>
       
       
        <div className={styles.flexp}>
          <div className={styles.flex2}>
            Secret OTP: <div className={styles.otp}>5020</div>
          </div>
          <div className={styles.flex2}>
            Category: <div className={styles.sp}>{this.props.special? "specialy abled" : "none"}</div>
          </div>
        </div>

        <div className={styles.flexp3}>
          <div className={styles.sch}>Dose {this.props.dose}</div>
          <button className={styles.buttons} id={this.props.id} key={this.props.id} onClick={this.onVaccinateHandler}>Done</button>
        </div>
      </div>
      
      }
      </div>
     
      
    );
  }
}

export default Patient;
