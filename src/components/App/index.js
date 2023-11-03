import AppRoutes from "../Routes";
import {useDispatch} from "react-redux";
import {useEffect} from "react";


import {getCategories} from "../../features/slice/categories";
import {getProducts} from "../../features/slice/products";


import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar";



function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategories())
    dispatch(getProducts())
  }, [dispatch])



  return (
    <div className="app">
      <Header/>
      <div className='container'>
        <Sidebar/>
        <AppRoutes/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
