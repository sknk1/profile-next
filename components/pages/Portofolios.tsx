import Image from "next/image";

export default function Portofolios() {
  const portoData = [
    {
      id: 1,
      name: "",
    },
  ];

  return (
    <>
      <div className="container mx-auto flex min-h-screen flex-col gap-10 ">
        <div className="w-full">
          <h1 className="text-center font-bold leading-tight lg:text-left lg:leading-snug">
            What i’ve done😋
          </h1>
        </div>

        {/* Porto container */}
        <div className="w-full">
          <div className="flex flex-row flex-wrap justify-center gap-10 lg:gap-5 xl:gap-10">
            {/* Porto item */}
            <div className="flex w-full flex-row flex-wrap overflow-hidden rounded-3xl border-2 border-gray-light-custom bg-gray-custom lg:w-[48%]">
              <div className="relative h-[200px] w-full xl:h-full xl:w-1/2">
                <Image
                  className="rounded-3xl object-cover"
                  src="/images/porto-1.jpg"
                  alt="contact-image"
                  fill
                />
              </div>
              <div className="flex min-h-[250px] w-full flex-col justify-between p-5 lg:min-h-[300px] xl:w-1/2">
                <h3>There is more than you know</h3>
                <p className="portofolio-desc">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard
                </p>
                <a href="#">
                  Read More <i className="las la-external-link-alt"></i>
                </a>
              </div>
            </div>

            {/* Porto item */}
            <div className="flex w-full flex-row flex-wrap overflow-hidden rounded-3xl border-2 border-gray-light-custom bg-gray-custom lg:w-[48%]">
              <div className="relative h-[200px] w-full xl:h-full xl:w-1/2">
                <Image
                  className="rounded-3xl object-cover"
                  src="/images/porto-2.jpg"
                  alt="contact-image"
                  fill
                />
              </div>
              <div className="flex min-h-[250px] w-full flex-col justify-between p-5 lg:min-h-[300px] xl:w-1/2">
                <h3>Lorem Porto 2</h3>
                <p className="portofolio-desc">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <a href="#">
                  Read More <i className="las la-external-link-alt"></i>
                </a>
              </div>
            </div>

            {/* Porto item */}
            <div className="flex w-full flex-row flex-wrap overflow-hidden rounded-3xl border-2 border-gray-light-custom bg-gray-custom lg:w-[48%]">
              <div className="relative h-[200px] w-full xl:h-full xl:w-1/2">
                <Image
                  className="rounded-3xl object-cover"
                  src="/images/porto-2.jpg"
                  alt="contact-image"
                  fill
                />
              </div>
              <div className="flex min-h-[250px] w-full flex-col justify-between p-5 lg:min-h-[300px] xl:w-1/2">
                <h3>Lorem Porto 2</h3>
                <p className="portofolio-desc">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <a href="#">
                  Read More <i className="las la-external-link-alt"></i>
                </a>
              </div>
            </div>

            {/* Porto item */}
            <div className="flex w-full flex-row flex-wrap overflow-hidden rounded-3xl border-2 border-gray-light-custom bg-gray-custom lg:w-[48%]">
              <div className="relative h-[200px] w-full xl:h-full xl:w-1/2">
                <Image
                  className="rounded-3xl object-cover"
                  src="/images/porto-1.jpg"
                  alt="contact-image"
                  fill
                />
              </div>
              <div className="flex min-h-[250px] w-full flex-col justify-between p-5 lg:min-h-[300px] xl:w-1/2">
                <h3>There is more than you know</h3>
                <p className="portofolio-desc">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard
                </p>
                <a href="#">
                  Read More <i className="las la-external-link-alt"></i>
                </a>
              </div>
            </div>

            {/* Porto item */}
            <div className="flex w-full flex-row flex-wrap overflow-hidden rounded-3xl border-2 border-gray-light-custom bg-gray-custom lg:w-[48%]">
              <div className="relative h-[200px] w-full xl:h-full xl:w-1/2">
                <Image
                  className="rounded-3xl object-cover"
                  src="/images/porto-1.jpg"
                  alt="contact-image"
                  fill
                />
              </div>
              <div className="flex min-h-[250px] w-full flex-col justify-between p-5 lg:min-h-[300px] xl:w-1/2">
                <h3>There is more than you know</h3>
                <p className="portofolio-desc">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard
                </p>
                <a href="#">
                  Read More <i className="las la-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
