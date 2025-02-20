"use client"
import BoxComponent from "@/components/BoxComponent";
import ButtonElement from "@/components/ButtonElement";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import ImageContent from "@/components/ImageContent";
import Navbar from "@/components/Navbar";
import TextGray from "@/components/TextGray";
import { Box } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import OpenAccount from "../open-account/page";

export default function Signup() {
   
    return (
        <>
           <div className="py-[100px] px-[50px] flex flex-col items-center lg:mx-[100px]">
                <OpenAccount/>
                <div className="flex justify-center">
                    <Heading type={"h1"} text={"Investment options with Zerodha demat account"} />
                </div>
                <div className="grid md:grid-cols-2 ">
                    <ImageContent imageLink="/stocks.svg" headingElement="Stocks" content="Invest in all exchange-listed securities" />
                    <ImageContent imageLink="/funds.svg" headingElement="Mutual funds" content="Invest in commission-free direct mutual funds" />
                    <ImageContent imageLink="/IPO.svg" headingElement="IPO" content="Apply to the latest IPOs instantly via UPI" />
                    <ImageContent imageLink="/futureOptions.svg" headingElement="Future & options" content="Hedge and mitigate market risk through simplified F&O trading" />

                </div>
                <div className="flex items-center justify-center p-[50px]">
                <a href="/investments">
                <ButtonElement text={"Explore Investments"} />
                
                </a>

                </div>
                <div className="">
                    <div className="flex justify-center p-[50px]">
                        <Heading type="h1" text="Steps to open a demat account with Zerodha" />

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-[50px]">
                        <Image src={"/SignupLanding.svg"} alt="signupLanding" width={500} height={500} />
                        <div>
                            <div className="py-[10px] flex ">
                                <div className="border-2 border-gray-400 rounded-full px-[2px] mr-[7px] items-center justify-center flex font-bold text-gray-600 ">01</div>
                                <Heading type="h2" text="Enter the requested details" />
                            </div>
                            <hr className="gray-300" />
                            <div className="py-[10px] flex">
                                <div className="border-2 border-gray-400 rounded-full px-[2px] mr-[7px] items-center justify-center flex font-bold text-gray-600 ">02</div>

                                <Heading type="h2" text="Complete e-sign & verification" />

                            </div>
                            <hr className="gray-300" />
                            <div className="py-[10px] flex flex-wrap">
                                <div className="border-2 border-gray-400 rounded-full px-[2px] mr-[7px] items-center justify-center flex font-bold text-gray-600 ">03</div>

                                <Heading type="h2" text="Start investing!" />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 py-[200px] p-[50px] ">
                    <div className="pr-[20px]">
                        <Image src={"/landing-benefits.svg"} alt="landing -benefits" width={500} height={100} className="p-4" />
                        <Heading type="h1" text="Benefits of opening a Zerodha demat account" />
                    </div>
                    <div className="flex gap-6">
                    <div className="border-l-2 border-gray-400 h-full"></div>

                    <div className="grid grid-cols-1 gap-4">
                        <div>
                        <Heading  type="h2" text="Unbeatable pricing"/>
                        <TextGray text="Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades."/>
                        </div>
                        <div>
                        <Heading  type="h2" text="Best investing experience"/>
                        <TextGray text="Simple and intuitive trading platform with an easy-to-understand user interface."/>
                        </div>
                        <div>
                        <Heading  type="h2" text="No spam or gimmicks"/>
                        <TextGray text="Committed to transparency — no gimmicks, spam,gamificatio, or intrusive push notifications."/>
                        </div>
                        <div>
                        <Heading  type="h2" text="The Zerodha universe"/>
                        <TextGray text="More than just an app — gain free access to the entire ecosystem of our partner products."/>
                        </div>

                    </div>
                    </div>
                </div>
                <Heading type="h1" text="Explore different account types"/>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-9 ">
                    <BoxComponent HeadingElement="Individual Account" text="Invest in equity , mutual funds and derivatives" imageLink="/Individual.svg"/>
                    <BoxComponent HeadingElement="HUF Account" text="Make tax-efficient investments for your family" imageLink="/people.svg"/>
                    <BoxComponent HeadingElement="NRI Account" text="Invest in equity , mutual funds, debentures, and more" imageLink="/globeImg.svg"/>
                    <BoxComponent HeadingElement="Minor Account" text="Teach your litte ones about money & invest for their future with them" imageLink="/minor.svg"/>
                    <BoxComponent HeadingElement="Corporate / LLP / Partnership Account" text="Manage your business surplus and investments easily" imageLink="/Corporate.svg"/>
                
                </div>
                <div className="pt-[100px] p-[50px] pb-[0px]">
                <Heading text="Open a Zerodha account" type="h1"/>
                <p className="text-gray text-[20px] flex justify-center">Simple and intuitive apps · ₹0 for investments · ₹20 for intraday and F&O trades.</p>
                <ButtonElement text="Signup"/>
                </div>

            </div>
        </>
    );
}
