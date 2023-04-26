import Image from "next/image";

export default function Contact() {
  return (
    <>
      <div className="container mx-auto flex flex-row flex-wrap">
        <div className="flex w-full flex-col gap-10 lg:w-2/3">
          <h1 className="text-center font-bold leading-tight lg:text-left lg:leading-snug">
            You can reach me any time🙂{" "}
          </h1>
          <div className="flex flex-col gap-5">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
            </p>
            <p>LinkedIn : GREG</p>
            <p>GIthub : GGG</p>
            <p>Email : GGG</p>
            <div className="flex flex-col gap-5 md:flex-row">
              <a
                href="#about-section"
                className="rounded bg-yellow-custom px-4 py-3 font-bold text-black"
              >
                About me
              </a>
              <a
                href="#portofolios-section"
                className="rounded bg-gray-custom px-4 py-3 font-bold"
              >
                😮 Let’s see portfolios
              </a>
            </div>
          </div>
        </div>
        <div className="relative h-[450px] w-0 lg:w-1/3">
          <Image
            className="object-contain"
            src="/images/contact.png"
            alt="contact-image"
            fill
          />
        </div>
      </div>
    </>
  );
}
