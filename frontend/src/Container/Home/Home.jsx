import React, { Component } from "react";
import axios from "axios";

import styles from "./Home.module.css";
import AddMember from "../../UI/Modal/Modal";
import Navbar from "../../Components/Navbar/Navbar";
import Navbarb from "../../Components/Navbar/Navbar2";
import Footer from "../../Components/Footer/Footer";
import Member from "../../Container/cards/User/User";
import { FaAngellist } from "react-icons/fa";
import { BiPlusMedical } from "react-icons/bi";
import { BiGroup } from "react-icons/bi";
import { BiHandicap } from "react-icons/bi";
import { BiNotepad } from "react-icons/bi";
import { FaUserCheck } from "react-icons/fa";

class Home extends Component {
  state = {
    modal: false,
    name: "",
    date: "",
    gender: "",
    address: "",
    current: false,
    members: [],
    lat: "",
    long: "",
    special: false,
  };

  componentDidMount() {

    var today = new Date();

    console.log(today);

    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({ lat: position.coords.latitude });
      this.setState({ long: position.coords.longitude });
    });

    const data = {
      phone: localStorage.getItem("phone"),
    };
    

    axios
      .post("http://localhost:9000/user/members", data)
      .then((res) => {
        this.setState({ members: res.data });
        console.log("fetched");
        console.log(this.state.members);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  modalSwitchhandler = () => {
    this.setState({ modal: !this.state.modal });
  };

  nameChangeHandler = (event) => {
    this.setState({ name: event.target.value });
    console.log(this.state.name);
  };

  dateChangeHandler = (event) => {
    this.setState({ date: event.target.value });
    console.log(this.state.date);
  };

  male = () => {
    this.setState({ gender: "male" });
    console.log(this.state.gender);
  };

  female = () => {
    this.setState({ gender: "female" });
    console.log(this.state.gender);
  };
  other = () => {
    this.setState({ gender: "other" });
    console.log(this.state.gender);
  };

  addressChangeHandler = (event) => {
    this.setState({ address: event.target.value });
    console.log(this.state.address);
  };

  currentLocation = () => {
    this.setState({ current: !this.state.current });
    console.log(this.state.current);
  };

  special = () => {
    this.setState({ special: !this.state.special });
    console.log(this.state.special);
  };

  onAddMemberhandler = () => {
    const data = {
      name: this.state.name,
      age: this.state.date,
      address: this.state.address,
      gender: this.state.gender,
      address: this.state.location,
      phone: localStorage.getItem("phone"),
      coordinate: [this.state.lat, this.state.long],
      special: this.state.special,
    };

    console.log(data);

    axios
      .post("http://localhost:9000/patient/add-patient", data)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  render() {
    let members = (
      <div>
        {this.state.members.map((member) => (
          <Member
            key={member._id}
            id={member._id}
            dose={member.dose}
            name={member.name}
            gender={member.gender}
            special={member.special}
            otp={member.otp}
            vaccinated={member.vaccinated}
            van={member.vanNumber}
          />
        ))}
      </div>
    );

    return (
      <div>
        <Navbar />

        <AddMember show={this.state.modal} switch={this.modalSwitchhandler}>
          <div className={styles.addMem}>
            <div className={styles.inst}>
              <div>
                Please fill the details{" "}
                <FaUserCheck className={styles.userCheck} />
                {/* <FaAngellist className={styles.icon1} /> */}
              </div>
            </div>

            <div className={styles.inputs}>
              <input
                className={styles.input}
                type="text"
                placeholder="Name"
                onChange={this.nameChangeHandler}
              ></input>

              <input
                type="number"
                name="age"
                placeholder="Age"
                min={18}
                max={45}
                className={styles.input}
                onChange={this.dateChangeHandler}
              />
              <br />

              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                className={styles.radioBtn}
                onClick={this.male}
              />
              <label for="male">male</label>
              <br />
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                className={styles.radioBtn}
                onClick={this.female}
              />
              <label for="female">female</label>
              <br />
              <input
                type="radio"
                id="other"
                name="gender"
                value="other"
                className={styles.radioBtn}
                onClick={this.other}
              />
              <label for="other">other</label>
              <br />

              <br />
              <input
                className={this.state.current ? styles.input : styles.none}
                placeholder="Address"
                onChange={this.addressChangeHandler}
              ></input>
              <br />

              <input
                type="checkbox"
                id="location"
                name="location"
                value="Bike"
                onClick={this.currentLocation}
                checked={!this.state.current}
              />
              <label for="location"> Use my current location</label>

              <input
                type="checkbox"
                id="special"
                name="special"
                value="special"
                onClick={this.special}
              />
              <label for="special">Specially abeled</label>
            </div>

            <div className={styles.submit} onClick={this.onAddMemberhandler}>
              Submit
            </div>
          </div>
        </AddMember>

        <div className={styles.parallax}>
          <div className={styles.tag}>
            Get your whole family vaccinated here{" "}
            <div className={styles.tag2}># at home!</div>
          </div>
          <div className={styles.btns}>
            <div
              className={styles.add_button2}
              onClick={this.modalSwitchhandler}
            >
              Add Member
            </div>
            <div
              className={styles.add_button3}
              onClick={this.modalSwitchhandler}
            >
              Help
              {/*<FiHelpCircle />*/}
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
        </div>
        {/*<Navbarb />*/}
        <div className={styles.mem}>
          <div className={styles.date}>12/12/12</div>
          <div className={styles.regno}>Registered Number</div>

          <div className={styles.date}>12/12/12</div>
          <div className={styles.regno}>Registered Number</div>

          <div>
            <Member
              dose="1"
              name="sidharth"
              gender="male"
              special={false}
              otp="0000"
              vaccinated={false}
            />

            {members}
          </div>

          <div className={styles.home_cont}>
            <div className={styles.members}>
              You can register 4 members with one mobile number
            </div>
            <div
              className={styles.add_button}
              onClick={this.modalSwitchhandler}
            >
              Add Member
            </div>

            <div className={styles.info}>
              One registration per person is sufficient. Please do not register
              with multiple mobile numbers or different Photo ID Proofs for same
              individual. Scheduling of Second dose should be done from the same
              account (same mobile number) from which the first dose has been
              taken, for generation of final certificate. Separate registration
              for second dose is not necessary. Please carry the registered
              mobile phone and the requisite documents, including appointment
              slip, the Photo ID card used for registration, Employment
              Certificate (HCW/FLW) etc., while visiting the vaccination center,
              for verification at the time of vaccination. Please check for
              additional eligibility conditions, if any, prescribed by the
              respective State/UT Government for vaccination at Government
              Vaccination Centers, for 18-44 age group, and carry the other
              prescribed documents (e.g. Comorbidity Certificate etc.) as
              suggested by respective State/UT (on their website). The slots
              availability is displayed in the search (on district, pincode or
              map) based on the schedule populated by the DIOs (for Government
              Vaccination Centers) and private hospitals for their vaccination
              centers. The vaccination schedule published by DIOs and private
              hospitals displays the list of vaccination centers with the
              following information The vaccine type. The age group (18-44/45+
              etc.). The number of slots available for dose 1 and dose 2.
              Whether the service is Free or Paid (Vaccination is free of cost
              at all the Government Vaccination Centers). Per dose price charged
              by a private hospital. If you are seeking 1st dose vaccination,
              the system will show you only the available slots for dose 1.
              Similarly, if you are due for 2nd dose, the system will show you
              the available slots for dose 2 after the minimum period from the
              date of 1st dose vaccination has elapsed. Once a session has been
              published by the DIO/ private hospital, the session now can not be
              cancelled. However, the session may be rescheduled. In case you
              have booked an appointment in any such vaccination session that is
              rescheduled for any reason, your appointment will also be
              automatically rescheduled accordingly. You will receive a
              confirmation SMS in this regard. On such rescheduling, you would
              still have the option of cancelling or further rescheduling such
              appointment.
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
