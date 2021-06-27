import React from 'react';

import styles from './Spinner.module.css';
import Backdrop from '../Backdrop/Backdrop';

const spinner = () => (
  <div>
  <Backdrop show={true}/>
  <div className={styles.spinner}></div>
</div>
);

export default spinner;