import React from "react";
import styles from './sidebar.module.css'
import Darkmode from "../../reusable/darkmode/darkmode";
import Logout from '../../assets/logout.svg'
import ChangeLanguage from "../../reusable/changeLanguage/changeLanguage";
import Logo from '../../assets/logo1.svg'
import ProfileIcon from '../../assets/profileIcon2.svg'

function Sidebar() {
  return (
    <div className={styles.sidebar}>
        <div className={styles.logo}>
            <img src={Logo} />
        </div>
        <div className={styles.navbarItems}>
            <Darkmode/>
            <ChangeLanguage/>
            <img src={ProfileIcon} className={styles.profileButton}/>
            <img src={Logout} className={styles.logout} />
        </div>
    </div>
  );
}

export default Sidebar;
