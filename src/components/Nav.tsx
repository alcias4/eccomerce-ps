import { IconBuildingStore , IconShoppingBag} from "@tabler/icons-react";
import { Link , NavLink} from "react-router-dom";


interface Props {
    number:number | undefined
}


const Nav: React.FC<Props>  = ({number}) => {
    return (
    <nav className="w-full flex px-[20%] justify-between py-5 rounded-2xl items-center">
        <figure>
            <Link to={"/"} className="flex items-center text-2xl">
                <IconBuildingStore className="text-pink-500 size-7"/>
                <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Shop</span>
            </Link>
        </figure>
        <ul className="flex gap-8 text-2xl">
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/about"}>About</NavLink></li>
            <li><NavLink to={"/shop"}>Shop</NavLink></li>
            <li><NavLink to={"/contact"}>Contact</NavLink></li>
        </ul>
        <ul className="flex gap-5 text-2xl">
            <li className="relative">
                <NavLink to={"/"}>
                    <IconShoppingBag className="size-8" />
                    <div className="absolute text-[14px] top-5 w-[20px] h-[20px] flex justify-center items-center rounded-full right-0 bg-red-400 text-white">{number}</div>
                </NavLink>
            </li>
        </ul>
    </nav>
    )
}

export default Nav;