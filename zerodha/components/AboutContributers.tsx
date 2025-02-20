import { useState } from "react";
import Image from "next/image";

interface AboutContributorsProps {
  name: string;
  position: string;
  Bio: string;
  ImageLink: string;
}

export default function AboutContributors({
  name,
  position,
  ImageLink,
  Bio,
}: AboutContributorsProps) {
  const [showBio, setShowBio] = useState(false);

  return (
    <div className=" p-6 flex items-center flex-col">
      <Image
        src={ImageLink}
        alt={name}
        width={80}
        height={80}
        className="rounded-full w-[70%]"
      />
      <div className="font-semibold mt-2">{name}</div>
      <div className="text-gray-500">{position}</div>
      <div className="mt-2">
        <button
          onClick={() => setShowBio(!showBio)}
          className="text-gray-600 flex gap-2"
        >
            Bio
            <Image src={"/downArrow.png"} alt="" width={20} height={3}/>
        </button>
      </div>
      {showBio && <div className="mt-2 text-gray-700">{Bio}</div>}
    </div>
  );
}
