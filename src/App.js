import React, {lazy, Suspense, useEffect, useState} from "react"
import ReactDOM from 'react-dom/client'
import Header from "./components/Header" // or import Header from './components/Header.js'
import BodyComponent from "./components/Body"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
import UserContext from "./utils/UserContext"

// import Grocery from "./components/Grocery"
/*
Header
    -Logo
    -Nav items
Body
    -Search
    -RestaurantContainer
        -RestaurantCard
            -Image
            -Name of restaurant, rating
Footer
    -Copyright
    -Links
    -Address
    -Contact
*/

const Grocery = lazy(()=>{
    import ("./components/Grocery");
})


const AppLayout = () => {
    const [userName, setUserName] = useState();
    // overriding the default context value
    useEffect(() => {
      // Make an API call and send username and password
      const data = {
        name: "Harshita Gupta",
      };
      setUserName(data.name);
    }, []);


    return (
      <UserContext.Provider value = {{loggedInUser:userName}}>
        <div className="app">
          <Header />
          {/* Outlet gets replaced by the component with which the path matches */}
          <Outlet />
        </div>
      </UserContext.Provider>
    );
}

// it takes a list of paths
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:'/',
                element: <BodyComponent/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback = {<h1>Loading.....</h1>}><Grocery/></Suspense>
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<AppLayout/>);
root.render(<RouterProvider router={appRouter}/>)