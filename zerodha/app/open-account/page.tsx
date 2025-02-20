"use client"

import Image from "next/image";
import { useState } from "react";


export default function OpenAccount() {
    const [countryCode, setCountryCode] = useState("+91");
    const [phoneNumber, setPhoneNumber] = useState("");
    return <div className="py-[100px] px-[50px]">
        <div className="flex flex-col items-center">
            <h1 className="text-4xl py-[25px] font-bold text-gray-700">
                Open a free demat & trading account online
            </h1>
            <h2 className="text-[18px] text-gray-500 text-center">
                Start investing brokerage-free and join a community of 1.5+ crore investors and traders
            </h2>
        </div>

        <div className="flex items-center gap-[20px] py-[80px] justify-between md:px-[50px] flex-wrap flex-col sm:flex-row">
            <div>
                <Image src="/landing-signup.svg" alt="Signup illustration" width={600} height={500} />
            </div>
            <div className="flex flex-col items-start p-4">
                <h1 className="text-3xl">Signup now</h1>
                <p className="text-[18px] text-gray-500">Or track your existing application</p>

                {/* Mobile Number Input with Country Code Selector */}
                <div className="flex items-center border border-gray-500 rounded-md px-4 py-2 w-[350px] bg-white mt-[20px]">
                    <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="bg-transparent outline-none text-gray-700 font-medium"
                    >
                        <option value="+91">🇮🇳 +91</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+61">🇦🇺 +61</option>
                        <option value="+81">🇯🇵 +81</option>
                        <option value="+49">🇩🇪 +49</option>
                    </select>

                    <input
                        type="number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="Enter mobile number"
                        className="outline-none px-2 flex-1 text-gray-900"
                    />
                </div>

                <button className="text-white text-[20px] bg-blue-500 hover:bg-blue-400 p-4 rounded-md px-[50px] my-[50px] transition duration-200">
                    Get OTP
                </button>
                <p className="text-[15px] text-gray-500">
                    By proceeding, you agree to the Zerodha{" "}
                    <a href="/https://zerodha.com/terms-and-conditions" className="text-blue-500 hover:text-black cursor-pointer">terms</a> &{" "}
                    <a href="https://zerodha.com/privacy-policy" className="text-blue-500 hover:text-black cursor-pointer">privacy policy</a>
                </p>
            </div>
        </div>
    </div>
}