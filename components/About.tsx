import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="container m-auto flex flex-col justify-center gap-10 xl:h-screen">
        <div className="flex flex-row flex-wrap items-center justify-center gap-10 lg:gap-0">
          <div className="relative w-full lg:w-1/3">
            <div className="m-auto h-[250px] w-[250px] rounded-full bg-yellow-custom lg:h-[280px] lg:w-[280px] xl:h-[350px] xl:w-[350px]"></div>
            <Image
              className="profile-image"
              src="/images/profile.png"
              alt="profile-image"
              fill
            />
          </div>
          <div className="w-full lg:w-2/3 lg:px-10">
            <h1 className="text-center font-bold leading-tight lg:text-left lg:leading-snug">
              I’m Gregorius Ricky Yuuki
              <span className="text-yellow-custom"> Bakcend </span> and
              <span className="text-yellow-custom"> Frontend </span>
              Developer
            </h1>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="">
            <p className="pb-2 text-2xl font-bold">Xtremax</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
              impedit labore ab! Ipsum voluptatum veniam asperiores sit
              perferendis neque provident accusantium possimus, laborum minima
              illum sunt odit itaque, sed autem!
            </p>
          </div>
          <div className="">
            <p className="pb-2 text-2xl font-bold">Vistek</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
              impedit labore ab! Ipsum voluptatum veniam asperiores sit
              perferendis neque provident accusantium possimus, laborum minima
              illum sunt odit itaque, sed autem!
            </p>
          </div>
          <div className="">
            <p className="pb-2 text-2xl font-bold">Vistek</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
              impedit labore ab! Ipsum voluptatum veniam asperiores sit
              perferendis neque provident accusantium possimus, laborum minima
              illum sunt odit itaque, sed autem!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
