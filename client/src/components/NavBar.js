import React from "react";
import NavbarLoggedOut from "./NavbarLoggedOut";
import NavbarLoggedIn from "./NavbarLoggedIn";
// import {Link} from 'react-router-dom'

function NavBar(props) {
  
  const loggedIn = props;
 
  if (loggedIn.user) {
    return <NavbarLoggedIn user={props.user}setUser={props.setUser}/>;
  } else {
 
    return <NavbarLoggedOut />;
  }
}

// class NavBar extends React.Component{
//   render(){
//     const loggedIn = this.props
//     if(loggedIn.user){
//       return <NavbarLoggedIn />
//     }else{
//       return <NavbarLogedOut />
//     }
//   }
// }

export default NavBar;
