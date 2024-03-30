import { IconBuildingStore , IconShoppingBag} from "@tabler/icons-react";
import { Link , NavLink} from "react-router-dom";



const Nav  = () => {
    return (
        <nav className="w-full flex justify-between p-5 bg-white/20 rounded-2xl">
            <figure>
                <Link to={"/"} className="flex items-center text-2xl">
                    <IconBuildingStore className="text-pink-500 size-7"/>
                    <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">Shopping</span>
                </Link>
            </figure>
            <ul className="flex gap-8 text-2xl">
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/about"}>About</NavLink></li>
                <li><NavLink to={"/shop"}>Shop</NavLink></li>
                <li><NavLink to={"/contact"}>Contact</NavLink></li>
            </ul>
            <ul className="flex gap-5 text-2xl">
                <li>
                    <NavLink to={"/"}>
                        <IconShoppingBag className="size-8" />
                    </NavLink>
                </li>
                <li><NavLink to={"/login"}>Login</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;