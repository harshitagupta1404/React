import {useState, useEffect} from 'react';

const useOnlineStatus = () => {
    console.log('inside useOnlineStatus');
    const[onlineStatus, updateOnlineStatus] = useState(true);

    useEffect(()=>{
        window.addEventListener("offline",()=>updateOnlineStatus(false));
        window.addEventListener("online",()=>updateOnlineStatus(true));
    },[])

    console.log(onlineStatus);

    return onlineStatus;
}
export default useOnlineStatus;