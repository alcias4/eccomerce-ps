import { IconBuildingStore , IconShoppingBag, IconHome , IconBrandShopee, IconMessage} from "@tabler/icons-react";
import { useState } from "react";
import { Link , NavLink} from "react-router-dom";
import CarShopping from "./CarShopping";
import { objet } from "../type/type";


interface Props {
    number:number | undefined
    listCard: objet[] | undefined
    removeCar: (id: number) => void
}


const Nav: React.FC<Props>  = ({number, listCard, removeCar}) => {
    const [statusCard, setCars] = useState(false)

    const handleOnClick = () => {
        setCars(!statusCard)
        if(!statusCard){
            document.getElementById("main")?.classList.add('opacity')
            document.getElementById("info")?.classList.add('opacity')
        }else {
            document.getElementById("main")?.classList.remove('opacity')
            document.getElementById("info")?.classList.remove('opacity')
        }

    }

    return (
    <nav className="w-full flex px-[10%] lg:px-[20%] justify-between py-5 rounded-2xl items-center relative 2xl:px-[25%]">
        <figure>
            <Link to={"/"} className="flex items-center text-2xl">
                <IconBuildingStore className="text-pink-500 size-7 hidden md:flex"/>
                <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Shop</span>
            </Link>
        </figure>
        <ul className="flex gap-8 text-2xl">
            <li><NavLink to={"/"}><span className="hidden md:flex">Home</span><IconHome className="size-8 md:hidden" /></NavLink></li>
            <li><NavLink to={"/shop"}><span className="hidden md:flex">Shop</span><IconBrandShopee className="size-8 md:hidden" /></NavLink></li>
            <li><NavLink to={"/contact"}><span className="hidden md:flex">Contact</span><IconMessage className="size-8 md:hidden"/></NavLink></li>
        </ul>
        <ul className="flex gap-5 text-2xl">
            <li className="relative">
                <button onClick={()=> handleOnClick()}>
                    <IconShoppingBag className="size-8" />
                    <div className="absolute text-[14px] top-5 w-[20px] h-[20px] flex justify-center items-center rounded-full right-0 bg-red-400 text-white">{number || 0}</div>
                </button>
            </li>
            {   
                statusCard? <CarShopping listCard={listCard} removeCar={removeCar}/> :  null
            }
        </ul>
    </nav>
    )
}

export default Nav;