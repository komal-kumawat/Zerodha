import Image from "next/image";

interface ZerodhaUniverseElementProps {
    imageLink: string;
    content: string;  
}

export default function ZerodhaUniverseElement({ imageLink, content }: ZerodhaUniverseElementProps) {
    return (
        <div className="grid grid-cols-1 gap-2">
            <Image 
                src={imageLink} 
                alt="Zerodha Element" 
                width={100} 
                height={100} 
                className="p-4 lg:w-[50%] w-[90%] col-span-1" 
            />
            <div className="text-gray-400 text-[15px]">{content}</div>
        </div>
    );
}
