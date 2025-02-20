interface ImageContentProps {
    imageLink:string;
    headingElement:string;
    content:string
}
import Image from "next/image";
import Heading from "./Heading";
import TextGray from "./TextGray";
export default function ImageHeadingContentColumn({imageLink ,headingElement , content}:ImageContentProps ){
    return <div className="grid grid-cols-1 p-4 ">
        <Image src={imageLink} alt="" width={100} height={100} className="w-full" />
        <div className="flex flex-col justify-center">
            <Heading type="h2" text={headingElement} />
            <TextGray text={content}/>
        </div>
    </div>
}