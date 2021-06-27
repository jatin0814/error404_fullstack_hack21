import React, { Component } from "react";
import axios from "axios";

import styles from "./User.module.css";
import { HiUserRemove } from "react-icons/hi";
import Spinner from '../../../UI/Spinner/Spinner'

class Patient extends Component {

  state={
    loading: false,
    lat: "",
    long: "",
  }

  componentDidMount() {

    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({ lat: position.coords.latitude });
      this.setState({ long: position.coords.longitude });
    });

    console.log(this.state.lat)
    console.log(this.state.long)

    
  }

  onDeleteHandler = (ev) => {
    this.setState({loading: true})
    // console.log(this.props.van)
    console.log(ev.target.id)
    console.log('reached')

    const data = {
      id: ev.target.id,
    };

    axios
    .post("https://mobivax-api.herokuapp.com/patient/delete-patient", data)
    .then((res) => {
      console.log(res);
      this.setState({loading: false})
      window.location.reload(false);
    })
    .then((err) => {
      console.log(err);
      this.setState({loading: false})
    });

    const data2 = {

    }


    axios
    .post("http://https://mobivax-api.herokuapp.com//patient/getLiveTime", data2)
    .then((res) => {
      console.log(res);
      // this.setState({loading: false})
      // window.location.reload(false);
    })
    .then((err) => {
      console.log(err);
      this.setState({loading: false})
    });
  }

  onScheduleHandler = (ev) => {
    this.setState({loading: true})
    console.log(this.props.van)
    console.log(ev.target.id)
    console.log('reached')

    const data = {
      vanNumber: this.props.van,
      patientId: ev.target.id
    }

    axios.post("https://mobivax-api.herokuapp.com/patient/schedulePatient", data)
    .then((res) => {
      this.setState({loading: false})
      console.log(res)
    })
    .then((err) => {
      this.setState({loading: false})
      console.log(err)
    })
  }

  render() {
    return (
      <div className={styles.box}>
        {this.state.loading ? <Spinner/> : null}
        <button className={styles.buttond1}>
          {this.props.vaccinated ? "Vaccinated" : "Not Vaccinated"}
        </button>
        <button className={styles.cross}>
          <div
            key={this.props.id}
            id={this.props.id}
            onClick={this.onDeleteHandler}
          >
            <HiUserRemove key={this.props.id} id={this.props.id}/>
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

          {this.props.vaccinated ? 
          <button className={styles.buttons2}>{this.props.vaccineName}</button> : null}
          
        </div>
        <div className={styles.flexp3}>
          <div className={styles.sch}>Dose number {this.props.vaccinated  ? 2 : 1}</div>
          {this.props.vaccinated ? <div className={styles.sch}>Vaccinate on {this.props.date}</div> : null}
          
          {this.props.sheduled ? 
          <div className={styles.vaccinated}  key={this.props.id} id={this.props.id} >Scheduled</div> :
          <button className={styles.buttons}  key={this.props.id} id={this.props.id} onClick={this.onScheduleHandler}>Schedule</button>}
          
        </div>
      </div>
    );
  }
}

export default Patient;
