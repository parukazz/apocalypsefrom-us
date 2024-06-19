import playbtn from "../assets/btn-play.svg";

const Hero = () => {
  return (
    <div className="mt-[89px] mx-auto px-6 py-8 md:py-12 lg:py-16 font-clashgrotesk uppercase">
      <div className="">
        <div className="flex flex-col-reverse md:flex-row justify-between items-end mb-4 lg:mb-10 gap-6">
          <div className="w-full">
            <h1 className="h1">apocalypse :</h1>
          </div>
          <div className="flex-none pb-3 md:pb-3 lg:pb-5 border-b-4 stroke-transparent">
            <h3 className="h3 light-grey">8th mini album</h3>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row md:gap-40 justify-between items-start md:items-center">
          <div className="flex w-full items-center md:gap-10">
            <div className="flex flex-none items-center">
              <a
                href="https://www.youtube.com/watch?v=RPNaYj6etb8&pp=ygUXYm9uIHZveWFnZSBkcmVhbWNhdGNoZXI%3D"
                target="_blank"
                className="-ml-5 hover:scale-90 transition duration-300"
              >
                <img
                  className="scale-[0.65] md:scale-75"
                  src={playbtn}
                  alt="Play Button"
                />
              </a>
              <div className="flex gap-2 items-end -ml-2 lg:ml-0">
                <h3 className="h3 light-grey">bon voyage</h3>
                <h4 className="h4 text-lime">(title track)</h4>
              </div>
            </div>
            <div className="hidden md:inline-flex flex-auto w-full h-[2px] bg-zinc-700"></div>
          </div>
          <div className="flex-none flex justify-end">
            <div>
              <h1 className="h1 text-lime">from us</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
