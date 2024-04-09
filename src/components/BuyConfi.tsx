import { useNavigate } from 'react-router-dom'
import canvasConfetti from 'canvas-confetti'


interface Props {
    setBuy: React.Dispatch<React.SetStateAction<boolean>>
    totalPrice: () => string
    setCard: React.Dispatch<React.SetStateAction<boolean>>
    status:boolean
}





const BuyConfirmation:React.FC<Props> = ({setBuy,totalPrice,setCard, status}) => {
    const navigate = useNavigate()

    const handleClick = () => {
        setCard(!status)
        alert("Buy made")
        canvasConfetti()
        localStorage.clear()
        navigate("/shop")
    }


    return (
        <div className="absolute z-10 bg-white p-5 rounded-md mt-[100px] lg:mt-[200px] flex flex-col ">
            <h3 className="flex text-pretty text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold 2xl:text-[33px]">Confirmation Buy</h3>
            <p className="text-2xl self-center mt-5">Total Price: ${totalPrice()}</p>
            <section className="flex  justify-center mt-10 gap-5">
                <button onClick={handleClick} className="bg-[#26b7e4] font-bold hover:scale-105 transition-all py-2 px-10 rounded-lg text-white w-[50%] hover:shadow-lg">Buy</button>
                <button className="bg-red-500 font-bold hover:scale-105 transition-all py-2 px-10 rounded-lg text-white w-[50%px] hover:shadow-lg" onClick={() => setBuy(false)}>Cancel</button>
            </section>
        </div>
    )
}

export default BuyConfirmation;