import AppRoutes from "../Routes";
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar";

function App() {
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
