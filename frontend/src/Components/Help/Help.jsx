import React from "react";

import styles from "./Help.module.css";
import Navbar from  '../Navbar/Navbar';
import Footer from '../Footer/Footer'

const Help = () => (
  <div className={styles.Help}>

    <Navbar/>

   <div className={styles.info}>
            One registration per person is sufficient. Please do not register
            with multiple mobile numbers or different Photo ID Proofs for same
            individual. <br />
            <br />
            Scheduling of Second dose should be done from the same account (same
            mobile number) from which the first dose has been taken, for
            generation of final certificate. Separate registration for second
            dose is not necessary.
            <br /> <br />
            Please check for additional eligibility conditions, if any,
            prescribed by the respective State/UT Government for vaccination at
            Government Vaccination Centers.
            <br />
            <br /> The vaccination schedule published by DIOs and private
            hospitals displays the list of vaccination centers with the
            following information The vaccine type. The age group (18-44/45+
            etc.).
            <br />
            <br /> The number of slots available for dose 1 and dose 2. Whether
            the service is Free or Paid (Vaccination is free of cost at all the
            Government Vaccination Centers). <br />
            <br />
            Similarly, if you are due for 2nd dose, the system will show you the
            available slots for dose 2 after the minimum period from the date of
            1st dose vaccination has elapsed. Once a session has been published
            by the DIO/ private hospital, the session now can not be
            cancelled.However, the session may be rescheduled. <br />
            <br />
            You will receive a confirmation SMS in this regard. On such
            rescheduling, you would still have the option of cancelling or
            further rescheduling such appointment.
          </div>

    <Footer/>
  </div>
);

export default Help;
