interface ImageContentProps {
    imageLink:string;
    headingElement:string;
    content:string
}
import Image from "next/image";
import Heading from "./Heading";
import TextGray from "./TextGray";
export default function ImageContent({imageLink ,headingElement , content}:ImageContentProps ){
    return <div className="grid grid-cols-2 p-[50px]">
        <Image src={imageLink} alt="" width={100} height={100} />
        <div className="flex flex-col">
            <Heading type="h2" text={headingElement} />
            <TextGray text={content}/>
        </div>
    </div>
}