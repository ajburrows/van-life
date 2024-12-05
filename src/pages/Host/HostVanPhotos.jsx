import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos() {
    const van = useOutletContext()

    return (
        <div className="host-van-pictures-container">
            <img src={van.imageUrl}></img>
        </div>
    )
}