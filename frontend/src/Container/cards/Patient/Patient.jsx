import React, { Component } from "react";

import styles from "./Patient.module.css";
import { HiUserRemove } from "react-icons/hi";
class Patient extends Component {
  render() {
    return (
      <div className={styles.box}>
        <div>
          <div className={styles.name}>{this.props.name}</div>
          <div className={styles.age}>{this.props.age}</div>
          <div className={styles.gender}>{this.props.gender}</div>
          <div className={styles.aadhar}>{this.props.aadhar}</div>
          <div className={styles.address}>Address</div>
          <input type="radio" id="covaxine" value="covaxine" /> {" "}
          <label for="covaxine">covaxine</label>
            <input type="radio" id="covishield" value="covishield" /> {" "}
          <label for="covishield">covishield</label>
          <div>Done</div>
        </div>
        <button className={styles.buttond1}>Not Vaccinated</button>
        <button className={styles.cross}>
          <HiUserRemove />
        </button>
        <div className={styles.flexp}>
          <div className={styles.name}>Sidharth saini</div>
          <div className={styles.flex2}>
            <div className={styles.age}>21</div>
            <div className={styles.gender}>male</div>
          </div>
        </div>
        <div className={styles.flexp}>
          <div className={styles.flex2}>
            Secret OTP: <div className={styles.otp}>5020</div>
          </div>
          <div className={styles.flex2}>
            Category: <div className={styles.sp}>none</div>
          </div>
        </div>

        <div className={styles.flexp3}>
          <div className={styles.sch}>Dose 1</div>
          <button className={styles.buttons}>Sechdule</button>
        </div>
      </div>
    );
  }
}

export default Patient;
