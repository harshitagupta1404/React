import User from "./User";
import UserClass from './UserClass';
import React from 'react';


class About extends React.Component{
    constructor(){
        super();
        console.log('About constructor');
        this.state = {
            name:'Harshita',
        }
    }
    
    async componentDidMount(){
        console.log('About componentDidMount');
        this.setState({name:'Monal'});
        console.log(this.state.name);
    }

    componentDidUpdate(){
        console.log('About componentDidUpdate');
    }

    componentWillUnmount(){
        console.log('About componentWillUnmount');
    }
    
    render(){
        console.log('About render');
        return (
            <div>
                <h1>About</h1>
                <h2>This is Food page about page</h2>
                <h3>{this.state.name}</h3>
                <User name={"Harshita Function"}/>
                <UserClass name={"Harshita Class"}/>
                <UserClass name={"Monal Class"}/>
                <UserClass name={"Saksham Class"}/>
                <UserClass name={"Nidhi Class"}/>
                <UserClass name={"Sanjay Class"}/>
            </div>
        )
    }
}

export default About;