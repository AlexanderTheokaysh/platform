import React from "react";
import { Link } from "react-router-dom";
import styles from './choose.module.css'
import Profile from '../../assets/profile.png'
import Trading from '../../assets/trading.png'

function Choose() {
  return (
    <div className={styles.choose}>
      <Link to='/profile' className={styles.button}>
        <h1>My Profile</h1>
        <img src={Profile}/>
      </Link>
      <tr></tr>
      <Link to='/webtrader' className={styles.button}>
        <h1>Web Trader</h1>
        <img src={Trading} />
      </Link>
    </div>
  );
}

export default Choose;
