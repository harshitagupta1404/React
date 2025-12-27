const RestaurantCard = (props) => {
    // console.log(props);
    const {resData:{info:resInfo}} = props;
    // console.log(resInfo.cuisine);
    const cuisines = resInfo.cuisine.map(cuisine => cuisine.name);
    // console.log(cuisines);
    // return(
    //     <div className="res-card">
    //         {/* <img className='res-logo' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/0ab539bb-c10f-495e-af40-3c0a2efd2cdc_11095.jpg"></img> */}
    //         <img className='res-logo' src={resInfo.image.urlWithParams}></img>
    //         <h3>{resInfo.name}</h3>
    //         <h4>{cuisines.join(', ')}</h4>
    //         <h4>{resInfo.rating.aggregate_rating}</h4>
    //         <h4>{resInfo.costText.text}</h4>
    //     </div>
    // )
// style={{width:'97%'}}
    // Tailwind CSS
    return(
        <div className="w-3xs p-1 m-5 hover:bg-gray-300">
            {/* <img className='res-logo' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/0ab539bb-c10f-495e-af40-3c0a2efd2cdc_11095.jpg"></img> */}
            <img className="w-97 rounded-xl" src={resInfo.image.urlWithParams}></img>
            <h3>{resInfo.name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{resInfo.rating.aggregate_rating}</h4>
            <h4>{resInfo.costText.text}</h4>
        </div>
    )
}

export const withPromotedLabel = (RestaurantCard) => {
    // return (
    //     (props) => {
    //         return (
    //             <div className="">
    //                 <label className="promoted">Promoted</label>
    //                 <RestaurantCard {...props}/>
    //             </div>
    //         )
    //     }
    // )

    // Tailwind CSS
    return (
        (props) => {
            return (
                <div className="">
                    <label className="absolute text-white bg-[rgb(22,22,22)] border border-[rgba(117, 109, 109, 0.192)]
                    p-[2px]">Promoted</label>
                    <RestaurantCard {...props}/>
                </div>
            )
        }
    )
}

export default RestaurantCard;