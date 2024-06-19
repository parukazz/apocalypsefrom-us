import Title from "./Title";
import Album from "../assets/bonvoyage.webp";
import { useRef } from "react";
import { ScrollParallax } from "react-just-parallax";
import { tracklist } from "../constants";
import Tracklist from "./Tracklist";

const About = () => {
  const parallaxRef = useRef(null);

  return (
    <section id="about">
      <div className="py-24 lg:py-36 px-6 md:px-12 mx-auto" ref={parallaxRef}>
        <div className="flex flex-col lg:flex-row gap-7">
          <div className="w-full">
            <div className="flex mb-10">
              <Title>ABOUT ALBUM</Title>
            </div>
            <div className="font-clashgrotesk mb-10">
              <h2 className="h2">
                Apocalypse
                <br />
                Trilogy
              </h2>
            </div>
            <div className="text-zinc-300 leading-relaxed">
              <p className="mb-4">
                &quot;Apocalypse: From Us&quot; is the 8th Mini Album by
                Dreamcatcher. It was released on May 24, 2023 with{" "}
                <span className="text-lime font-semibold">
                  &quot;BON VOYAGE&quot;
                </span>{" "}
                serving as the title track.
              </p>
              <p>
                The physical album features in 4 versions total: Limited Edition{" "}
                <span className="text-lime font-semibold">&quot;W&quot;</span>,
                Normal Edition{" "}
                <span className="text-lime font-semibold">&quot;A&quot;</span>,{" "}
                <span>&quot;Y&quot;</span> and a special{" "}
                <span className="text-lime font-semibold">
                  &quot;Platform&quot;
                </span>{" "}
                version. This is the third and last installment of the
                Apocalypse Era.
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="rounded-2xl border-4 border-lime overflow-hidden">
              <img src={Album} alt="Album Cover" />
            </div>
          </div>
          <div className="md:w-1/2 lg:w-3/4">
            <ScrollParallax>
              <div className="bg-white bg-opacity-25 backdrop-blur-xl p-12 font-clashgrotesk rounded-xl border-2 border-zinc-500 mt-10">
                <div className="flex items-center gap-5">
                  <h4 className="h4 text-lime  uppercase">track list</h4>
                  <div className="w-[100px] h-[4px] bg-lime"></div>
                </div>
                <div className="text-zinc-300 mt-10">
                  {tracklist.map((item) => (
                    <div className="" key={item.id}>
                      <Tracklist
                        order={item.order}
                        title={item.title}
                        duration={item.duration}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </ScrollParallax>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
