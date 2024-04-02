
import { dataApi } from "../type/type";


interface Props {
    products: dataApi[]  | undefined
}



const ShopPage:React.FC<Props> = ({products}) => {


    
    return (
    <ul className="flex flex-wrap justify-center gap-10 w-full pt-[100px]">
        {
            products?.map((element)=> (
                <li className="w-[300px] h-[400px]" key={element.id}>
                    <h3>{element.title}</h3>
                    <img className="w-[250px] " src={element.image} alt={element.title} />
                </li>
            ))
        }
    </ul> 
    )
}

export default ShopPage;