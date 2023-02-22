import { useContext, useEffect } from "react"
import { productContext } from "../../contexts/ProductContext"
import MemoryFilter from "../MemoryFilter/MemoryFilter"
import Pagination from "../Pagination/Pagination"
import ProductItem from "../ProductItem/ProductItem"
import SearchFilter from "../SearchFilter/SearchFilter"
import "./ProductList.css"
const ProductList = () => {
    const { products, getProducts } = useContext(productContext)
    useEffect(() => {
        getProducts()
    }, [])
    return (
        <div>
             <SearchFilter />
             <MemoryFilter />
            <ul>
                {
                    products.map(product => {
                        return (<ProductItem key={product.id} product={product} />)
                    })
                }
            </ul>
            <Pagination />
        </div>

    )
}
export default ProductList