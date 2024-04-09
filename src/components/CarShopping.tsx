import { objet } from "../type/type";
import HeartRating from "./HeartRating";
import { IconShoppingBagX } from "@tabler/icons-react";


interface Props {
    listCard: objet[] | undefined
    removeCar: (id: number) => void
}



const CarShopping:React.FC<Props> = ({listCard, removeCar}) => {

    const totalPrice = () => {
        let count = 0;
        listCard?.map((e) => {
            count = count + (e?.price || 0)
        })

        return count.toFixed(3)
    }
    return (
        <ul className="absolute w-[250px] right-[10%] lg:right-[20%] 2xl:right-[25%] text-xl top-20 bg-white  lg:w-[400px] flex flex-col p-5 rounded-lg shadow-lg gap-5 z-50 max-h-[80vh] overflow-y-auto">
            {
                listCard?.length === 0 ?  <p className="h-[100px] w-full flex justify-center items-center">No product...</p> :<>
                {
                    listCard?.map((e) => (
                        <li className="flex flex-col  relative" key={e.id}>
                            <strong>{e.title}</strong>
                            <HeartRating rating={e.rating || 4}/>
                            <span>Price: ${e.price}</span>
                            <button className=" right-0 bottom-1 px-5 py-1 mt-2 text-white rounded-md flex justify-center items-center bg-pink-700 hover:opacity-75" onClick={() => removeCar(e.id || 0)}>
                                <IconShoppingBagX />
                            </button>
                        </li>
                    ))
                }
                <p className="border-t-[1px] pt-4">Total: {totalPrice()}</p>
                <button className="flex justify-center bg-[#5fb0c9] text-white p-1 rounded-lg hover:opacity-70 relative font-bold transition-all" >Buy</button>      
                </>
            }
        </ul>
    )
}

export default CarShopping;