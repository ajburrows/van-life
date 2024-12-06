import { Link, Outlet, useParams, NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import { getVan } from "../../api"

export default function HostVanDetails() {
    const { id } = useParams()
    const [van, setVan] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    /*
    useEffect(() => {
        fetch(`/api/host/vans/${vanId.id}`)
            .then(resp => resp.json())
            .then(data => setVan(data.vans[0]))
    }, [])
    */

    useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVan(id)
                setVan(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [id])

    const navLinkStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    if (!van){
        return <h1>Loading...</h1>
    }

    return (
        <div className="hvd-main">
            <div className="hvd-container">
                <Link to=".." relative="path">&larr; Back to all vans</Link>
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
                        <NavLink end style={({ isActive }) => isActive ? navLinkStyle : null} to=".">Details</NavLink>
                        <NavLink style={({isActive}) => isActive ? navLinkStyle : null} to="pricing">Pricing</NavLink>
                        <NavLink style={({isActive}) => isActive ? navLinkStyle : null} to="photos">Photos</NavLink>
                    </nav>
                    <Outlet context={van}/>
                </div>
            </div>
        </div>
    )
}