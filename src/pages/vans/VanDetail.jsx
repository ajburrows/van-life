import { Link, useParams, useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { getVans } from "../../api"

export default function VanDetail() {
    const [van, setVan] = useState({})
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const { id } = useParams()
    const location = useLocation()

    const params = useParams()
    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(resp => resp.json())
            .then(obj => setVan(obj.vans))
    }, [params.id])

    const searchFilter = `${location.state.search ? `?${location.state.search}` : ""}`
    return (
        <>
        {van
        ? (<>
            <Link  
                className="van-details-return-link"
                to={`..${searchFilter}`} 
                relative="path"
            >
                &larr; Back to {searchFilter ? searchFilter.split("=")[1] : "all"} vans
            </Link>
            <div className="van-details-container">
                <img src={van.imageUrl} />
                <div className="info-container">
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h1>{van.name}</h1>
                    <h3>${van.price}<span>/day</span></h3>
                    <p className="description-text">{van.description}</p>
                    <Link to="/rent-van">Rent this van</Link>
                </div>
            </div>
        </>)
        : <h2>Loading</h2>}
        </>
    )
}