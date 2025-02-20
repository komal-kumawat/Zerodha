"use client"; // Needed for Next.js Client Components

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-2 border-gray-100 w-screen fixed bg-white z-50">
      <nav className="p-4 bg-white flex justify-between">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/">
            <Logo />
          </a>

          <div className="flex justify-between items-center">
            <div>
              {/* Navigation Links (Visible Outside Hamburger When md+) */}
              <ul className="hidden md:flex space-x-10 text-gray-500">
                <li>
                  <a href="/Signup" className="hover:text-blue-500">Signup</a>
                </li>
                <li>
                  <a href="/about" className="hover:text-blue-500">About</a>
                </li>
                <li>
                  <a href="/products" className="hover:text-blue-500">Products</a>
                </li>
                <li>
                  <a href="/pricing" className="hover:text-blue-500">Pricing</a>
                </li>
                <li>
                  <a href="/support" className="hover:text-blue-500">Support</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            {/* Hamburger Icon (Always Present) */}
            <button className="text-gray-600" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hamburger Menu (Grid Layout) */}
      <div
        className={`absolute top-20  right-0 w-[95%] md:w-[600px] rounded-[5px] bg-white shadow-lg transition-[max-height] duration-300 ease-in-out overflow-hidden ${isOpen ? "" : "max-h-0"
          }`}
      >
        {/* Default Elements in Grid */}
        <ul className="p-4 grid grid-cols-2 gap-4 text-gray-700 text-left md:hidden">
          <li>
            <a href="/Signup" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}>
              Signup
            </a>
          </li>
          <li>
            <a href="/about" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}>
              Products
            </a>
          </li>
          <li>
            <a href="/pricing" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}>
              Pricing
            </a>
          </li>
          <li className="col-span-1 ">
            <a href="/support" className="block hover:text-blue-500" onClick={() => setIsOpen(false)}>
              Support
            </a>
          </li>
        </ul>
        {/* Border Line */}

        <hr className="border-gray-300  md:hidden" />

        <ul className="p-4 grid grid-cols-2 gap-4 text-gray-700">
          {/* Extra Elements (Always Inside Hamburger) */}

          <li>
            <a href="/" className="block flex items-center " onClick={() => setIsOpen(false)}>
              <Image src={"/kite-logo.svg"} width={30} height={10}alt=""/>
              Kite
            </a>
          </li>
          <li>
            <a href="/" className="block flex items-center" onClick={() => setIsOpen(false)}>
            <Image src={"/console.svg"} width={30} height={10}alt=""/>
              
              Console
            </a>
          </li>
          <li>
            <a href="/" className="block flex items-center" onClick={() => setIsOpen(false)}>
            <Image src={"/kite-connect.svg"} width={30} height={10}alt=""/>
             
              Kite Connect
            </a>
          </li>
          <li>
            <a href="/" className="block flex items-center" onClick={() => setIsOpen(false)}>
            <Image src={"/coin.svg"} width={30} height={10}alt=""/>
              
              Coin
            </a>
          </li>
          <li>
            <a href="/console" className="block flex items-center" onClick={() => setIsOpen(false)}>
            <Image src={"/varsity.png"} width={30} height={10}alt=""/>
            Varsity
            </a>
          </li>
          <li>
            <a href="/" className="block flex items-center" onClick={() => setIsOpen(false)}>
            <Image src={"/tqna.png"} width={30} height={10}alt=""/>
            Trading Q&A
            </a>
          </li>
        </ul>
        <hr className="border-gray-300  " />
        <ul className="p-4 grid grid-cols-2 gap-4 text-gray-500 text-[15px] md:bg-gray-100">
          {/* Extra Elements (Always Inside Hamburger) */}
          <li className="text-gray-900 text-[18px]">
            Utilities
          </li>
          <li className="text-gray-900 text-[18px]">
            Updates
          </li>
          <li>
            <a href="/kite" className="block" onClick={() => setIsOpen(false)}>
              Brokerage Calculator
            </a>
          </li>
          <li>
            <a href="/" className="block " onClick={() => setIsOpen(false)}>
              Z-Connect blog
            </a>
          </li>
          <li>
            <a href="/" className="block" onClick={() => setIsOpen(false)}>
              Margin calculator
            </a>
          </li>
          <li>
            <a href="/console" className="block" onClick={() => setIsOpen(false)}>
              Pulse News
            </a>
          </li>
          <li>
            <a href="/" className="block" onClick={() => setIsOpen(false)}>
              Holiday calendar
            </a>
          </li>
          <li>
            <a href="/" className="block" onClick={() => setIsOpen(false)}>
              Circulars / Bulletin
            </a>
          </li>
          <li>
            <a href="/" className="block" onClick={() => setIsOpen(false)}>
              Markets
            </a>
          </li>
          <li>
            <a href="/" className="block" onClick={() => setIsOpen(false)}>
              IPOs
            </a>
          </li>
        </ul>



      </div>
    </div>
  );
}
