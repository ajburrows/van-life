import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"

export default function HostVanDetails() {
    const vanId = useParams()
    const [van, setVan] = useState({})

    useEffect(() => {
        fetch(`/api/host/vans/${vanId.id}`)
            .then(resp => resp.json())
            .then(data => setVan(data.vans[0]))
    }, [])

    const navLinkStyle = (isActive) => {
        return (
            isActive ? {textDecoration: "underline"} : {textDecoration: "none"}
        )
    }

    if (!van){
        return <h1>Loading...</h1>
    }

    return (
        <div className="hvd-main">
            <div className="hvd-container">
                <Link to="/host/vans/">&larr; Back to all vans</Link>
                <div className="hvd-content">
                    <header className="hvd-header">
                        <img src={van.imageUrl} />
                        <div className="hvd-header-info">
                            <i className={`van-type ${van.type} selected`}>{van.type}</i>
                            <h1>{van.name}</h1>
                            <h3>${van.price}<span>/day</span></h3>
                        </div>
                    </header>
                    <nav>
                        <Link style={navLinkStyle()} to="">Details</Link>
                        <Link style={navLinkStyle()} to="pricing">Pricing</Link>
                        <Link style={navLinkStyle()} to="photos">Photos</Link>
                    </nav>
                </div>
            </div>
        </div>
    )
}