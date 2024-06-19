
import playIcon from "../assets/btn-play.svg";

// eslint-disable-next-line react/prop-types
const VideoCard = ({ thumbnail, title, link }) => {
  return (
    <div className="">
      <div className="flex rounded-xl border-2 border-zinc-800 overflow-hidden relative justify-center items-center">
        <img src={thumbnail} alt="MV Thumbnail" />
        <a href={link} className="absolute hover:scale-110 transition duration-200" target="_blank">
          <img className="" src={playIcon} alt="play Button" />
        </a>
      </div>
      <div className="mt-8">
        <a href={link} className="h5 text-lg text-zinc-400">{title}</a>
      </div>
    </div>
  );
};

export default VideoCard;
