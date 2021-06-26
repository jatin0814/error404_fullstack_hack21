import React from "react";
import styles from "./SideDrawer.module.css";
import {CgMenuRound} from "react-icons/cg";
import Logo from "../../Images/logo.png";
import { NavLink } from "react-router-dom";


const SideDrawer = (props) => {

    return (
       
          <div className={styles.drawer} onClick={props.closed}>
            <CgMenuRound className={styles.hamburger} size='40px' color='white' onClick={ () => console.log("Clicked on it!")}   />

            <img src={Logo} className={styles.logo}></img>
              <div className={styles.name}>
                mobi<span className={styles.vax}>Vax</span>
              </div>
          </div>      
       
    );
  };

export default SideDrawer;