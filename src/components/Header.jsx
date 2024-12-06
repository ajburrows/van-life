import { Link, NavLink, useNavigate } from "react-router-dom"
import loginIconURL from "/src/assets/images/avatar-icon.png";

export default function Header() {
  const navigate = useNavigate()
  function fakeLogOut() {
      localStorage.removeItem("loggedin")
      navigate("/")
  }

  return(
    <header>
      <Link to="/" className='home-link'>#VANLIFE</Link>
      <nav>
        <NavLink className={({isActive}) => isActive ? "active-link" : ""} to="/about">About</NavLink>
        <NavLink className={({isActive}) => isActive ? "active-link" : ""} to="/vans">Vans</NavLink>
        <NavLink className={({isActive}) => isActive ? "active-link" : ""} to="/host">Host</NavLink>
        <Link to="login" className="login-link"><img src={loginIconURL} className="login-icon"/></Link>
        <button onClick={fakeLogOut}>X</button>
      </nav>
    </header>
  )
}