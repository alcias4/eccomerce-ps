import { useParams, useNavigate } from "react-router-dom";
import { IconShoppingBagPlus, IconArrowBackUp } from "@tabler/icons-react";
import useProduct from "../hook/useProduct";
import HeartRating from "../components/HeartRating";
import { objet } from "../type/type";
import { useState } from "react";
import Alert from "../components/Alert";




interface Props {
    addCard:(product:objet) => void
}


const ProductPage:React.FC<Props> = ({addCard}) => {

    const [notification, setNotification] = useState(false)
    const {id} = useParams()
    const {product} = useProduct(id)
    const navigate = useNavigate()


    const handleAddCard = () => {
        
        const objet = {
            id: Number(new Date()),
            title: product?.title,
            price: product?.price,
            rating: product?.rating.rate
        }
        addCard(objet)

        setNotification(true)
        setTimeout(() => setNotification(false), 3000)

        
    }
    return (
        <div id="info" className="w-full min-h-[500px] bg-white  lg:flex rounded-lg mt-10 shadow-xl">
            <figure className="w-full  lg:w-[50%] flex justify-center items-center p-10 relative">
                <img className="w-[200px] h-[200px] lg:w-[70%] lg:h-[70%]" src={product?.image} alt="" />
            </figure>
            <section className="flex flex-col w-full lg:w-[50%] p-5 gap-2">
                <h2 className="text-xl lg:text-3xl  text-balance text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">{product?.title}</h2>

                <span className="mt-10 capitalize"><strong>Category:</strong>  {product?.category}</span>

                <HeartRating rating={product?.rating.rate || 4}/>
                <p className="flex flex-col"> 
                    <strong>
                        Description:
                    </strong>
                    {product?.description}
                </p>
                <strong className="text-3xl py-2">$ {product?.price}</strong>
                <div className="flex gap-10 mt-5 justify-center lg:justify-start">
                    <button onClick={handleAddCard} className="w-[200px] flex justify-center bg-[#5fb0c9] text-white p-2 rounded-lg hover:opacity-70 relative font-bold hover:scale-105 transition-all">
                        Add to car
                        <IconShoppingBagPlus className="absolute right-2" /> 
                    </button>
                    <button onClick={()=> navigate("/shop")} className="font-bold  text-[#5fb0c9] border-[2px] px-5 rounded-lg hover:bg-[#5fb0c9] transition-all hover:text-white hover:opacity-70">
                        <IconArrowBackUp />
                    </button>
                </div>
            </section>
            {
                notification ? <Alert text={"add product"} correct={true}/>:null
            }
        </div>
    )
}


export default ProductPage;