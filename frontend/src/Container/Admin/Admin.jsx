import React, { Component } from "react";
import axios from "axios";
import date from 'date-and-time';

import styles from "./Admin.module.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Patient from "../cards/Patient/Patient";
import { BiPlusMedical } from "react-icons/bi";
import { FaShuttleVan } from "react-icons/fa";
import { BiHandicap } from "react-icons/bi";
import { BiNotepad } from "react-icons/bi";
import Spinner from '../../UI/Spinner/Spinner'

class Admin extends Component {
  state = {
    patients: [],
    loading: false
  };

  componentDidMount() {

    var today = new Date();

    console.log(date.format(today, 'YYYY/MM/DD'))

    const data = {
    "date" : date.format(today, 'YYYY/MM/DD')
  }

  this.setState({loading: true})

    axios.post("https://mobivax-api.herokuapp.com/patient/patientOnDate" ,data)
      .then((res) => {
        this.setState({ patients: res.data.patients });
        console.log(this.date.patients);
        this.setState({loading: false})
      })
      .catch((e) => {
        console.log(e);
        this.setState({loading: false})
      });
  }

  render() {


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
            vaccinated={patient.vaccinated}
          />
        ))}
      </div>
    );

    return (
      <div className={styles.admincss}>

      {this.state.loading ? <Spinner/> : null}

        <div className={styles.admincss1}>
          <div className={styles.tag}>
            Vaccinating the Nation!{" "}
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
              <div>Register</div>
            </div>
            <div className={styles.dose1} className={styles.informa}>
              <BiPlusMedical className={styles.icon2} />
              105
              <div>Doses</div>
            </div>
            <div className={styles.fam} className={styles.informa}>
              <FaShuttleVan className={styles.icon2} />
              25
              <div>Mobi-Vans</div>
            </div>
            <div className={styles.spcateg} className={styles.informa}>
              <BiHandicap className={styles.icon2} />
              12
              <div>Special</div>
            </div>
          </div>
        </div>
        <Navbar admin={true} />
        <div className={styles.mem}>
          <div className={styles.det}>Vaccination Details</div>
          <div className={styles.memno}>
            <div className={styles.regno}>Vehicle Number: </div>
            <div className={styles.number}>UP32 CT 1563</div>
            <div>{patients}</div>
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
        </div>

        <Footer />
      </div>
    );
  }
}

export default Admin;
