interface HeadingProps {
    text: string;
    type:string;
}

export default function Heading({ text,type }: HeadingProps) {
    if(type==="h1")
    return (
        <h1 className="text-4xl py-[25px] font-bold text-gray-700 flex justify-center">
            {text}
        </h1>
    );
    else if(type==="h2"){
        return (
            <h2 className="text-2xl text-gray-600 font-bold">{text}</h2>
        )
    }
}
