import { useState } from "react";

const Header = () => {

  let [btnName,updateBtnName] = useState("Login");

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
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <button className="login" onClick={()=>btnName === 'Login' ? updateBtnName("Logout") : updateBtnName("Login")}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
}

export default Header;