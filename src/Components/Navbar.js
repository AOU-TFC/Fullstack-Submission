import React, {useState,useEffect} from 'react'
import "Styles/Navbar.css"
import { Link , useLocation} from 'react-router-dom'
export default function Navbar() {
  const [admin , setAdmin] = useState(false);
  const location = useLocation();
  useEffect(()=>{
    if(location.pathname === '/secret'){
      setAdmin(true);
    }else{
      setAdmin(false);
    }
  },[location]);
  return (
    <React.Fragment>
      <div className={admin ? 'fnav-container':'navbar-container'}>
        <Link className='nav-element' to='/secret/react-tasks'>React</Link>
        <hr/>
        <Link className='nav-element' to='/secret/express-tasks'>Express</Link>
      </div>
    </React.Fragment>
  )
}
