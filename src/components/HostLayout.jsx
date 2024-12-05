import { Link, Outlet  } from "react-router-dom"
import Dashboard from "../pages/Host/Dashboard"

export default function HostLayout() {

    return (
        <>
            <nav className="host-nav">
                <Link to="host">Dashboard</Link>
                <Link to="income">Income</Link>
                <Link to="reviews">Reviews</Link>
            </nav>
            <Outlet />
        </>
    )
}