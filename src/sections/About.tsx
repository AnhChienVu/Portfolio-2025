import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavasriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import TechIcon from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: JavasriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS5",
    iconType: CssIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
];

const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left: "5%",
    top: "0%",
  },
  {
    title: "Traveling",
    emoji: "✈️",
    left: "50%",
    top: "0%",
  },
  {
    title: "Cooking",
    emoji: "🍳",
    left: "10%",
    top: "35%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "60%",
    top: "35%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "55%",
    top: "70%",
  },
  {
    title: "Music",
    emoji: "🎶",
    left: "0%",
    top: "70%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "20%",
    top: "100%",
  },
];

export const AboutSection = () => {
  return (
    <div className=" container py-20 lg:py-28">
      <SectionHeader
        eyebrow="About Me"
        title="A Glimps Into My World"
        description="Learn more about me, who I am, and what I do"
      />
      <div className="mt-20 flex flex-col gap-8">
        <div className="md:grid md:grid-cols-5 lg:grid-cols-3 md:gap-8 ">
          <Card className="h-[320px] md:col-span-2 lg:col-span-1" layout="rows">
            <CardHeader
              title="My Reads"
              description="Explore the books shaping my perspective"
              className="px-6 py-6 md:py-1"
            />
            <div className="w-40 mx-auto mt-8 md:mt-0 lg:mt-0">
              <Image src={bookImage} alt="Book Cover" />
            </div>
          </Card>

          <Card
            className="h-[320px] p-0 md:col-span-3 lg:col-span-2 mt-8 md:mt-0"
            layout="rows"
          >
            <CardHeader
              title="My Toolbox"
              description="Explore technologies and tools I use to craft"
              className="px-6 py-6 md:py-1 "
            />
            <ToolboxItems className="mt-6" toolboxItems={toolboxItems} />
            <ToolboxItems
              className="mt-6 "
              toolboxItems={toolboxItems}
              itemsWrapperClassName="-translate-x-1/2"
            />
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <Card
            className="h-[350px] p-0 flex flex-col md:col-span-3"
            layout="rows"
          >
            <CardHeader
              title="Beyond the Code"
              description="Explore my interests and hobbies beyond the digital realm"
              className="px-6 py-6"
            />
            <div className="relative flex-1 h-[130px]">
              {hobbies.map((hobby, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                  style={{ left: hobby.left, top: hobby.top }}
                >
                  <span className="font-medium text-gray-950 ">
                    {hobby.title}
                  </span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card
            className="h-[350px] md:p-0 sm:px-0 relative md:col-span-2"
            layout="rows"
          >
            <Image
              src={mapImage}
              alt="Map"
              className="h-[350px] w-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 outline outline-3 outline-gray-950/30 ">
              <Image src={smileMemoji} alt="Smile Memoji" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
