import { Outlet } from "react-router-dom"
import HostLayout from "../../components/HostLayout"

export default function Dashboard(){

    return (
        <>
            <h1>Host Dashboard Here</h1>
            <Outlet />
        </>
    )
}