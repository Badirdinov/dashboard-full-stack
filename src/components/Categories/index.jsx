import React from 'react';


// STYLES

import styles from '../../styles/Categories.module.css'
import {Link} from "react-router-dom";

const Categories = ({title, products = [], amount}) => {

  const categories = products.filter((_, index) => index < amount)

  return (
	  <section className={styles.section}>
		<h2>{title}</h2>
		<div className={styles.list}>
		  {categories.map((category) => (
			  <Link to={`/categories/${category.id}`} key={category.id} className={styles.item}>
				<div
					className={styles.image}
					style={{
					  backgroundImage: `url(${category.image})`
					}}
				/>
					<h3 className={styles.title}>{category.name}</h3>
			  </Link>
		  ))}
		</div>
	  </section>
  );
};

export default Categories;