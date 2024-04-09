import { Link } from "react-router-dom";
import { objet } from "../type/type";
import HeartRating from "../components/HeartRating";
import { IconShoppingBagX } from "@tabler/icons-react";
import { useState } from "react";
import BuyConfirmation from "../components/BuyConfi";



interface Prop {
    listCard: objet[] | undefined
    removeCar: (id: number) => void
    setCard: React.Dispatch<React.SetStateAction<boolean>>
    status: boolean
}


const BuyPage:React.FC<Prop>  = ({listCard,removeCar,status,setCard}) => {
    const [statusBuy, setBuy ]  = useState(false)

    const totalPrice = () => {
        let count = 0;
        listCard?.map((e) => {
            count = count + (e?.price || 0)
        })

        return count.toFixed(3)
    }

    const handleBuy = () => {
        setBuy(true)
    }


    return (
        <>
            <div className={`w-full overflow-y-auto flex flex-col items-center ${statusBuy? "opacity-50 pointer-events-none":null}`}>
                <p className="border-t-[1px] pt-4 text-4xl mb-10">Total: {totalPrice()}</p>
                <Link onClick={handleBuy} to={"/buy"} className="flex w-[200px] max-w-[300px] justify-center bg-[#5fb0c9] text-white p-1 rounded-lg hover:opacity-70 relative font-bold transition-all" >Buy</Link>     
                <ul className="w-full flex flex-wrap gap-5 justify-center md:justify-between mt-10" >
                    {
                        listCard?.map((e) => (
                            <li className="flex flex-col w-full max-w-[200px] min-h-[230px] bg-white p-5 rounded-lg relative" key={e.id}>
                                <strong>{e.title}</strong>
                                <HeartRating rating={e.rating || 4}/>
                                <span>Price: ${e.price}</span>
                                <button className="w-[80%]  mb-2 bottom-1 px-5 py-1 mt-2 text-white rounded-md flex justify-center items-center bg-pink-700 hover:opacity-75 absolute " onClick={() => removeCar(e.id || 0)}>
                                    <IconShoppingBagX />
                                </button>
                            </li>
                        ))
                    }  
                </ul>
            </div>
            {
                statusBuy ? <BuyConfirmation setBuy={setBuy} totalPrice={totalPrice} setCard={setCard} status={status}/> :null
            }
        </>
    )
}

export default BuyPage;