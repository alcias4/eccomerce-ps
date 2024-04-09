import { Link } from "react-router-dom";




const HomePage = () => {
    return (
        <div className="w-full items-center  md:h-[70vh] md:items-center flex flex-col-reverse md:flex-row md:gap-5 md:justify-between gap-10">
            <section  className="flex max-w-[413px] flex-col gap-10 2xl:gap-10 mt-5 md:w-[50%]">
                <h1 className="text-pretty text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold 2xl:text-[33px]">Fashion Fusion: Discover Exclusive Styles at Your Fingertips</h1>
                <p className="text-pretty"> Dive into the world of fashion with our exclusive selection of clothing and accessories. From the latest trends to timeless classics, our online store offers everything you need to express your unique style.</p>
                <Link to={"/shop"} className="flex justify-center">
                    <button 
                    className="bg-[#26b7e4] font-bold hover:scale-105 transition-all py-2 px-10 rounded-lg text-white w-[200px] hover:shadow-lg">
                        Get Start
                    </button>
                </Link>
            </section>
            <figure className="md:w-[50%] max-w-[409px]">
                <img id="home-img" src="ord.svg" alt="svg" className="drop-shadow-xl w-full" />
            </figure>
        </div>
    )
}

export default HomePage;