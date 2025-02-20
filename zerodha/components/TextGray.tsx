interface TextProps {
    text: string;
}

export default function TextGray({ text }: TextProps) {
    return (
        <div>
            <p className="text-gray-500 text-[18px] py-2">{text}</p>
        </div>
    );
}
