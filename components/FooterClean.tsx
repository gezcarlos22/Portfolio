import { socialMedia } from "@/data";
import Image from "next/image";

const FooterClean = () => {
  return (
    <footer className="w-full pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          width={1920}
          height={200}
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex md:flex-row flex-col justify-between items-center space-y-4 md:space-y-0">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Gez Carlos Enrique
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterClean;
