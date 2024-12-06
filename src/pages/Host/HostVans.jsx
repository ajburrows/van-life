import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getHostVans } from "../../api"

export default function HostVans() {
    const [vans, setVans] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    /*
    useEffect(() => {
        fetch("/api/host/vans")
            .then(resp => resp.json())
            .then(data => setVans(data.vans))
    } ,[])
    */

    useEffect(() => {
        async function loadVans() {
            setLoading(true)
            try {
                const data = await getHostVans()
                setVans(data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        loadVans()
    }, [])

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

    
    if (loading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>
    }

    return (
        <div className="host-van-main">
            <div className="host-van-container">
                <h1>Your listed vans</h1>
                {vansElements}
            </div>
        </div>
    )
}