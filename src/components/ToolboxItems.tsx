import React, { Fragment } from "react";
import TechIcon from "./TechIcon";
import { twMerge } from "tailwind-merge";

function ToolboxItems({
  toolboxItems,
  className,
  itemsWrapperClassName,
  animateDirection,
}: {
  toolboxItems: { title: string; iconType: React.ElementType }[];
  className?: string;
  itemsWrapperClassName?: string;
  animateDirection?: "left" | "right";
}) {
  const animateClass =
    animateDirection === "left" ? "animate-move-left" : "animate-move-right";

  return (
    <div
      className={twMerge(
        "flex py-0.5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={twMerge(
          `flex flex-none gap-6 pr-6 ${animateClass} [animation-duration:30s]`,
          itemsWrapperClassName
        )}
      >
        {[...new Array(2)].map((_, id) => (
          <Fragment key={id}>
            {toolboxItems.map((item, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-2 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
              >
                <TechIcon component={item.iconType} />
                <span className="font-semibold">{item.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default ToolboxItems;
