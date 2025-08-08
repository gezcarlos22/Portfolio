import { blogPosts } from "@/data";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

const CardBlog = () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:max-w-full lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Link
              href={`/blogDetail/${post.id}`}
              key={post.id}
              title={post.title}
            >
              <div
                key={index}
                className="card-zoom-animation overflow-hidden rounded-3xl rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden p-6 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="relative mb-4">
                    <Image
                      className="w-full h-full object-cover rounded-2xl"
                      src={post.img}
                      alt={post.title}
                      width={400}
                      height={250}
                      style={{ width: "100%", height: "auto" }}
                    />

                    <div className="absolute left-4 top-4">
                      <span className="rounded-full bg-purple px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-900">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <span className="block text-sm font-semibold uppercase tracking-widest text-gray-400">
                    {post.date}
                  </span>
                  <p className="mt-2 text-xl font-bold text-white line-clamp-2">
                    {post.title}
                  </p>
                  <p className="mt-4 text-lg text-[#BEC1DD] line-clamp-3">
                    {post.description}
                  </p>
                </div>

                <div className="flex justify-end items-center mt-6">
                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-l md:text-s text-m text-purple">
                      Check out this blog
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardBlog;
