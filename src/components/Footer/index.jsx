import React from 'react';


import styles from '../../styles/Footer.module.css'
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/routes";
import Logo from "../../images/logo.svg";

const Footer = () => {
  return (
	  <section className={styles.footer}>
		<div className={styles.logo}>
		  <Link to={ROUTES.HOME}>
			<img src={Logo} alt="Logo"/>
		  </Link>
		</div>
		<div className={styles.rights}>
		  Developed by {""}
		  <a href="/" target="_blank" rel="noreferrer">
			Badirdinov
		  </a>
		</div>
		<div className={styles.socials}>
		  <a href="/" target="_blank" rel="noreferrer">
			<svg className={styles["icon-fav"]}>
			  <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
			</svg>
		  </a>
		  <a href="/" target="_blank" rel="noreferrer">
			<svg className={styles["icon-fav"]}>
			  <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
			</svg>
		  </a>
		  <a href="/" target="_blank" rel="noreferrer">
			<svg className={styles["icon-fav"]}>
			  <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
			</svg>
		  </a>
		</div>
	  </section>
  );
};

export default Footer;