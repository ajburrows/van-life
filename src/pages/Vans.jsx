import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


export default function Vans() {
    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch("api/vans")
            .then(resp => resp.json())
            .then(data => {
                setVans(data.vans)
            })
    }, [])

    const vanElements = vans.map(vanObj => (
        <div key={vanObj.id} className="van-card">
            <Link to={`/vans/${vanObj.id}`}>
                <img src={vanObj.imageUrl} />
                <div className="van-info">
                    <h3>{vanObj.name}</h3>
                    <p>${vanObj.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${vanObj.type} selected`}>{vanObj.type}</i>
            </Link>
        </div>
    ))

    return (
        <div className="van-main">
            <div className="van-list-container">
                <h1>Explore our van options</h1>
                <div className="van-list">
                    {vanElements}
                </div>
            </div>
        </div>
    )

}