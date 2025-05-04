import React from 'react';

class UserClass extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props.name+' constructor');
    console.log(props);

    // All state variables
    this.state = {
      count:0,
      count2:2
    }
  }

  componentDidMount(){
    console.log(this.props.name+' did mount')
  }
    render(){
      console.log(this.props.name+'render');
        return (
          <div className="user-card">
            <h2>{this.props.name}</h2>
            <h3>Location : Panchkula</h3>
            <h4>Git ID : harshitagupta1404</h4>
            <h5>{this.state.count}</h5><button onClick={()=>{
              // this.state.count++;  WRONG WAY
              this.setState({
                count:this.state.count+1,  // count:this.state.count++ doesn't work
                count2:this.state.count2+2
              })
            }}>Click Me</button>
            <h5>{this.state.count2}</h5>
          </div>
        );
    }
}

export default UserClass;