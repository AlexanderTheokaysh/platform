import React from "react";
import styles from './sidebar.module.css'
import Darkmode from "../../reusable/darkmode/darkmode";
import Logout from '../../assets/logout.svg'
import ChangeLanguage from "../../reusable/changeLanguage/changeLanguage";
import Logo from '../../assets/WebTrader.svg'

function Sidebar() {
  return (
    <div className={styles.sidebar}>
        <div className={styles.logo}>
            <img src={Logo} />
        </div>
        <div className={styles.navbarItems}>
            <Darkmode/>
            <ChangeLanguage/>
            <button className={styles.profileButton}>My profile</button>
            <img src={Logout} />
        </div>
    </div>
  );
}

export default Sidebar;