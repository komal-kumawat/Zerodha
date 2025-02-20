import Image from "next/image";
import SignupButton from "./ButtonElement";
import ButtonElement from "./ButtonElement";
export default function LandingPage() {
    return (
        <div className="flex items-center justify-center flex-col  p-[50px] gap-6">
            <div className="py-[50px]  ">
                <Image src={"/landing.png"} alt="landing-image" width={600} height={500} className="w-[600px] h-[400px] md:w-[900px]"
                />
            </div>
            <h1 className="text-[40px] text-gray-600"><b>Invest in everything</b></h1>
            <p className="text-[20px] text-gray-500 ">Online platform to invest in stocks , derivatives , mutual funds,ETFs,bonds,and more.</p>
            <div className="p-[50px]">
                <a href="/open-account">
                    <ButtonElement text="Signup for free" />

                </a>    </div>
            <div className="flex flex-col md:flex-row justify-between p-[50px] ">
                <div className="flex flex-col  w-[100%] md:w-[50%] mr-[20px]">
                    <h1 className="text-3xl py-[20px]">Trust with confidence</h1>

                    <div>
                        <h2 className="text-2xl py-[20px]">Customer-first always</h2>
                        <div className="text-gray-500">That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.

                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl py-[20px]">No spam or gimmicks</h2>
                        <div className="text-gray-500">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</div>
                    </div>
                    <div>
                        <h2 className="text-2xl py-[20px]">The Zerodha universe
                        </h2>
                        <div className="text-gray-500">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.

                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl py-[20px]">Do better with money</h2>
                        <div className="text-gray-500">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</div>
                    </div>
                </div>
                <div>
                    <Image src={"/ecosystem.png"} alt="ecosystem" width={800} height={800} />
                    <div className="flex justify-center items-center m-6">
                    <a href="/products" className="text-blue-500 p-6">Explore our products </a>
                    <a href="/Kite-demo-dashboard" className="text-blue-500 p-6">Try Kite demo </a>

                    </div>
                </div>
            </div>
            <div>
                <Image src={"/press-logos.png"} alt="economic" width={1000} height={200} className="p-[50px]"></Image>
            </div>
            <div className="flex flex-col md:flex-row space-between gap-[50px] m-[50px] md:m[100px]">
                <div >
                    <h1 className="text-3xl py-[20px] ">Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparancy in India.
                        Flat fees and no hidden charges
                    </p>
                    <a href="/pricing" className="text-blue-500 hover:text-black flex">See pricing <Image src={"/Next-128.webp"} alt="arrow" width={18} height={2} className="text-blue-500 ml-[10px]" /> </a>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 ml-[50px]">
                    <div className="flex items-center">
                        <Image src={"/pricing-eq.svg"} alt="pricing" width={100} height={80} />
                        <p className="text-gray-500 text-[12px] ">Free account opening</p>
                    </div>
                    <div className="flex items-center">
                        <Image src={"/pricing-eq.svg"} alt="pricing" width={100} height={80} />
                        <p className="text-gray-500 text-[12px]">Free equity delivery <br></br>
                            and direct mutual funds</p>
                    </div>
                    <div className="flex items-center">
                        <Image src={"/other-trades.svg"} alt="pricing" width={100} height={80} />
                        <p className="text-gray-500 text-[12px]">Intraday and <br></br>
                            F&O</p>
                    </div>

                </div>
            </div>
            <div className="flex flex-col md:flex-row space-between gap-[50px] md:p-[100px] items-center">
                <div className="mr-[50px] md:mr-[100px]">
                    <Image src={"index-education.svg"} alt="Varsity" width={700} height={500} />
                </div>
                <div className="items-left">
                    <h1 className="text-3xl py-[20px] ">Free and open market education
                    </h1>
                    <p className="py-[20px]">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.

                    </p>
                    <a href="/varsity" className="text-blue-500 hover:text-black flex">Varsity <Image src={"/Next-128.webp"} alt="arrow" width={20} height={5} className="text-blue-500 ml-[10px]" /></a>
                    <p className="py-[20px]">TradingQ&A, the most active trading and investment community in India for all your market related queries.

                    </p>
                    <a href="https://tradingqna.com/" className="text-blue-500 hover:text-black flex">TradingQ&A <Image src={"/Next-128.webp"} alt="arrow" width={20} height={5} className="text-blue-500 ml-[10px]" /></a>

                </div>

            </div>
            <div className="flex flex-col items-center">
                <h1 className="text-4xl ">Open a Zerodha account</h1>
                <p className="text-[17px] p-6 pb-[50px] text-gray-500">Modern platforms and apps , 0Rs investments, and flat 20Rs intraday and F&O trades.</p>
                <a href="/open-account">
                    <ButtonElement text="Signup for free" />

                </a>

            </div>

        </div>
    )
}
