import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { loginUser } from "./api"

export default function Login() {
    const [loginFormData, setLoginFormData] = useState({ email: "", password: "" })
    const [status, setStatus] = useState("idle")
    const [error, setError] = useState(null)
    
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from || "/host"

    console.log(`from: ${from}`)
    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        loginUser(loginFormData)
            .then(data => {
                console.log(data)
                if (data?.type === "default"){
                    setError({message: "Account does not exist"})
                }
                else {
                    localStorage.setItem("loggedin", true)
                    setError(null)
                    navigate(from, { replace: true })
                }
            })
            .finally(() => {
                setStatus("idle")
            })
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <div className="login-container">
            {location.state ? <h3 className="login-first">{location.state.message}</h3> : null}
            <h1>Sign in to your account</h1>
            {error?.message ? <h3 className="login-first">{error.message}</h3> : null}
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button disabled={status === "submitting"}>
                    {status === "submitting" ? "Logging in..." : "Log in"}
                </button>
            </form>
        </div>
    )

}