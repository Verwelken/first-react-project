import { useContext, useEffect } from "react"
import { productContext } from "../../contexts/ProductContext"
import "./Pagination.css"

const Pagination = () => {
    const { limit, totalCount, getPagination, page, setPage } = useContext(productContext)
    useEffect(() => {
        getPagination(page)
    }, [page])
    const pageLength = Math.ceil(totalCount / limit)

    return pageLength && [...Array(pageLength).keys()].map((el) => (
        <button
            onClick={() => setPage(el + 1)}
            key={el}
            className={page === el + 1 ? "active" : ""}
        >
            {el + 1}</button>
    ))
}

export default Pagination