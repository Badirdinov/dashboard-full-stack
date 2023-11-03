import React from 'react';


import styles from '../../styles/Sidebar.module.css'
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Sidebar = () => {

  const { data } = useSelector(({ categories }) => categories)


  return (
	  <section className={styles.sidebar}>
		<div className={styles.title}>CATEGORIES</div>
		  <nav>
			<ul className={styles.menu}>
			  {data.map((item) => (
				  <li key={item.id}>
					<NavLink
						to={`/categories${item.id}`}
						className={({isActive}) => `${styles.link} ${isActive ? styles.active : ''}`}
					>
					  {item.name}
					</NavLink>
				  </li>
			  ))}

			</ul>
		  </nav>
		<div className={styles.footer}>
		  <a href="/help" className={styles.link}>Help</a>
		  <a
			  href="/terms"
			  className={styles.link}
			  style={{
				textDecoration: 'underline'
			  }}
		  >
			terms &amp; Terms
		  </a>
		</div>
	  </section>
  );
};

export default Sidebar;