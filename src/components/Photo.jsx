import Title from "./Title";
import { photos } from "../constants";

const Photo = () => {
  return (
    <section id="photo">
      <div className="py-24 lg:py-36 px-6 md:px-12 mx-auto">
        <div className="grid grid-flow-row-dense grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 md:gap-3">
          {/* Title Section */}
          <div className="col-span-2">
            <div className="flex mb-10">
              <Title>PHOTO</Title>
            </div>
            <div className="font-clashgrotesk mb-10">
              <h2 className="h2 uppercase">
                all photo
                <br />
                concept
              </h2>
            </div>
          </div>
          {photos.map((image) => (
            <div
              key={image.id}
              className={`${
                image.layout === "landscape"
                  ? "col-span-2"
                  : "lg:w-[280px] lg:h-[379px]"
              } border-2 border-lime rounded-xl overflow-hidden hover:scale-95 transition duration-500`}
            >
              <img
                className="w-full h-full object-cover hover:scale-125 hover:rotate-12 transition duration-500 ease-in-out"
                src={image.src}
                alt={image.alt}
              />
            </div>
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default Photo;
