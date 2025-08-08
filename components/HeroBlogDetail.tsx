import { blogPosts } from "@/data";
import Image from "next/image";

interface HeroBlogDetailProps {
  postId: string;
}

const HeroBlogDetail = ({ postId }: HeroBlogDetailProps) => {
  // Encuentra el post específico
  const post = blogPosts.find((post) => post.id === postId);

  if (!post) return <div>Post not found</div>;

  return (
    <section className="pt-20 mt-16">
      <div className="flex items-center justify-center flex-col text-center mb-10">
        <span className="rounded-full bg-purple px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-900 my-4">
          {post.category}
        </span>
        <h1 className="heading">
          <span className="text-purple">{post.title}</span>
        </h1>
        <p className="text-center md:tracking-wider my-4 text-sm md:text-lg lg:text-lg">
          {post.description}
        </p>
      </div>

      <div className="mx-auto mt-8 grid max-w-md grid-cols-1 gap-6 md:grid-cols-1 lg:mt-10 lg:max-w-full lg:grid-cols-1">
        <div className="overflow-hidden rounded-3xl rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden p-6 flex flex-col justify-between h-full">
          <div className="relative">
            <Image
              className="w-full h-full object-cover rounded-2xl"
              src={post.img}
              alt={post.title}
              width={800}
              height={400}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>

      <div
        dangerouslySetInnerHTML={{
          __html: post.contentText.replace(/className=/g, "class="),
        }}
      />
    </section>
  );
};

export default HeroBlogDetail;
