import { useEffect, useState } from "react"
import { dataApi } from "../type/type"








const useProduct = (id:string | undefined) => {

    const [product, setProduct ] = useState<dataApi>()

    const getProduct = async () => {
        const res = await fetch("https://fakestoreapi.com/products/" + id)
        const js:dataApi = await res.json()
        setProduct(js)
    }

    useEffect(()=> {
        getProduct()
    },[])

    return {product}
}

export default useProduct;