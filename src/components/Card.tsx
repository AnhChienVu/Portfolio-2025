import React, { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface CardProps extends ComponentPropsWithoutRef<"div"> {
  layout?: "rows" | "cols"; // Define the layout prop
}

function Card({ className, children, layout, ...others }: CardProps) {
  return (
    <div
      className={twMerge(
        "bg-gray-800 rounded-3xl overflow-hidden border border-gray-700 shadow-lg px-6 md:pt-4 md:px-10",
        className
      )}
      {...others}
    >
      {layout === "rows" ? (
        <div className="lg:relative">{children}</div>
      ) : (
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:relative">
          {children}
        </div>
      )}
    </div>
  );
}

export default Card;
