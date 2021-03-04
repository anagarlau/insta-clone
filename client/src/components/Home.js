import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {

  render() {
    const loggedIn = this.props;
    if(loggedIn.user){
      return (<div> All posts </div>)
    }else{
      return (      

        <div>
          <Link to={"/signup"}>Signup</Link>
          <Link to={"/login"}>Login</Link>
        </div>
      );
    }
    
  }
}

export default Home;
