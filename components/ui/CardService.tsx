import { serviceData } from "@/data";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

const CardService = () => {
  return (
    <section>
      <div className="mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:max-w-full lg:grid-cols-4">
        {serviceData.map((post, index) => (
          <Link href="/service" key={index} title="">
            <div
              key={index}
              className="card-zoom-animation overflow-hidden rounded-3xl rounded-2xl  shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden p-6 flex flex-col justify-between h-full "
            >
              <div>
                <div className="relative mb-4">
                  <div className="flex justify-center items-center w-20 h-20 bg-white rounded-2xl">
                    <Image
                      className="w-[80%]"
                      src={post.icon}
                      alt={post.title}
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <p className="mt-2 text-xl font-bold text-white line-clamp-2">
                  {post.title}
                  {post.title2}
                </p>
                <p className="mt-4 text-lg text-[#BEC1DD]">
                  {post.description}
                </p>
              </div>

              <div className="flex justify-end items-center mt-6">
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-l md:text-s text-m text-purple">
                    Check out this service
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CardService;
