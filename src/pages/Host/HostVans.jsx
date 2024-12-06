import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getHostVans } from "../../api"

export default function HostVans() {
    const [vans, setVans] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch("/api/host/vans")
            .then(resp => resp.json())
            .then(data => setVans(data.vans))
    } ,[])


    const vansElements = vans.map((vanObj) => {
        return (
        <Link key={vanObj.id} style={{textDecoration: "none"}} to={vanObj.id}>
            <div className="host-van-card">
                    <img src={vanObj.imageUrl} />
                    <div>
                        <h3>{vanObj.name}</h3>
                        <p>${vanObj.price}/day</p>
                    </div>
            </div>
        </Link>
        
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