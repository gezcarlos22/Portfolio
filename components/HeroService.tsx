import { serviceData } from "@/data";
import Image from "next/image";

const HeroService = () => {
  return (
    <section className="pt-10">
      {/* Contenedor principal sin limitación de ancho */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        {serviceData.map((service, index) => (
          <div key={service.id} className="mb-20 space-y-12 w-full">
            {/* Contenedor del servicio principal */}
            <div
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-6`}
            >
              {/* Div de la imagen (mantenemos el ancho mitad) */}
              <div className="overflow-hidden rounded-3xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 p-2 flex flex-col justify-between h-full w-full lg:w-1/2 lg:p-6">
                <div className="relative">
                  <Image
                    className="w-full h-full object-cover rounded-2xl"
                    src={service.imageUrl}
                    alt={service.title}
                    width={800}
                    height={600}
                    style={{ width: "100%", height: "auto" }}
                    priority
                  />
                </div>
              </div>

              {/* Div del texto (mantenemos el ancho mitad) */}
              <div className="flex flex-col items-center justify-center w-full lg:w-1/2">
                <a href="#service">
                  <h1 className="heading">
                    {service.title}{" "}
                    <span className="text-purple">{service.title2}</span>
                  </h1>
                </a>
                <p className="text-center md:tracking-wider my-4 text-lg md:text-xl">
                  {service.description}
                </p>
                {/*<Link
                  href={`/serviceDetail/${service.id}`}
                  title={service.title}
                >
                  <MagicButton
                    title="Show my work"
                    icon={<FaLocationArrow />}
                    position="right"
                  />
                </Link>*/}
              </div>
            </div>

            {/* Contenedor de tarjetas de contenido - ahora ocupa todo el ancho */}
            <div className="w-full">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {service.content.map((contentItem, contentIndex) => (
                  <div
                    key={`${service.id}-${contentIndex}`}
                    className="card-zoom-animation overflow-hidden rounded-3xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 p-6 flex flex-col justify-between h-full"
                  >
                    <div>
                      <p className="mt-2 text-xl font-bold text-white line-clamp-2">
                        {contentItem.title}
                      </p>
                      <p className="mt-4 text-lg text-[#BEC1DD]">
                        {contentItem.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroService;
