import { IconCheck } from "@tabler/icons-react";



interface Prop {
    text:string
    correct:boolean
}


const Alert:React.FC<Prop> = ({text, correct}) => {
    return (
        <div className={`w-[200px] absolute -top-3 left-[10%] lg:left-[20%] 2xl:left-[25%] flex ${correct? "bg-[#eefbf2] text-[#38eb6d]":"bg-[#fdf1f5]  text-red-500"} p-5 justify-center rounded-md z-30 animate-bounce gap-5  text-center items-center`}>
            <section>
                <IconCheck className={`border-[1px] rounded-full ${correct? "border-[#38eb6d]": "border-red-500"} `}/>
            </section>

            <section>   
                {text}
            </section>
        </div>
    )
}


export default Alert;