import { IconHeartFilled } from "@tabler/icons-react";


interface Props {
    rating:number
}



const HeartRating: React.FC<Props> = ({rating}) => {

    const item = []

    for (let i = 0 ; i < rating ; i++){
        item.push(<IconHeartFilled key={i + 1000} className="fill-yellow-300"/>)
    }
    return (
        <figure className="flex mt-2">
            {item}
        </figure>
    )
}

export default HeartRating;