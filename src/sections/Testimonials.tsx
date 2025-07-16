import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Luyen Dong",
    position: "Lead Teach @ GammaX",
    text: "Chris was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Minh Duc",
    position: "Front-end Dev @ EngineerPro",
    text: "Working with Chris was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Olivia Green",
    position: "CEO @ Horse Pizza",
    text: "Chris nailed it. He brought our designs to life better than we imagined. Everything looks and feels spot-on — and he was super responsive throughout the process.",
    avatar: memojiAvatar2,
  },
  {
    name: "David Humphrey",
    position: "Professor @ Seneca Polytechnic",
    text: "Chris consistently stood out in my classes — not just for his technical skills, but also for his curiosity and willingness to go beyond the coursework. He often helped his peers and showed a strong grasp of both theory and practical application. I'm confident he'll do well in any development role he takes on.",
    avatar: memojiAvatar4,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="container py-16 lg:py-24">
      <SectionHeader
        eyebrow="Happy Client"
        title="What Clients Say about Me"
        description="Don't just take my word for it. See what my clients have to say about my
        work"
      />
      <div className="mt-16 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4">
        <div className="flex gap-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
          {[...new Array(2)].map((_, id) => (
            <Fragment key={id}>
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  layout="rows"
                  className="py-11 max-w-xs md:max-w-md md:p-8 hover:-rotate-3 transition duration-300"
                >
                  <div className="grid grid-rows-[1fr_2fr] max-w-full">
                    <div className="flex items-center mb-4 gap-4 flex-shrink-0 lg:-mb-20 lg:h-20">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="size-14 bg-gray-700 rounded-full inline-flex items-center justify-center mr-4"
                      />
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </div>
                </Card>
              ))}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
