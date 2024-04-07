import { useParams, useNavigate } from "react-router-dom";
import { IconShoppingBagPlus, IconArrowBackUp } from "@tabler/icons-react";
import useProduct from "../hook/useProduct";
import HeartRating from "../components/HeartRating";
import { objet } from "../type/type";




interface Props {
    statusCard: React.Dispatch<React.SetStateAction<boolean>>
    status: boolean
}



const ProductPage:React.FC<Props> = ({statusCard, status}) => {
    const {id} = useParams()
    const {product} = useProduct(id)
    const navigate = useNavigate()
    const addCard = () => {
        const objet = {
            id: product?.id,
            title: product?.title,
            price: product?.price,
            rating: product?.rating.rate
        }

        const card:objet[] = JSON.parse(localStorage.getItem("card") || "")
        card.push(objet)
        localStorage.setItem("card", JSON.stringify(card));
        statusCard(!status)
        alert("Exited: Add to Card")
    }
    return (
        <div className="w-full min-h-[500px] bg-white flex rounded-xl mt-10">
            <figure className="w-[50%] flex justify-center items-center p-10">
                <img className="w-[70%] h-full" src={product?.image} alt="" />
            </figure>
            <section className="flex flex-col w-[50%] p-5 gap-2">
                <h2 className="text-3xl text-balance text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">{product?.title}</h2>

                <span className="mt-10 capitalize"><strong>Category:</strong>  {product?.category}</span>

                <HeartRating rating={product?.rating.rate || 4}/>
                <p className="flex flex-col"> 
                    <strong>
                        Description:
                    </strong>
                    {product?.description}
                </p>
                <strong className="text-3xl py-2">$ {product?.price}</strong>
                <div className="flex gap-10 mt-5">
                    <button onClick={addCard} className="w-[200px] flex justify-center bg-[#5fb0c9] text-white p-2 rounded-lg hover:opacity-70 relative font-bold hover:scale-105 transition-all">
                        Add to car
                        <IconShoppingBagPlus className="absolute right-2" /> 
                    </button>
                    <button onClick={()=> navigate("/shop")} className="font-bold  text-[#5fb0c9] border-[2px] px-5 rounded-lg hover:bg-[#5fb0c9] transition-all hover:text-white hover:opacity-70">
                        <IconArrowBackUp />
                    </button>
                </div>
            </section>
        </div>
    )
}


export default ProductPage;