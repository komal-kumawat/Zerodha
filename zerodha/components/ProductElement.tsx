import Image from "next/image";

interface ProductElementProps {
    content: string;
    Element: string;
    ImageLink: string;
    GoogleBadge?: boolean;
    AppBadge?: boolean;
    left: boolean;
    links?: { text: string; url: string }[];
}

export default function ProductElement({ content, Element, ImageLink, left, GoogleBadge, AppBadge, links = [] }: ProductElementProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-center py-[50px]">
            {left ? (
                <>
                    {/* Image takes 2 columns */}
                    <div className="col-span-2 flex justify-center">
                        <Image src={ImageLink} width={300} height={100} alt={Element} className="w-[70%]" />
                    </div>
                    {/* Text takes 1 column */}
                    <div className="col-span-1">
                        <p className="text-[30px] text-gray-700 font-bold">{Element}</p>
                        <p className="text-[17px] text-gray-600 py-4">{content}</p>
                        
                        {/* Dynamic Links */}
                        {links.length > 0 && (
                            <div className="grid grid-cols-2 gap-4">
                                {links.map((link, index) => (
                                    <a key={index} href={link.url} className="text-blue-500 text-[17px] font-bold">
                                        {link.text}
                                    </a>
                                ))}
                            </div>
                        )}

                        <div className="flex flex-col gap-4 mt-4 lg:flex-row">
                            {GoogleBadge && (
                                <Image src="/google-play-badge.svg" alt="Google Play" width={100} height={50} className="rounded-md w-[50%]" />
                            )}
                            {AppBadge && (
                                <Image src="/appstore-badge.svg" alt="App Store" width={100} height={40} className="rounded-md w-[50%] lg:w-[40%]" />
                            )}
                        </div>
                    </div>
                </>
            ) : (
                <>
                    {/* Text takes 1 column */}
                    <div className="col-span-1 pl-[50px] lg:pl-[100px]">
                        <p className="text-[30px] text-gray-700 font-bold">{Element}</p>
                        <p className="text-[17px] text-gray-600 py-4">{content}</p>
                        
                        {/* Dynamic Links */}
                        {links.length > 0 && (
                            <div className="flex flex-wrap gap-4">
                                {links.map((link, index) => (
                                    <a key={index} href={link.url} className="text-blue-500 text-[17px] font-bold">
                                        {link.text}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                    {/* Image takes 2 columns */}
                    <div className="col-span-2 flex justify-center">
                        <Image src={ImageLink} width={300} height={100} alt={Element} className="w-[70%]" />
                    </div>
                </>
            )}
        </div>
    );
}
