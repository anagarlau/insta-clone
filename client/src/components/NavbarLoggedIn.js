import React from 'react'
import {Link} from 'react-router-dom'
import {logout}  from '../services/auth-service.js'

class NavbarLoggedIn extends React.Component{
    constructor(props){
      super(props)
      this.handleLogout=this.handleLogout.bind(this)
    }

  
  handleLogout(){
    logout().then(()=>{
      // console.log(this.props)
    this.props.setUser(null)
  })
  }

  render(){
    return ( <nav className="navbar  mb-1">
    <div className="container">
    <Link className="navbar-brand" to='/'> Instagram  </Link>
    </div>
     
      <ul className="navbar-nav"> 
      <li>
              <Link to='/' onClick={() => this.handleLogout(this.props)} >Logout</Link>
      </li>
      <li className="nav-item"> <a href="$"> Profile </a> </li>
      <li className="nav-item"> <a href="$"> Create a Post </a> </li>

      </ul>

   
  </nav>)
  }
}



export default NavbarLoggedIn