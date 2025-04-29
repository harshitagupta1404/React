import { useEffect, useState } from "react";
import { resList } from "../common/mockData";
import Shimmer from "./Shimmer"
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
    let [resInfo, setInfoName] = useState(null);
    useEffect(()=>{
        fetchData();
    },[])
    const {resId} = useParams();
    // console.log(resId);
    resInfo = resList.filter(restaurant => {
        // console.log(restaurant);
        // console.log(`...${restaurant.info.resId}...., ${restaurant.info.resId==resId}`);
        // restaurant.info.resId==resId?restaurant:'No restaurant found'
        if(restaurant.info.resId==resId) return restaurant;
    });
    // console.log(`resInfo:${JSON.stringify(resInfo)}`);
    // console.log(`resInfo length:${resInfo.length}`);
    const cuisines = resInfo?.[0]?.info?.cuisine?.map((cuisine,index) => {
        // console.log(index);
        return {[index]:cuisine.name}
    });
    console.log(cuisines);

    const fetchData = () => {
        // let  
        // console.log(resList);
        setInfoName(resList);
    }

    if(resInfo===null)
        return <Shimmer/>
    else if(resInfo.length===0){
        return (
            <div className="menu">
                <h3>No restaurant found</h3>
            </div>
        )
    }
    else{
        return (
            <div className="menu">
                <h3>{resInfo[0].info.name}</h3>
                <h3>{resInfo?.[0]?.info.rating.aggregate_rating}</h3>
                <h3>{resInfo?.[0]?.info.costText.text}</h3>
                <h3>{cuisines.length>0?'Cuisines':''}</h3>
                <ul>
                    {cuisines?.map(cuisine => {
                        const[key,value]=Object.entries(cuisine)[0];
                        // console.log(`${key}:${value}`);
                        return <li key={key}>{value}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default RestaurantMenu;