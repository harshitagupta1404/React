import User from "./User";
import UserClass from './UserClass';

const About = () =>{
    return (
        <div>
            <h1>About</h1>
            <h2>This is Food page about page</h2>
            <User name={"Harshita Function"}/>
            <UserClass name={"Harshita Class"}/>
        </div>
    )
}

export default About;