import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

function Card({
  className,
  children,
  layout,
}: PropsWithChildren<{ className?: string; layout?: string }>) {
  return (
    <div>
      <div
        className={twMerge(
          "bg-gray-800 rounded-3xl overflow-hidden border border-gray-700 shadow-lg px-6 md:pt-12 md:px-10",
          className
        )}
      >
        {layout === "rows" ? (
          <div className="lg:relative">{children}</div>
        ) : (
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:relative">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
