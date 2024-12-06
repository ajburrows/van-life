import React from "react"
import { Outlet, Navigate, replace } from "react-router-dom"

export default function AuthRequired() {
    const isLoggedIn = localStorage.getItem("loggedin")

    if (!authenticated){
        return <Navigate to="/login" state={{message: "You must log in first"}} replace/>
    }
    return <Outlet />
} 