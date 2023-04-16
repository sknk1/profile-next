import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container relative m-auto flex h-screen flex-col flex-wrap items-center justify-center gap-7 px-3 text-center md:gap-10">
        <h1 className="font-bold leading-snug">
          Hey there 👋
          <br />I am Gregorius
        </h1>
        <p className="w-2/3 md:w-2/5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
          omnis pariatur, ex id, illum repellat commodi perferendis deserunt
          debitis inventore odio aut quod dolorem nostrum a ad iste, quam sunt.
        </p>
        <div className="flex flex-col gap-5 md:flex-row">
          <a
            href="#"
            className="rounded bg-yellow-custom px-4 py-3 font-bold text-black"
          >
            About me
          </a>
          <a href="#" className="rounded bg-gray-custom px-4 py-3 font-bold">
            😮 Let’s see portfolios
          </a>
        </div>
        <div className="absolute hidden md:-right-7 md:block md:h-[250px] md:w-[250px]  lg:h-[300px] lg:w-[300px] xl:-right-28 xl:h-[500px] xl:w-[500px]">
          <Image
            className="object-cover"
            src="/images/home-hand.png"
            alt="home-hand-image"
            fill
          />
        </div>
      </div>
    </>
  );
}
