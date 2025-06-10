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
      <div className="text-5xl font-bold mt-10 mb-4">{header}</div>

      <div className="px-20">
        <p className="text-2xl text-justify">{para1}</p>

        <br />

        <div className="space-y-6">
          {paddleMaps.map((map, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className="flex justify-around items-center gap-6"
              >
                <div
                  className={`text-2xl text-justify flex-1 ${
                    isEven ? "" : "order-last"
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

        <div className="flex justify-around gap-4">
          <LensWrapper src={paddleMap7.src} />
          <LensWrapper src={paddleMap8.src} />
        </div>

        <div className="text-2xl text-justify flex-1">
          {paddleMap7.message} {paddleMap8.message}
        </div>

        <br />
      </div>
    </AuroraBackground>
  );
}

export default Gallery;
