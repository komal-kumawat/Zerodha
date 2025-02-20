import Image from "next/image"
export default function Logo(){
    return  <div>
    {/* Logo */}
    <Image src="/logo.svg" alt="ZERODHA" width={150} height={50} priority />
  </div>

}