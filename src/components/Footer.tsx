import { IconCode, IconBrandInstagram, IconBrandTwitter} from "@tabler/icons-react";





const Footer =() => {
    return (
        <footer className="min-h-[0px]   flex justify-center mt-10 items-center gap-5">
            <a href="https://github.com/alcias4/eccomerce-ps" target="_blank"  className="bg-white p-2 flex justify-center items-center rounded-lg hover:translate-y-[-5px] hover:shadow-lg hover:scale-105 transition-all">
                <IconCode className="size-7"/>
            </a>
            <a href="https://www.instagram.com/camilo_andrade04/" target="_blank"  className="bg-white  p-2 flex justify-center items-center rounded-lg hover:translate-y-[-5px] hover:shadow-lg hover:scale-105 transition-all">
                <IconBrandInstagram className="size-7"/>
            </a>
            <a href="https://twitter.com/camiloand23"  target="_blank" className="bg-white p-2 flex justify-center items-center rounded-lg hover:translate-y-[-5px] hover:shadow-lg hover:scale-105 transition-all">
                <IconBrandTwitter className="size-7"/>
            </a>
        </footer>
    )
}

export default Footer;