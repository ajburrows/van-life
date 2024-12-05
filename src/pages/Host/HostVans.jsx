import React from "react"
import { useEffect, useState } from "react"

export default function HostVans() {
    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch("/api/host/vans")
            .then(resp => resp.json())
            .then(data => setVans(data.vans))
    } ,[])


    const vansElements = vans.map((vanObj) => {
        return (
            <div className="host-van-card">
                <img src={vanObj.imageUrl} />
                <div>
                    <h3>{vanObj.name}</h3>
                    <p>${vanObj.price}/day</p>
                </div>
            </div>
    )})

    return (
        <div className="host-van-main">
            <div className="host-van-container">
                <h1>Your listed vans</h1>
                {vansElements}
            </div>
        </div>
    )
}