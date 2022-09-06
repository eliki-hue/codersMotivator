import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Header from './landingpage/Header';
import Reviews from './landingpage/Reviews';
import About from './landingpage/About';
import Footer from './landingpage/Footer';
import Content from './Content';
import Dashboard from './admin/Dashboard';
import Chart from './admin/DashboardChart';

function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <Header/>
      <Reviews/>
      <About/>
      <Footer/> */}
      {/* <Content/> */}
      <Dashboard/>
      {/* <Chart/> */}
     
    </div>
  );
}

export default App;
