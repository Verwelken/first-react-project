import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { productContext } from "../../contexts/ProductContext"
import "./ProductDetails.css"

const ProductDetails = () => {
    const { getCurrentProduct, currentProduct:product } = useContext(productContext)

    const { id } = useParams()

    useEffect(() => {
        getCurrentProduct(id)
    }, [])

    return <div className="general">
        <form className="wpapper">
            <div className="images">
                <div className="img_main">
                    <img src={product.image ? product.image[0] : null} alt="" />
                </div>
                <div className="img_back">
                    <img src={product.image ? product.image[2] : null} alt="" />
                    <img src={product.image ? product.image[2] : null} alt="" />
                    <img src={product.image ? product.image[2] : null} alt="" />
                </div>
            </div>
        </form>
        <form className="description">
            <h1 className="title"> {product.title}</h1>
            <p>{product.description}</p>
            <p>Объём памяти: {product.memory}</p>
            <p>Автор: {product.author}</p>
            <p>Цена: {product.price} сом</p>
        </form>

    </div>



}
export default ProductDetails