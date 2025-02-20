interface ButtonElementProps{
    text:string;
}
export default function ButtonElement({text}:ButtonElementProps){
    return(
        <div className="flex justify-center p-4">
        <button className="text-white text-[20px] bg-blue-600 rounded-md p-3 hover:bg-black" >{text}</button>
        </div>
    )
}