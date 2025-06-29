import Input from "./Input";
import Image from "next/image";
import ImageCollection from "./ImageCollection";
import Footer from "./Footer";

export default function Contact() {
  return (
    <div className="flex flex-col bg-black items-center pt-[40px]">
      <h2 className="text-white mb-[40px] font-semibold text-2xl">
        📩 Contact
      </h2>
      <p className="max-w-lg text-center mb-[40px]">
        Une opportunité, une question ou simplement envie d'échanger ? N'hésitez
        pas à me laisser un message, je vous répondrai rapidement.
      </p>
      <Input type="name" />
      <Input type="email" />
      <Input type="message" />
      <button className="mt-6 mb-20 px-4 py-3 bg-primary backdrop-blur-sm border rounded-lg hover:bg-primary/50 transition-all duration-300 text-black font-medium">
        <div className="flex flex-row items-center">
          <p className="font-semibold text-[20px]">Envoyer</p>
          <Image
            src={ImageCollection.sendIcon}
            alt="visualize icon"
            width={24}
            height={24}
            className="ml-2"
          />
        </div>
      </button>

      <a
        className="w-12 h-12 bg-secondary flex items-center justify-center z-10 mb-[-24px] cursor-pointer"
        href="#home"
      >
        <Image
          src={ImageCollection.upIcon}
          alt="go up icon"
          width={24}
          height={24}
          className="self-center"
        />
      </a>
      <Footer />
    </div>
  );
}
