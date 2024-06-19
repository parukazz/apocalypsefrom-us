import bgAlbum from "../assets/bg-album.svg";
import eclipseBlur from "../assets/eclipse-blur.svg";

const Cover = () => {
  return (
    <div className="relative mx-6 px-6 pb-10 border-r-2 border-l-2 border-zinc-900 flex justify-center items-center overflow-hidden">
      <div className="absolute -z-20 -top-70 left-0 right-0 bottom-0">
        <img className="" src={eclipseBlur} alt="" />
      </div>
      <div className="flex justify-center items-center">
        <img
          className="scale-150 md:scale-125"
          src={bgAlbum}
          alt="Album Cover"
        />
      </div>
    </div>
  );
};

export default Cover;
