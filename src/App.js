import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./landingpage/Header";
import Reviews from "./landingpage/Reviews";
import About from "./landingpage/About";
import Footer from "./landingpage/Footer";
import Content from "./Content";
import Dashboard from "./admin/Dashboard";
import Chart from "./admin/DashboardChart";
import Register from "./register/Register";
import NewPost from "./NewPost/NewPost";
import Category from "./NewPost/Testing";
import Profile from "./Profile/Profile";
import LoginRegister from "./Login/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Header/>}></Route>
          <Route path="register" element={<Register/>}></Route>
          <Route path="login" element={<LoginRegister/>}></Route>
          <Route path="single-view" element={""}></Route>
          <Route path="admin-dashboard" element={<Dashboard/>}></Route>
          <Route path="new-post" element={<NewPost/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
