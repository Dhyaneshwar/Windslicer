import { AuroraBackground } from "../aceternityUi/aurora-background";
import {
  header,
  paddleMap1,
  paddleMap2,
  paddleMap3,
  paddleMap4,
  paddleMap5,
  paddleMap6,
  paddleMap7,
  paddleMap8,
  para1,
} from "../constant/gallery";
import LensWrapper from "./LensWrapper";

function Gallery() {
  const paddleMaps = [
    paddleMap1,
    paddleMap2,
    paddleMap3,
    paddleMap4,
    paddleMap5,
    paddleMap6,
  ];

  return (
    <AuroraBackground>
      <div className="md:px-20 px-8">
        <div className="max-md:text-xl text-5xl font-bold mt-10 mb-4 text-center">
          {header}
        </div>
        <p className="max-md:text-sm text-2xl text-justify">{para1}</p>

        <br />

        <div className="space-y-6">
          {paddleMaps.map((map, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className="flex max-xl:flex-col justify-around items-center gap-6"
              >
                <div
                  className={`max-md:text-sm text-2xl text-justify flex-1 max-xl:order-first ${
                    isEven ? "" : "order-last max-xl:order-first"
                  }`}
                >
                  {map.message}
                </div>
                <LensWrapper src={map.src} className="basis-2/5" />
              </div>
            );
          })}
        </div>
        <br />

        <div className="flex justify-around gap-4 max-xl:hidden">
          <LensWrapper src={paddleMap7.src} />
          <LensWrapper src={paddleMap8.src} />
        </div>

        <div className="text-2xl text-justify flex-1 max-xl:hidden block">
          {paddleMap7.message} {paddleMap8.message}
        </div>

        <div className="max-xl:block max-xl:mb-4 hidden">
          <p className="max-md:text-sm text-2xl text-justify mb-4">
            {paddleMap7.message}
          </p>
          <LensWrapper
            src={paddleMap7.src}
            divClassName="flex justify-center"
          />
        </div>

        <div className="max-xl:block max-xl:mb-4 hidden">
          <p className="max-md:text-sm text-2xl text-justify mb-4">
            {paddleMap8.message}
          </p>
          <LensWrapper
            src={paddleMap8.src}
            divClassName="flex justify-center"
          />
        </div>

        <br />
      </div>
    </AuroraBackground>
  );
}

export default Gallery;
