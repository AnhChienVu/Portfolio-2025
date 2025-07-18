import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const words = [
  "Performance",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User-friendly",
  "Maintainable",
  "Search Optimization",
  "Usable",
  "Responsive",
  "Cross-browser",
  "Progressive",
  "SEO",
  "Fast",
  "Lightweight",
  "Intuitive",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 -rotate-3 overflow-x-clip ">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 px-3">
        <div className="flex [mask-image:linear-gradient(to_right, transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_, id) => (
              <Fragment key={id}>
                {words.map((word, index) => (
                  <div key={index} className="flex gap-4 items-center">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <StarIcon className="size-6 text-gray-900 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
