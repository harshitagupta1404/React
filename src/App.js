import React from "react"
import ReactDOM from 'react-dom/client'
import Header from "./components/Header" // or import Header from './components/Header.js'
import BodyComponent from "./components/Body"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
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


const AppLayout = () => {
    return (
        <div className='app'>
            <Header/>
            {/* Outlet gets replaced by the component with which the path matches */}
            <Outlet/>
        </div>
    )
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