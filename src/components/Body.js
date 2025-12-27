import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { resList } from "../common/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from 'react-router-dom'
import useOnlineStatus from "../utils/useOnlineStatus";

const BodyComponent = () => {
    // Below is array destructuring
    let [listOfRestaurants, setListOfRestaurants] = useState([]);
    let [searchText, updateSearchText] = useState('');
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    useEffect(()=>{
        // fetchData();
        console.log('Body useEffect called');
        setListOfRestaurants(resList);
        setFilteredRestaurants(resList);
    },[]);

    const fetchData = async() => {
        const data = await fetch("https://www.zomato.com/webroutes/search/home");
        const json = await data.json();
        console.log(json);
    }

    const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

    if(!useOnlineStatus()){
        console.log('no internet');
        return (
            <h1>Please check your internet connection!</h1>
        )
    }
    // Conditional Rendering
    // TAILWIND CSS
    return listOfRestaurants.length===0 ? <Shimmer/> : (
        <div className="body">
            <div className="flex p-4">
                <div className="mx-7">
                    <input type="text" className="border border-black" value={searchText} onChange = {(e) => {
                        updateSearchText(e.target.value);
                    }}/>
                    <button className="bg-green-100 px-4 py-1 mx-4 cursor-pointer" onClick={() => {
                        console.log(`searchText = ${searchText}`);
                        const filteredRestaurants = listOfRestaurants.filter((res)=>{
                            // console.log(res.info.name);
                            console.log(res.info.name);
                            console.log(res.info.name.includes(searchText));
                            return res.info.name.toLowerCase().includes(searchText.toLowerCase())?res:undefined;
                            
                        })
                        console.log(filteredRestaurants);
                        setFilteredRestaurants(filteredRestaurants);
                    }}>Search</button>
                </div>
                <button className="bg-green-100 px-4 py-1 mx-4 cursor-pointer" onClick={()=>{
                    console.log(listOfRestaurants);
                    const topRestaurants = listOfRestaurants.filter(topRes => topRes.info.rating.aggregate_rating>4)
                    console.log(topRestaurants);
                    setFilteredRestaurants(topRestaurants);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurants.map(restaurant => (
                     <Link key={restaurant.info.resId} to={"/restaurant/"+restaurant.info.resId}>
                        {restaurant.isPromoted ? <PromotedRestaurantCard resData={restaurant}/> : <RestaurantCard resData={restaurant}/>}
                    </Link>)
                )}
                {/* <RestaurantCard resData = {resList[1]}/> */}
            </div>
        </div>
    )

    // return listOfRestaurants.length===0 ? <Shimmer/> : (
    //     <div className="body">
    //         <div className="filter">
    //             <div className="search">
    //                 <input type="text" className="search-box" value={searchText} onChange = {(e) => {
    //                     updateSearchText(e.target.value);
    //                 }}/>
    //                 <button onClick={() => {
    //                     console.log(`searchText = ${searchText}`);
    //                     const filteredRestaurants = listOfRestaurants.filter((res)=>{
    //                         // console.log(res.info.name);
    //                         console.log(res.info.name);
    //                         console.log(res.info.name.includes(searchText));
    //                         return res.info.name.toLowerCase().includes(searchText.toLowerCase())?res:undefined;
                            
    //                     })
    //                     console.log(filteredRestaurants);
    //                     setFilteredRestaurants(filteredRestaurants);
    //                 }}>Search</button>
    //             </div>
    //             <button className='filter-btn' onClick={()=>{
    //                 console.log(listOfRestaurants);
    //                 const topRestaurants = listOfRestaurants.filter(topRes => topRes.info.rating.aggregate_rating>4)
    //                 console.log(topRestaurants);
    //                 setFilteredRestaurants(topRestaurants);
    //             }}>Top Rated Restaurants</button>
    //         </div>
    //         <div className="res-container">
    //             {filteredRestaurants.map(restaurant => (
    //                  <Link key={restaurant.info.resId} to={"/restaurant/"+restaurant.info.resId}>
    //                     {restaurant.isPromoted ? <PromotedRestaurantCard resData={restaurant}/> : <RestaurantCard resData={restaurant}/>}
    //                 </Link>)
    //             )}
    //             {/* <RestaurantCard resData = {resList[1]}/> */}
    //         </div>
    //     </div>
    // )
}

export default BodyComponent;