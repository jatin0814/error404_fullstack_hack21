import React, { Component } from "react";

import styles from "./Admin.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Patient from "../Cards/Patient/Patient";
import { BiPlusMedical } from "react-icons/bi";
import { BiGroup } from "react-icons/bi";
import { BiHandicap } from "react-icons/bi";
import { BiNotepad } from "react-icons/bi";

class Admin extends Component {
  render() {
    return (
      <div className={styles.admincss}>
        <div className={styles.admincss1}>
          <div className={styles.tag}>
            Get your whole family vaccinated here{" "}
            <div className={styles.tag2}># at home!</div>
          </div>
          <div className={styles.btns}>
            <div
              className={styles.add_button2}
              onClick={this.modalSwitchhandler}
            >
              Start Process
            </div>
            <div
              className={styles.add_button3}
              onClick={this.modalSwitchhandler}
            >
              Support
              {/*<FiHelpCircle />*/}
            </div>
          </div>
          <div className={styles.infor}>
            <div className={styles.reg} className={styles.informa}>
              <BiNotepad className={styles.icon2} />
              225
              <div>Registrations</div>
            </div>
            <div className={styles.dose1} className={styles.informa}>
              <BiPlusMedical className={styles.icon2} />
              105
              <div>Doses Given</div>
            </div>
            <div className={styles.fam} className={styles.informa}>
              <BiGroup className={styles.icon2} />
              25
              <div>Families</div>
            </div>
            <div className={styles.spcateg} className={styles.informa}>
              <BiHandicap className={styles.icon2} />
              12
              <div>Special</div>
            </div>
          </div>
        </div>
        <Navbar admin={true} />

        <Patient
          name="sidharth saini"
          age="21"
          gender="male"
          aadhar="123456789"
        />

        <Patient
          name="sidharth saini"
          age="21"
          gender="male"
          aadhar="123456789"
        />

        <Patient
          name="sidharth saini"
          age="21"
          gender="male"
          aadhar="123456789"
        />

        <Patient
          name="sidharth saini"
          age="21"
          gender="male"
          aadhar="123456789"
        />
        <Footer />
      </div>
    );
  }
}

export default Admin;
