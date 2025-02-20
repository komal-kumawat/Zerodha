import Logo from "./Logo";
import Image from "next/image";
export default function Footer() {
  const Twitter_url = "/twitter.webp";
  const facebook_url = "/Facebook.webp";
  const Instagram_url = "/instagram.webp";
  const Linkedin_url = "/linkedin.webp";
  const telegram_url = "/telegram.webp";
  const whatsapp_url = "/whatsapp.webp";
  const youtube_url = "/youtube.webp"
  return (
    <footer className="bg-gray-100 p-[50px]  flex justify-between text-left gap-6 bottom-0 w-full md:px-[60px] pt-[100px]">
      <div className="text-gray-500 text-[14px] p-4">
        <Logo />
        <br></br>
        <p>© 2010 - 2025, Zerodha <br></br>Broking Ltd.</p>
        <p>All rights reserved.</p>
        <br></br>
        <div className="text-gray-800 flex flex-wrap gap-4"> 
          <Image src={Twitter_url} alt="Twitter-url" width={20} height={20} />
          <Image src={facebook_url} alt="Facebook-url" width={20} height={20} />
          <Image src={Instagram_url} alt="Instagram-url" width={20} height={20} />
          <Image src={Linkedin_url} alt="Linkedin-url" width={20} height={20} />

        </div>
        <hr className="border-gray-300  mt-2 mb-2 "></hr>
        <div className="text-gray-800 flex flex-wrap gap-4">
          <Image src={youtube_url} alt="" width={28} height={24} />
          <Image src={whatsapp_url} alt="" width={28} height={20} />
          <Image src={telegram_url} alt="Telegram-url" width={20} height={20} />
        </div>
      </div>
      <div className="flex flex-col text-gray-500">
        <div className="text-gray-700 text-[18px]">Company</div>
        <br></br>
        <a href="/" >About</a>
        <a href="/">Products</a>
        <a href="/">Pricing</a>
        <a href="">Referral programme</a>
        <a href="">Careers</a>
        <a href="">Zerodha.tech
        </a>
        <a href="">Open source
        </a>
        <a href="">Press & media</a>
        <a href="">Zerodha Cares (CSR)</a>
      </div>
      <div className="flex flex-col text-gray-500">
        <div className="text-gray-700 text-[18px]">Support</div>
        <br></br>
        <a href="/">Contact us
        </a>
        <a href="">Support portal
        </a>
        <a href="">Z-Connect blog</a>
        <a href="">List of charges
        </a><a href="">Downloads & resources</a>
        <a href="">Videos
        </a>
        <a href="">Market overview</a>
        <a href="">How to file a complaint?
        </a>
        <a href="">Status of your</a>
        <a href="">complaints
        </a>
      </div>
      <div className="flex flex-col text-gray-500">
        <div className="text-gray-700 text-[18px]">Account</div>
        <br></br>
        <a href="">Open an account
        </a>
        <a href="">Fund transfer
        </a>
      </div>
    </footer>
  );
}
