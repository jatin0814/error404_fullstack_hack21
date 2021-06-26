import React, { Component } from "react";
import styles from "./Sidedrawer.module.css";
import { NavLink } from "react-router-dom";
import Logo from "../../Images/logo.png";
import {CgMenuRound} from "react-icons/cg";


class Sidedrawer extends Component {

  state = {
    drawer: false
  }

  onDrawerChange = () => {
    this.setState({drawer : !this.state.drawer})
    console.log(this.state.drawer)
  }
  
  render() {
    return (
      <div>      
       sidedrawer
      </div>
    );
  }
}

export default Sidedrawer;
