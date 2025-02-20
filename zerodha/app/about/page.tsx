"use client"
import AboutContributors from "@/components/AboutContributers";
import Heading from "@/components/Heading";
import Image from "next/image";
export default function about() {
    return <div className="py-[100px] px-[50px] lg:mx-[200px]">
        <div className="py-[50px]">
            <Heading text="We pioneered the discount broking model in India.
Now, we are breaking ground with our technology." type="h1" />
        </div>
        <hr className="border my-[50px]"></hr>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] text-[17px] my-[100px] text-gray-500">
            <div>
                We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.
                <br></br>
                <br></br>
                Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.
                <br></br>
                <br></br>
                Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes
            </div>
            <div>
                In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.
                <br></br><br></br>
                <a href="" className="text-blue-500">Rainmatter,</a> our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.
                <br></br><br></br>
                And yet, we are always up to something new every day. Catch up on the latest updates on our <a href="" className="text-blue-500">blog</a> or see what the media is <a href="" className="text-blue-500">saying about us.</a>
            </div>
        </div>
        <Heading text="People" type="h1" />
        <div className="grid  grid-cols-1 sm:grid-cols-2 lg:p-[50px] gap-6">
            <div className="flex flex-col justify-center items-center">
                <Image src={"/nithin-kamath.jpg"} alt="nitin kamath" width={200} height={100} className="rounded-full w-[80%] p-4" />
                <div className="text-gray-500 font-bold text-[20px] p-4">Nithin Kamath</div>
                <div className="text-gray-500">Founder, CEO</div>
            </div>
            <div className="text-gray-600">Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
                <br></br><br></br>
                He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
                <br></br> <br></br>Playing basketball is his zen.<br></br><br></br>Connect on <a href="" className="text-blue-500">Homepage</a> / <a href="" className="text-blue-500"> TradingQnA</a> / <a href="" className="text-blue-500">Twitter</a>
            </div>

        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 my-[100px]">
            <AboutContributors name="Nikhil Kamath" position="Co-founder & CFO" ImageLink="/nithin-kamath.jpg" Bio="Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess." />
            <AboutContributors name="Nikhil Kamath" position="Co-founder & CFO" ImageLink="/nithin-kamath.jpg" Bio="Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess." />
            <AboutContributors name="Nikhil Kamath" position="Co-founder & CFO" ImageLink="/nithin-kamath.jpg" Bio="Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess." />
            <AboutContributors name="Nikhil Kamath" position="Co-founder & CFO" ImageLink="/nithin-kamath.jpg" Bio="Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess." />
            <AboutContributors name="Nikhil Kamath" position="Co-founder & CFO" ImageLink="/nithin-kamath.jpg" Bio="Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess." />
            <AboutContributors name="Nikhil Kamath" position="Co-founder & CFO" ImageLink="/nithin-kamath.jpg" Bio="Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess." />
            <AboutContributors name="Nikhil Kamath" position="Co-founder & CFO" ImageLink="/nithin-kamath.jpg" Bio="Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess." />

        </div>
    </div>
}