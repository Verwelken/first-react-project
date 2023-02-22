import { useContext, useState } from "react"
import { productContext } from "../contexts/ProductContext"

const LoginPage = () => {
    const { loginUser } = useContext(productContext)
    const [emailValue, setEmailValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")
    const handleClick = () => {
        const obj = {
            email: emailValue,
            password: passwordValue,
        }
        loginUser(obj)
    }

    return (
        <div>
            <input type="text" placeholder="Login" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} />
            <input value={passwordValue} type="password" placeholder="Password" onChange={(e) => setPasswordValue(e.target.value)} />
            <button onClick={handleClick}>Sign in</button>
        </div>
    )
}
export default LoginPage