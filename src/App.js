import React from "react"
import ReactDOM from 'react-dom/client'
import Header from "./components/Header" // or import Header from './components/Header.js'
import BodyComponent from "./components/Body"
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
            <BodyComponent/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);