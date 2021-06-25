import React, { Component } from "react";
import axios from "axios";

import styles from "./Admin.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Patient from '../cards/Patient/Patient';
import { BiPlusMedical } from "react-icons/bi";
import { BiGroup } from "react-icons/bi";
import { BiHandicap } from "react-icons/bi";
import { BiNotepad } from "react-icons/bi";

class Admin extends Component {

  state={
    patients: []
  }

  componentDidMount() {

    axios
      .get("http://localhost:9000/patient/get-allpatients")
      .then((res) => {
        this.setState({patients: res.data.patients})
        console.log(this.state.patients);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {

    // this.state.patients.map((patient) => (
    //   console.log("function")
    // ))

    let patients = (
      <div>
        {this.state.patients.map((patient) => (
          <Patient
            key={patient._id}
            id={patient._id}
            dose={patient.dose}
            name={patient.name}
            gender={patient.gender}
            special={patient.special}
            otp={patient.otp}
          />
        ))}
      </div>
    );


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

        <div>
          {patients}
        </div>

        {/* <Patient
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
        /> */}

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
