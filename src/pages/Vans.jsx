import { useState, useEffect } from "react"
import { Link, useSearchParams } from "react-router-dom"


export default function Vans() {
    const [vans, setVans] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    const typeFilter = searchParams.get("type")

    useEffect(() => {
        fetch("api/vans")
            .then(resp => resp.json())
            .then(data => {
                setVans(data.vans)
            })
    }, [])

    function filterVans(vans){
        if (typeFilter !== null){
            let tmp = vans.filter(vanObj => vanObj.type.toLowerCase() === typeFilter.toLowerCase() ? vanObj : null)
            return tmp 
        }
        return vans
    }
    const filteredVans = filterVans(vans)

    const vanElements = filteredVans.map(vanObj => (
        <div key={vanObj.id} className="van-card">
            <Link to={`${vanObj.id}`}>
                <img src={vanObj.imageUrl} />
                <div className="van-info">
                    <h3>{vanObj.name}</h3>
                    <p>${vanObj.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${vanObj.type} selected`}>{vanObj.type}</i>
            </Link>
        </div>
    ))

    function getSelectedClassname(type) {
        if (typeFilter == null || typeFilter.toLocaleLowerCase() !== type){
            return ""
        }
        return " selected"
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