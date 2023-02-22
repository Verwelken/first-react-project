import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Header = () => {
    const [isAuth, setIsAuth] = useState(false)
    const handleClick = () => {
        localStorage.removeItem("token")
        if (!"token") setIsAuth(true)
    }
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) setIsAuth(true)
    }, [])
    return (
        isAuth ? (
            <div>

                <Link to="/register">Sign Up</Link>
                <Link to="/login">Sign in</Link>
            </div>) :
            (<div onClick={handleClick}>Log out</div>)
    )
}
export default Header