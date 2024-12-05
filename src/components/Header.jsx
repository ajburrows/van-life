import { Link, NavLink } from "react-router-dom"

export default function Header() {
    return(
      <header>
        <Link to="/" className='home-link'>#VANLIFE</Link>
        <nav>
          <NavLink className={({isActive}) => isActive ? "active-link" : ""} to="/about">About</NavLink>
          <NavLink className={({isActive}) => isActive ? "active-link" : ""} to="/vans">Vans</NavLink>
          <NavLink className={({isActive}) => isActive ? "active-link" : ""} to="/host">Host</NavLink>
        </nav>
      </header>
    )
}