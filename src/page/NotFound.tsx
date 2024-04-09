import { Link } from "react-router-dom"





const NotFound = () => {
    return (
        <div className="w-full flex flex-col items-center gap-14 h-[50vh] justify-center">
            <h2 className="flex text-pretty text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold 2xl:text-[33px]">Not Found</h2>
            <Link to={"/"}>
                <button className="bg-[#26b7e4] font-bold hover:scale-105 transition-all py-2 px-10 rounded-lg text-white w-[200px] hover:shadow-lg">Return</button>
            </Link>
        </div>
    )
}

export default NotFound;