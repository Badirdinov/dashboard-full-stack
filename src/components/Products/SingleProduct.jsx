import {useNavigate, useParams} from "react-router-dom";
import {useGetProductQuery} from "../../features/api/apiSlice";
import {useEffect} from "react";
import {ROUTES} from "../../utils/routes";
import Product from "./Product";
import Products from "./index";
import {useDispatch, useSelector} from "react-redux";
import {getRelatedProducts} from "../../features/slice/products";

const SingleProduct = () => {
  const dispatch = useDispatch()
  const { id } = useParams();
  const navigate = useNavigate()

  const { dates, related } = useSelector(({ products }) => products)

  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });


  useEffect(() => {
	if(!dates || !dates.length) return;
	dispatch(getRelatedProducts(data?.category?.id))
  }, [data, dates, dispatch, data?.category?.id])

  useEffect(() => {
	if(!isSuccess && !isFetching && !isFetching) {
	  navigate(ROUTES.HOME)
	}
  },[isLoading, isFetching, isSuccess, navigate])


  return !data ? (
	<section className='preloader'>Loading...</section>
  ) : (
	  <>
		<Product {...data}/>
		<Products products={related} amount={5} title='Trending'/>
	  </>
  );
};

export default SingleProduct;