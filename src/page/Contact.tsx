import { IconUser, IconMail ,IconDeviceMobile} from "@tabler/icons-react";




const ContactPage = () => {
    const handleSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData)
        
        if(data.name === "" || data.email === "" || data.phone === "" || data.description === ""){
            alert("empty fields")
        }else {
            alert("The message was sent")
        }
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
                    <input type="text" placeholder="jose.perez@gmail.com..." className="p-2 pl-10  rounded-md border-[2px] focus:border-pink-400 outline-none" name="email"/>
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
        </div>
    )
}

export default ContactPage;