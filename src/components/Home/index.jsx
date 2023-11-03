import React, {useEffect} from 'react';
import Poster from "../Poster";
import Products from "../Products";
import {useDispatch, useSelector} from "react-redux";
import Categories from "../Categories";
import Banner from "../Banner";
import {filterByPrice} from "../../features/slice/products";

const Home = () => {
  const dispatch = useDispatch()
  const { products: {dates, filtered}, categories } = useSelector((state) => state)

  useEffect(() => {
	if(!dates.length) return;
	  dispatch(filterByPrice(100))
  },[dispatch, dates.length])


  return (
	  <>
		<Poster/>
		<Products products={dates} amount={5} title='Trending'/>
		<Categories products={categories.data} amount={5} title='Worth seeing'/>
		<Banner/>
		<Products products={filtered} amount={5} title='Less than 100$'/>
	  </>
  );
};

export default Home;