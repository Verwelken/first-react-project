import { useContext, useState } from "react"
import { productContext } from "../contexts/ProductContext"

const RegisterPage = () => {

    const { registerUser } = useContext(productContext)
    const [emailValue, setEmailValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")

    const handleClick = () => {
        const obj = {
            email: emailValue,
            password: passwordValue,
        }
        registerUser(obj)
        
    }


    return (
        <div>
            <input value={emailValue} type="text" placeholder="Email" onChange={(e) => setEmailValue(e.target.value)} />
            <input value={passwordValue} type="password" placeholder="Password" onChange={(e) => setPasswordValue(e.target.value)} />
            <button onClick={handleClick}>Sign Up</button>
        </div>

    )
}
export default RegisterPage