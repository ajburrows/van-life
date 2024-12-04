import { useState, useEffect } from "react"


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
            <img src={vanObj.imageUrl} />
            <div className="van-info">
                <h3>{vanObj.name}</h3>
                <p>${vanObj.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${vanObj.type} selected`}>{vanObj.type}</i>
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