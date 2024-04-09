import { IconUser, IconMail ,IconDeviceMobile} from "@tabler/icons-react";
import { useState } from "react";
import Alert from "../components/Alert";

type not = {correct:boolean, text:string}


const ContactPage = () => {
    const [notification, setNotification] = useState(false)
    const [status, setStatus] = useState<not>({correct:true, text:"The message was sent"})


    const handleSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData)
        
        if(data.name === "" || data.email === "" || data.phone === "" || data.description === ""){
     
            setStatus({correct: false, text: "Empty fields"})
        }  else {
            setStatus({correct: true, text: "Send message"})
        }

        setNotification(true)
        setTimeout(() => setNotification(false), 3000)
    }

    return (
        <div className="w-full max-w-[600px] self-center">
            <form onSubmit={handleSubmit} className="flex flex-col bg-white p-5 gap-5 rounded-md shadow-2xl mt-10">
                <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 font-bold  text-2xl self-center">Contact Us</h2>

                <div className="flex flex-col relative justify-center">
                    <IconUser  className="absolute left-2 text-gray-400"/>
                    <input type="text" placeholder="Jose perez..." className="p-2 pl-10 rounded-md border-[2px] focus:border-pink-400 outline-none" name="name"/>
                </div>

                <div className="flex flex-col relative justify-center">
                    <IconMail className="absolute left-2 text-gray-400"/>
                    <input type="email" placeholder="jose.perez@gmail.com..." className="p-2 pl-10  rounded-md border-[2px] focus:border-pink-400 outline-none" name="email"/>
                </div>
                <div className="flex flex-col relative justify-center">
                    <IconDeviceMobile className="absolute left-2 text-gray-400"/>
                    <input type="text" placeholder="+44 2346 783434" className="p-2 pl-10  rounded-md border-[2px] focus:border-pink-400 outline-none" name="phone"/>
                </div>
                <div className="flex flex-col relative justify-center">
                    <textarea placeholder="Comment..."  className="h-[130px] resize-none p-2 rounded-md border-[2px] focus:border-pink-400 outline-none" name="description"/>
                </div>
                <button className="bg-[#26b7e4] font-bold hover:scale-105 transition-all py-2 px-10 rounded-lg text-white w-[200px] self-center">Contact Us</button>
            </form>
            {
                notification ? <Alert text={status.text} correct={status.correct} />:null
            }
        </div>
    )
}

export default ContactPage;