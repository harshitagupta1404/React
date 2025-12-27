import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

  let [btnName,updateBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);
  // console.log(loggedInUser);
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

  // SUBSCRIBING TO THE STORE USING SELECTOR. Selector is a hook.
  const cartItems = useSelector((store) => {
    console.log(store.cart.items);
    return store.cart.items
  });


    // return (
    //   <div className="header">
    //     <div className="logo-container">
    //       <img
    //         className="logo"
    //         src="https://img.freepik.com/premium-vector/food-ordering-app-logo-with-points-fork-shapes-center_666184-195.jpg"
    //       ></img>
    //     </div>
    //     <div className="nav-items">
    //       <ul>
    //         <li>Online Status : {onlineStatus?"🟢":"🔴"}</li>
    //         <li><Link to="/">Home</Link></li>
    //         <li><Link to="/about">About</Link></li>
    //         <li><Link to="/contact">Contact Us</Link></li>
    //         <li><Link to="/cart">Cart {cartItems.length}</Link></li>
    //         <li><Link to="/grocery">Grocery</Link></li>
    //         <button className="login" onClick={()=>btnName === 'Login' ? updateBtnName("Logout") : updateBtnName("Login")}>{btnName}</button>
    //         <li>{loggedInUser}</li>
    //       </ul>
    //     </div>
    //   </div>
    // );

    // WITH TAILWIND CSS
    return (
      // if the size is greater than sm, then pink. If greater then lg, then green. Else yellow.
      <div className="flex justify-between bg-yellow-100 sm:bg-pink-100 lg:bg-green-100">
        <div className="logo-container">
          <img
            className="w-15"
            src="https://img.freepik.com/premium-vector/food-ordering-app-logo-with-points-fork-shapes-center_666184-195.jpg"
          ></img>
        </div>
        <div className="nav-items">
          <ul className="flex p-4 list-none">
            <li className="px-4">Online Status : {onlineStatus?"🟢":"🔴"}</li>
            <li className="px-4"><Link to="/">Home</Link></li>
            <li className="px-4"><Link to="/about">About</Link></li>
            <li className="px-4"><Link to="/contact">Contact Us</Link></li>
            <li className="px-4"><Link to="/cart">Cart {cartItems.length}</Link></li>
            <li className="px-4"><Link to="/grocery">Grocery</Link></li>
            <button className="px-4" onClick={()=>btnName === 'Login' ? updateBtnName("Logout") : updateBtnName("Login")}>{btnName}</button>
            <li className="px-4">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
}

export default Header;