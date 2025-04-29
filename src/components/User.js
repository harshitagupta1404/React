import { useState } from "react";

const User = ({name}) => {
    const [count] = useState(0);
    const [count2] = useState(2);
    return(
        <div className="user-card">
            <h2>{name}</h2>
            <h3>Location : Panchkula</h3>
            <h4>Git ID : harshitagupta1404</h4>
            <h5>Count - {count}</h5>
            <h5>Count2 - {count2}</h5>
        </div>
    )
}

export default User;