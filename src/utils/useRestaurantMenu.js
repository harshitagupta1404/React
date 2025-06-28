import { resList } from "../common/mockData";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  let [resInfo, setInfoName] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  resInfo = resList.filter((restaurant) => {
    // restaurant.info.resId==resId?restaurant:'No restaurant found'
    if (restaurant.info.resId == resId) return restaurant;
  });

  const fetchData = () => {
    setInfoName(resList);
  };
  return resInfo;
};

export default useRestaurantMenu;
