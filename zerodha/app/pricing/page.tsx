import AccountChargesTable from "@/components/AccountChargesTable";
import Heading from "@/components/Heading";
import ImageHeadingContentColumn from "@/components/ImageHeadingContentColumn";

export default function Pricing() {
    return (
        <div className="py-[100px] px-[50px] flex flex-col items-center lg:mx-[100px]">
            <div className="p-[50px] text-center">
                <Heading text="Charges" type="h1" />
                <p className="text-gray-400 text-[20px]">List of all charges and taxes</p>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 p-4 items-start">
                <ImageHeadingContentColumn 
                    imageLink="/pricing-eq.svg" 
                    headingElement="Free equity delivery" 
                    content="All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage."
                />
                <ImageHeadingContentColumn 
                    imageLink="/other-trades.svg" 
                    headingElement="Intraday and F&O trades" 
                    content="Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades."
                />
                <ImageHeadingContentColumn 
                    imageLink="/pricing-eq.svg" 
                    headingElement="Free direct MF" 
                    content="All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges."
                />
            </div>
            <Heading text="Charges for Account Opening" type="h1"/>
            <AccountChargesTable/>
        </div>
    );
}
