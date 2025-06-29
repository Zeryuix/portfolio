import Image from "next/image";
import ImageCollection from "./ImageCollection";

export default function Footer() {
  return (
    <div className="w-full bg-[#0f0f17] py-6 flex flex-col items-center">
      <div className="flex items-center gap-4 mb-4 mt-[22px]">
        <a
          href="https://github.com/zeryuix"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-secondary transition-colors"
        >
          <Image
            src={ImageCollection.githubIcon}
            alt="GitHub"
            width={24}
            height={24}
          />
        </a>
        <a
          href="mailto:leo.mermet91@gmail.com"
          className="text-white hover:text-secondary transition-colors"
        >
          <Image
            src={ImageCollection.mailIcon}
            alt="Email"
            width={24}
            height={24}
          />
        </a>
      </div>
      <p className="text-white">LÉO MERMET ©2025</p>
    </div>
  );
}
