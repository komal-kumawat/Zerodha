import ButtonElement from "@/components/ButtonElement";
import Heading from "@/components/Heading";
import ProductElement from "@/components/ProductElement";
import ZerodhaUniverseElement from "@/components/ZerodhaUniverseElement";


export default function products() {
    return <div className="py-[100px] px-[50px] flex flex-col items-center">
        <div className="flex flex-col items-center py-[100px]">
            <Heading text="Zerodha Products" type="h1" />
            <p className="text-gray-500 text-[20px] ">Sleek, modern, and intuitive trading platforms</p>
            <p className="text-gray-500 p-4 text-[17px]">Check out our <a href="/investment" className="text-blue-500">investment offerings →</a></p>
        </div>
        <hr className="border-t-2 border-gray-200 w-full" />
        <div className="py-[50px]">
            <ProductElement Element="Kite" link1="Try demo ->" link2="Learn more ->" ImageLink="/products-kite.png" content="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." left={true} GoogleBadge={true} AppBadge={true} />
            <ProductElement Element="Console" link1="Learn more ->" ImageLink="/products-console.png" content="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." left={false} GoogleBadge={false} AppBadge={false} />
            <ProductElement Element="Coin" link1="Coin ->" ImageLink="/products-coin.png" content="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." left={true} GoogleBadge={true} AppBadge={true} />
            <ProductElement Element="Kite Connect API" link1="Kite Connect ->" ImageLink="/products-kiteconnect.png" content="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." left={false} GoogleBadge={false} AppBadge={false} />
            <ProductElement Element="Varsity mobile" ImageLink="/varsity-products.png" content="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." left={true} GoogleBadge={true} AppBadge={true} />

        </div>
        <div className="text-[20px] py-[50px]">
            Want to know more about our technology stack? Check out the <a href="https://zerodha.tech/" className="text-blue-500 ">Zerodha.tech</a> blog.
        </div>
        <div className="py-[50px]">
            <Heading type="h1" text="The Zerodha Universe" />
            <p className="text-gray-700 text-20">Extend your trading and investment experience even further with our partner platforms</p>
        </div>
        <div className="py-[50px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-[100px] gap-8">
            
            <a href=""><ZerodhaUniverseElement imageLink="/Zerodhafundhouse.png" content="Our asset management ventur that is creating simple and transparent index funds to help you save for your goals"/></a>
            
            <a href=""><ZerodhaUniverseElement imageLink="/sensibull-logo.svg" content="Our asset management ventur that is creating simple and transparent index funds to help you save for your goals"/></a>
            <a href=""><ZerodhaUniverseElement imageLink="/sensibull-logo.svg" content="Our asset management ventur that is creating simple and transparent index funds to help you save for your goals"/></a>
            <a href=""><ZerodhaUniverseElement imageLink="/sensibull-logo.svg" content="Our asset management ventur that is creating simple and transparent index funds to help you save for your goals"/></a>
            <a href=""><ZerodhaUniverseElement imageLink="/sensibull-logo.svg" content="Our asset management ventur that is creating simple and transparent index funds to help you save for your goals"/></a>
            <a href=""><ZerodhaUniverseElement imageLink="/sensibull-logo.svg" content="Our asset management ventur that is creating simple and transparent index funds to help you save for your goals"/></a>
           

        </div>
        <div>
            <ButtonElement text="Sign up for free"/>
        </div>
        

    </div>
}