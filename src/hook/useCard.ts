import { useState } from "react"
import { objet } from "../type/type"




const useCard = () => {
    const [numberCar, setNumberCar] = useState<number>()
    const [listCard, setListCard] = useState<objet[]>()
  
    const addCard = (product:objet) => {
        if (localStorage.getItem("card") !== null) {
            const cars:objet[] = JSON.parse(localStorage.getItem("card") || "[]")
            cars.push(product)
            setNumberCar(cars.length)
            setListCard(cars)
            localStorage.setItem("card", JSON.stringify(cars))
        } else{
            const cars = []
            cars.push(product)
            setNumberCar(cars.length)
            setListCard(cars)
            localStorage.setItem("card", JSON.stringify(cars))
        }
        alert("add product")

    }

    const removeCard = (id:number) => {
        const filterCars = listCard?.filter((e) => e.id !== id)
        setNumberCar(filterCars?.length)
        setListCard(filterCars)
        if(filterCars?.length === 0){
            localStorage.clear()
        } else{
            localStorage.setItem("card", JSON.stringify(filterCars))
        }
    }

    return {numberCar, listCard, removeCard, addCard}
}

export default useCard;