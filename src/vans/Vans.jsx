import { useState, useEffect } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { getVans } from "../api"


export default function Vans() {
    const [vans, setVans] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const typeFilter = searchParams.get("type")

    useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getVans()
                setVans(data)
            } catch(err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        
        loadVans()
    }, [])

    const filteredVans = typeFilter
        ? vans.filter(van => van.type === typeFilter)
        : vans


    const vanElements = filteredVans
        ?filteredVans.map(vanObj => (
            <div key={vanObj.id} className="van-card">
                <Link to={vanObj.id} state={{ search: searchParams.toString() }}>
                    <img src={vanObj.imageUrl} />
                    <div className="van-info">
                        <h3>{vanObj.name}</h3>
                        <p>${vanObj.price}<span>/day</span></p>
                    </div>
                    <i className={`van-type ${vanObj.type} selected`}>{vanObj.type}</i>
                </Link>
            </div>
        ))
        : null

    function getSelectedClassname(type) {
        if (typeFilter == null || typeFilter.toLocaleLowerCase() !== type){
            return ""
        }
        return " selected"
    }

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }
    return (
        <div className="van-main">
            <div className="van-list-container">
                <h1>Explore our van options</h1>
                    <div className="filter-container">
                        <button onClick={() => setSearchParams({type: "simple"})} className={`van-type simple${getSelectedClassname("simple")}`} to="?type=simple">Simple</button>
                        <button onClick={() => setSearchParams({type: "rugged"})} className={`van-type rugged${getSelectedClassname("rugged")}`} to="?type=rugged">Rugged</button>
                        <button onClick={() => setSearchParams({type: "luxury"})} className={`van-type luxury${getSelectedClassname("luxury")}`} to="?type=luxury">Luxury</button>
                        {typeFilter !== null
                            ? <button onClick={() => setSearchParams({})} className="van-type clear-filters" to=".">Clear filter</button>
                            : null
                        }
                    </div>
                <div className="van-list">
                    {vanElements}
                </div>
            </div>
        </div>
    )

}