import { useOutletContext } from "react-router-dom"

export default function HostVanDescription() {
    const van = useOutletContext()
    console.log(van)
    return (
        <div className="host-van-info">
            <p>Name: <span>{van.name}</span></p>
            <p>Category: <span>{van.type}</span></p>
            <p>Description: <span>{van.description}</span></p>
            <p>Visibility: <span>Public</span></p>
        </div>
    )
}