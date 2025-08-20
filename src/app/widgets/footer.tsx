import VkImg from "@/images/footer/vk.svg";
import YoutubeImg from "@/images/footer/youtube.svg";
import OkImg from "@/images/footer/ok.svg";
import TelegramImg from "@/images/footer/telegram.svg";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="flex items-center justify-end px-20 py-10">
      <section className="flex w-[15%] items-center justify-between">
        <Image
          src={VkImg}
          alt="VkImg"
          className="rounded-md hover:bg-blue-500"
        />
        <Image
          src={YoutubeImg}
          alt="YoutubeImg"
          className="rounded-md hover:bg-blue-500"
        />
        <Image
          src={OkImg}
          alt="OkImg"
          className="rounded-md hover:bg-blue-500"
        />
        <Image
          src={TelegramImg}
          alt="TelegramImg"
          className="rounded-md hover:bg-blue-500"
        />
      </section>
    </footer>
  );
};
