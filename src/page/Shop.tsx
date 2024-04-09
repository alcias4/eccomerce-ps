import { IconShoppingBagPlus} from "@tabler/icons-react";
import { dataApi } from "../type/type";
import HeartRating from "../components/HeartRating";
import { useNavigate } from "react-router-dom";

interface Props {
    products: dataApi[]  | undefined
}




const ShopPage:React.FC<Props> = ({products}) => {

    const navigate = useNavigate()
    
    const handleOnclick = (id:number) => {
        navigate("/shop/" + id)
    }
    
    return (
    <ul id="main" className="flex flex-wrap justify-center md:justify-between gap-10 w-full pt-[100px] ">
        {
            products?.map((element)=> (
                <li className="hover:scale-105  hover:shadow-2xl w-[250px] duration-200 transition-all ease-in-out rounded-lg  shadow-md bg-white text-black flex flex-col" key={element.id + 23455}>
                    <figure className="p-5">
                        <img className="w-full h-[200px]" src={element.image} alt={element.title} />
                    </figure>
                    <section className="w-full h-[60%] p-5 flex flex-col justify-between gap-5 relative">
                        <div className="flex flex-col ">
                            <strong className="min-h-[50px] flex items-center">{element.title.slice(0,40)} {element.title.length > 40 ? "...": "."} </strong>
                            <HeartRating rating={element.rating.rate}/>
                            <span className="flex flex-col mt-2">
                            Price:
                            <b>${element.price}</b>
                            </span>
                        </div>
                        <button onClick={() => handleOnclick(element.id)} className="w-full flex justify-center bg-[#5fb0c9] text-white p-2 rounded-lg hover:opacity-70 relative">
                            Buy
                            <span className="absolute right-2"><IconShoppingBagPlus /></span>
                        </button>
                    </section>
                </li>
            ))
        }
    </ul> 
    )
}

export default ShopPage;