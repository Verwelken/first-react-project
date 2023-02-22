import { useContext } from "react"
import { Link } from "react-router-dom"
import { productContext } from "../contexts/ProductContext"

const HomePage = () => {
    const { codify } = useContext(productContext)
    return (<div>
        {codify}
        < Link to="/category" >
            Переход на категорию
        </Link >
    </div>
    )
}
export default HomePage