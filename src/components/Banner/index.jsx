import React from 'react';


// STYLES
import styles from '../../styles/Home.module.css'


// IMAGES
import bannerImage from '../../images/banner.png'
const Banner = () => {
  return (
	  <section className={styles.banner}>
		<div className={styles.left}>
		  <p className={styles.content}>
			NEW YEAR
			<span>SALE</span>
		  </p>
		  <button className={styles.more}>
			See More
		  </button>
		</div>
		<div
			className={styles.right}
			style={{
			  backgroundImage: `url(${bannerImage})`
			}}
		>
		  <p className={styles.discount}>
			save up to <span>50%</span>
		  </p>
		</div>
	  </section>
  );
};

export default Banner;