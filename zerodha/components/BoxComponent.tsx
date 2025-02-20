import Heading from "./Heading";
import TextGray from "./TextGray";
import Image from "next/image";

interface BoxComponentProps {
    HeadingElement: string;
    text: string;
    imageLink: string;
}

export default function BoxComponent({ HeadingElement, text, imageLink }: BoxComponentProps) {
    return (
        <div className="relative border-2 border-gray-300 p-[20px] rounded-md flex flex-wrap items-center">
            {/* Absolute Image on Left Border */}
            <div className="absolute left-[-20px] top-1/2 transform -translate-y-1/2">
                <Image src={imageLink} alt="icon" width={40} height={40} className="rounded-full border border-gray-400" />
            </div>

            {/* Content */}
            <a href="">
            <div className="ml-[40px]">
                <Heading type="h2" text={HeadingElement} />
                <TextGray text={text} />
            </div>
            </a>
        </div>
    );
}
