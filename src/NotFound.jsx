import { Link } from "react-router-dom";


export default function NotFound() {
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <h1>Sorry, the page you were looking for was not found.</h1>
                <Link to="/">Return Home</Link>
            </div>
        </div>

    )
}