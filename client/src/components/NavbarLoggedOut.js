import React from 'react'
import {Link} from 'react-router-dom'
class NavbarLoggedOut extends React.Component{


  render(){
    return   (<nav className="navbar navbar-expand-md navbar-light bg-light">
   
    <Link className="navbar-brand" to={'/'}> Instagram  </Link>
   

    
</nav>)
  }
}



export default NavbarLoggedOut