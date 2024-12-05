import { Link, NavLink, Routes, Outlet  } from "react-router-dom"
import Dashboard from "../pages/Host/Dashboard"

export default function HostLayout() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <>
            <nav className="host-nav">
                <NavLink end style={({ isActive }) => isActive ? activeStyles : null} to=".">Dashboard</NavLink>
                <NavLink style={({ isActive }) => isActive ? activeStyles : null} to="income">Income</NavLink>
                <NavLink style={({ isActive }) => isActive ? activeStyles : null} to="reviews">Reviews</NavLink>
                <NavLink style={({ isActive }) => isActive ? activeStyles : null} to="vans">Vans</NavLink>
            </nav>
            <Outlet />
        </>
    )
}