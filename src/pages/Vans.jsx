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

    const van_cards = vans.map(vanObj => (
        <div key={vanObj.id} className="van-card">
            <img className="van-image" src={vanObj.imageUrl} />
            <div className="van-info">
                <h3>{vanObj.name}</h3>
                <p>${vanObj.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${vanObj.type} selected`}>{vanObj.type}</i>
        </div>
    ))




    

    return (
        <>
            <h1>Vans page goes here</h1>
            {van_cards}
        </>
    )

}