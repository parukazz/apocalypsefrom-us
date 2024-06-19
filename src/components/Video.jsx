import Title from "./Title";
import VideoCard from "./VideoCard";
import MV from "../assets/thumbnail-mv.jpg";
import DanceVideo from "../assets/thumbnail-dancevideo.jpg";
import DancePractice from "../assets/thumbnail-dancepractice.jpg";
import Highlight from "../assets/thumbnail-highlight.jpg";
import Propose from "../assets/thumbnail-propose.jpg";

const Video = () => {
  return (
    <section id="video">
      <div className="py-24 lg:py-36 px-6 md:px-12 mx-auto">
        <div className="flex flex-col md:flex-row gap-7">
          <div>
            <div className="flex mb-10">
              <Title>VIDEO</Title>
            </div>
            <div className="font-clashgrotesk mb-10">
              <h2 className="h2 uppercase">
                all music
                <br />
                video
              </h2>
            </div>
            <VideoCard
              thumbnail={MV}
              title={`BON VOYAGE ~ MUSIC VIDEO`}
              link={`https://www.youtube.com/watch?v=RPNaYj6etb8&list=PLmNaKWy1cIoGEFew0LF-Vzj3TR_jXwjoi&index=4&pp=iAQB`}
            />
          </div>
          <div className="flex flex-col gap-7">
            <div className="flex flex-col md:flex-row gap-7">
              <VideoCard
                thumbnail={DanceVideo}
                title={`BON VOYAGE ~ DANCE VIDEO (MV VERSION)`}
                link={`https://www.youtube.com/watch?v=HmNGrknGGxI&list=PLmNaKWy1cIoGEFew0LF-Vzj3TR_jXwjoi&index=8&pp=iAQB`}
              />
              <VideoCard
                thumbnail={DancePractice}
                title={`BON VOYAGE ~ DANCE VIDEO`}
                link={`https://www.youtube.com/watch?v=HmNGrknGGxI&list=PLmNaKWy1cIoGEFew0LF-Vzj3TR_jXwjoi&index=8&pp=iAQB`}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-7">
              <VideoCard
                thumbnail={Highlight}
                title={`APOCALYPSE FROM US ~ HIGHLIGHT MEDLEY`}
                link={`https://www.youtube.com/watch?v=86gzq0HdNKE&list=PLmNaKWy1cIoGEFew0LF-Vzj3TR_jXwjoi&index=6&pp=iAQB`}
              />
              <VideoCard
                thumbnail={Propose}
                title={`PROPOSE ~ SHOWCASE VERSION`}
                link={`https://www.youtube.com/watch?v=82GU0B7Fmpc&list=PLmNaKWy1cIoGEFew0LF-Vzj3TR_jXwjoi&index=12&pp=iAQB`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
