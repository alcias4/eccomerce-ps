
import { dataApi } from "../type/type";


interface Props {
    products: dataApi[]  | undefined
}



const ShopPage:React.FC<Props> = ({products}) => {


    
    return (
    <ul className="flex flex-wrap justify-between gap-10 w-full pt-[100px]">
        {
            products?.map((element)=> (
                <li className="w-[250px] p-5 h-[500px] rounded-lg  shadow-md bg-white text-black flex flex-col items-center justify-center gap-5" key={element.id}>
              
                    <img className="w-full h-[200px]" src={element.image} alt={element.title} />
                    <section>
                        <strong>{element.title}</strong>
                        <p>{element.category}</p>
                        <span>{element.price}$</span>
                    </section>
                </li>
            ))
        }
    </ul> 
    )
}

export default ShopPage;