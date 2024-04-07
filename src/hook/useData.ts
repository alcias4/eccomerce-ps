import { useEffect, useState } from "react"
import { products } from "../service/products"
import { dataApi } from "../type/type"






export const useData = () => {
    const [dataProduct, setProduct] = useState<dataApi[]>()

    const listData = async () => {
        const data:dataApi[]= await products()
        setProduct(data)
    }

    

    useEffect(()=>{
        if(localStorage.getItem("card") === undefined){
            localStorage.setItem("card", "[]")
        }
        listData()
    } , [])

    return {dataProduct}
}