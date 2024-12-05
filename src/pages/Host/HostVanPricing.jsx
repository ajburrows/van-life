import { useOutletContext } from "react-router-dom"

export default function HostVanPricing() {
    const van = useOutletContext()

    return (
        <div className="host-van-price-container">
            <p>${van.price}<span>/day</span></p>
        </div>
    )
}