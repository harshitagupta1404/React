import Shimmer from "./Shimmer"
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const RestaurantMenu = () => {
    
    const {resId} = useParams();
    resInfo = useRestaurantMenu(resId);
    const cuisines = resInfo?.[0]?.info?.cuisine?.map((cuisine,index) => {
        return {[index]:cuisine.name}
    });

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
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
                        return <li key={key}>{value}   <button onClick={() => handleAddItem(cuisine)}>Add to Cart</button></li>
                    })}
                </ul>
            </div>
        )
    }
}

export default RestaurantMenu;