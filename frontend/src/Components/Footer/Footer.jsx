import React from "react";

import styles from "./Footer.module.css";
import { AiFillGitlab } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.flex}>
      <div className={styles.fitems}>
        <ul className={styles.fitemli}>
          <li>
            <a href="https://www.cowin.gov.in/home">Register on Co-Win</a>
          </li>
          <li>
            <a href="https://dashboard.cowin.gov.in/">Co-Win Stats</a>
          </li>

          <li>
            <a href="https://prod-cdn.preprod.co-vin.in/assets/pdf/Dos_and_Donts_for_Citizens.pdf">
              Do's and Dont's
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.fitems}>
        <ul className={styles.fitemli}>
          <li>
            <a href="https://prod-cdn.preprod.co-vin.in/assets/pdf/Dos_and_Donts_for_Citizens.pdf">
              Home
            </a>
          </li>
          <li>
            <a href="https://prod-cdn.preprod.co-vin.in/assets/pdf/Dos_and_Donts_for_Citizens.pdf">
              Support
            </a>
          </li>
          <li>
            <a href="https://prod-cdn.preprod.co-vin.in/assets/pdf/Dos_and_Donts_for_Citizens.pdf">
              LogOut
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.fitems}>
        <ul className={styles.fitemli}>
          <li>
            <a href="https://www.mockplus.com/blog/post/bootstrap-4-footer-template">
              How to register
            </a>
          </li>
          <li>
            <a href="https://prod-cdn.preprod.co-vin.in/assets/pdf/Dos_and_Donts_for_Citizens.pdf">
              Why should I get Vaccinated
            </a>
          </li>
          <li>
            <a href="cowin.gov.in/faq">FAQs</a>
          </li>
        </ul>
      </div>
    </div>
    <div className={styles.fitemsm}>
      Reach Us:
      <ul className={styles.fitemli}>
        <li>
          <a href="https://prod-cdn.preprod.co-vin.in/assets/pdf/Dos_and_Donts_for_Citizens.pdf">
            <AiFillGitlab />
          </a>
        </li>

        <li>
          <a href="https://prod-cdn.preprod.co-vin.in/assets/pdf/Dos_and_Donts_for_Citizens.pdf">
            <AiFillInstagram />
          </a>
        </li>
        <li>
          <a href="https://prod-cdn.preprod.co-vin.in/assets/pdf/Dos_and_Donts_for_Citizens.pdf">
            <AiFillMail />
          </a>
        </li>
        <li>
          <a href="https://prod-cdn.preprod.co-vin.in/assets/pdf/Dos_and_Donts_for_Citizens.pdf">
            <AiFillLinkedin />
          </a>
        </li>
      </ul>
    </div>
    <div className={styles.last}>@ ErrOr 4O4</div>
    <div className={styles.last2}>MobiVax ©2021</div>
  </div>
);

export default Footer;
