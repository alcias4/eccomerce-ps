



export interface dataApi {
    id: number
    title: string
    price: number
    description: string
    category:string
    image: string
    rating: rating
}

interface rating {
    rate: number
    count: number
}

interface removeApi {
    correlation_id:string
    error:boolean
    response:response
}

type response = {image_url: string}