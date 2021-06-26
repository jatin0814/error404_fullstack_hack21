import React, { Component } from "react";
import axios from "axios";
import styles from "./Home.module.css";
import AddMember from "../../UI/Modal/Modal";
import Navbar from "../../Components/Navbar/Navbar";
import Navbarb from "../../Components/Navbar/Navbar2";
import Footer from "../../Components/Footer/Footer";
import Member from "../cards/User/User";
import { FaAngellist } from "react-icons/fa";
import { BiPlusMedical } from "react-icons/bi";
import { BiGroup } from "react-icons/bi";
import { BiHandicap } from "react-icons/bi";
import { BiNotepad } from "react-icons/bi";
import { FaUserCheck } from "react-icons/fa";
// import LightSpeed from 'react-reveal/LightSpeed';
import Bounce from "react-reveal/Bounce";
import Fade from "react-reveal/Fade";



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
        this.setState({modal: false})
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
        {/* <LightSpeed left> */}
        <div>
          <Navbar />
        </div>
        {/* </LightSpeed> */}

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

              <label for="male" className={styles.inputText}>
                male
              </label>
              <br />
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                className={styles.radioBtn}
                onClick={this.female}
              />
              <label for="female" className={styles.inputText}>
                female
              </label>
              <br />
              <input
                type="radio"
                id="other"
                name="gender"
                value="other"
                className={styles.radioBtn}
                onClick={this.other}
              />
              <label for="other" className={styles.inputText}>
                other
              </label>
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

              <br />
              <br />
              <input
                type="checkbox"
                id="special"
                name="special"
                value="special"
                onClick={this.special}
              />
              <label for="special"> Specially abled</label>
            </div>

            <div className={styles.submit} onClick={this.onAddMemberhandler}>
              Submit
            </div>
          </div>
        </AddMember>

        <div className={styles.parallax}>
          <Fade top>
            <div className={styles.tag}>
              Get your whole family vaccinated here{" "}
              <div className={styles.tag2}># at home!</div>
            </div>
          </Fade>
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

            <Fade left>
              <div>
                <div className={styles.infor}>
                  <div className={styles.reg} className={styles.informa}>
                    <BiNotepad className={styles.icon2} />
                    225
                    <div>Users</div>
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
            </Fade>
          </div>
        </div>
        {/*<Navbarb />*/}
        <div className={styles.mem}>
          <div className={styles.det}>Account Details</div>

          <div className={styles.memno}>
            <div className={styles.regno}>Registered Number :</div>
            <div className={styles.number}>*** *** 6845</div>
          </div>

          <div>
            <Member
              dose="1"
              name="Sidharth Saini"
              gender="male"
              special={false}
              otp="0000"
              vaccinated={false}
            />

            {members}
          </div>
        </div>
        <div className={styles.home_cont}>
          <div className={styles.members}>
            You can register 4 members with one mobile number
          </div>

          
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
