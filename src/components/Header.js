import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

  let [btnName,updateBtnName] = useState("Login");

  // if no dependency array => useEffect is called on every render
  // if dependency array is empty = [] => useEffect is called on initial render (just once)
  // if dependency array is some value Eg - [btnName] => called everytime btnName is updated
  useEffect(()=>{
    console.log('Header useEffect called');

    return () => {
      // This will be called when component unmounts - Equivalent to componentWillUnmount
      console.log('useEffect return');
    }
  },[btnName])

    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src="https://img.freepik.com/premium-vector/food-ordering-app-logo-with-points-fork-shapes-center_666184-195.jpg"
          ></img>
        </div>
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <button className="login" onClick={()=>btnName === 'Login' ? updateBtnName("Logout") : updateBtnName("Login")}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
}

export default Header;