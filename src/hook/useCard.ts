import { useEffect, useState } from "react"
import { objet } from "../type/type"




const useCard = () => {
    const [statusCard, setStatusCard] = useState(false)
    const [numberCar, setNumberCar] = useState<number>()

    useEffect(() => {
        const cars:objet[] = JSON.parse(localStorage.getItem("card") || "[]")
        setNumberCar(cars.length)
    },[statusCard])

    return {setStatusCard, statusCard, numberCar}
}

export default useCard;