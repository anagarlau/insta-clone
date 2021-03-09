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
     
    return  (<nav className="navbar navbar-expand-md navbar-light navBg" style={{backgroundColor:'pink'}}>
   
    <Link className="navbar-brand" to={'/'}> Instagram  </Link>
   

    <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
        <div className="navbar-nav">
        <Link className="nav-item nav-link active"   to='/' onClick={() => this.handleLogout(this.props)} >Logout</Link>
        <Link className="nav-item nav-link" to={"/userprofile"}>{this.props.user.username}'s Profile</Link>
        <Link className="nav-item nav-link" to={"/creatpost"}> <img className='addButton' src='/img/add-button-pngrepo-com.png' alt='add'/></Link>
        </div>
       
    </div>
</nav>)   
  }
}



export default NavbarLoggedIn