import RestaurantCard from "./RestaurantCard";
import { resList } from "../common/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const BodyComponent = () => {
    // Below is array destructuring
    let [listOfRestaurants, setTopRestaurants] = useState([]);
    useEffect(()=>{
        // fetchData();
        console.log('useEffect called');
        setTopRestaurants(resList);
    },[]);

    const fetchData = async() => {
        const data = await fetch("https://www.zomato.com/webroutes/search/home");
        const json = await data.json();
        console.log(json);
    }

    // Conditional Rendering
    return listOfRestaurants.length===0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <button className='filter-btn' onClick={()=>{
                    console.log(listOfRestaurants);
                    const topRestaurants = listOfRestaurants.filter(topRes => topRes.info.rating.aggregate_rating>4)
                    console.log(topRestaurants);
                    setTopRestaurants(topRestaurants);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map(restaurant => <RestaurantCard key={restaurant.info.resId} resData={restaurant}/>)}
                {/* <RestaurantCard resData = {resList[1]}/> */}
            </div>
        </div>
    )
}

export default BodyComponent;