import { useContext, useEffect, useState } from "react"
import { productContext } from "../../contexts/ProductContext"
import history from "../../history/history"

const MemoryFilter = () => {

    const getMemoryValue = () => {
        const search = new URLSearchParams(history.location.search)
        return search.get("memory")
    }

    const [memoryValue, setMemoryValue] = useState(getMemoryValue())
    const { memoryFilter } = useContext(productContext)
    useEffect(() => {
        memoryFilter(memoryValue)
    }, [memoryValue])

    return (
        <div>
            <input defaultChecked={memoryValue === "64"} type="radio" name="memory" onClick={() => setMemoryValue("64")} /> 64 Гб
            <input defaultChecked={memoryValue === "128"} type="radio" name="memory" onClick={() => setMemoryValue("128")} /> 128 Гб
            <input defaultChecked={memoryValue === "512"} type="radio" name="memory" onClick={() => setMemoryValue("512")} /> 512 Гб
            <input defaultChecked={memoryValue === "1024"} type="radio" name="memory" onClick={() => setMemoryValue("1024")} /> 1024 Гб
            <input defaultChecked={memoryValue === "0"} type="radio" name="memory" onClick={() => setMemoryValue("")} /> Сбросить
        </div>
    )
}
export default MemoryFilter