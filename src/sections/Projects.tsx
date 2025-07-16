import tummyTimePage from "@/assets/images/tummytime-image.png";
import watchHubPage from "@/assets/images/watchHub-image.png";
import expenseTrackerPage from "@/assets/images/expenseTracker-image.png";
import tripPlannerPage from "@/assets/images/tripplanner-image.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    company: "Tummy Time",
    year: "2024",
    title: "Web Appilaction to Track Newborn Care",
    results: [
      {
        title:
          "Refined the application’s UI/UX by collaborating with designers and stakeholders through planning and review sessions, leading to a 25% increase in task completion success during demonstrations",
      },
      {
        title:
          "Integrated AWS Cognito for secure authentication, ensuring full compliance with best practices in data privacy.",
      },
      {
        title:
          "Utilized Jest for unit testing to ensure reliability, achieving 80%+ test coverage and reducing functional bugs by 35% during QA reviews.",
      },
      {
        title:
          "Integrated an AI-powered chatbot into the application using a natural language processing API to provide real-time answers about baby care and app usage, boosting user interaction by 20%.",
      },
    ],
    link: "https://team-06-prj-666-winter-2025.vercel.app/",
    image: tummyTimePage,
  },
  {
    company: "Watch Hub",
    year: "2025",
    title: "A clone of Netflix for streaming movies and TV shows",
    results: [
      {
        title:
          "Developed a Netflix-style movie streaming interface called Watch Hub using Next.js, delivering fast, responsive, and SEO-optimized user experiences.",
      },
      {
        title:
          "Integrated external movie APIs to fetch and display dynamic film content, enabling users to browse and explore 1,000+ movie titles with real-time updates.",
      },
      {
        title:
          "Designed interactive UI components with Tailwind CSS and responsive layout techniques, improving accessibility and mobile performance across 95% of screen sizes.",
      },
    ],
    link: "https://watch-hub-five.vercel.app/login",
    image: watchHubPage,
  },
  {
    company: "Expense Tracker",
    year: "2025",
    title: "Expense tracking application",
    results: [
      {
        title:
          "Developed a full-stack expense tracking application enabling users to manage daily expenses and savings goals through a clean, responsive UI.",
      },
      {
        title:
          "Implemented a real-time budget sharing feature with Socket.IO, allowing users to instantly track and receive notifications on shared finances with partners or friends",
      },
      {
        title:
          "Integrated Firebase Authentication with Google sign-in, simplifying the login process and enhancing account security for users.",
      },
    ],
    link: "https://expense-tracker-beta-navy.vercel.app/",
    image: expenseTrackerPage,
  },
  {
    company: "Trip Planner",
    year: "2025",
    title: "AI integration and personalized user experience",
    results: [
      {
        title:
          "Developed a personalized AI-powered Trip Planner using Vite.js, allowing users to generate multi-day itineraries based on destination, travel purpose, and duration.",
      },
      {
        title:
          "Integrated GenAI to generate dynamic travel plans tailored to user preferences, improving planning efficiency and user satisfaction by 70% during testing.",
      },
      {
        title:
          "Implemented Google Authentication for seamless and secure user login, resulting in a 25% faster sign-in process compared to traditional email-based flows.",
      },
      {
        title:
          "Designed a clean, responsive UI with Tailwind CSS, ensuring accessibility and optimal performance across 100% of major mobile and desktop devices.",
      },
    ],
    link: "https://trip-planner-psi-ochre.vercel.app/",
    image: tripPlannerPage,
  },
];

export const ProjectsSection = () => {
  return (
    <div id="project" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-16">
          {portfolioProjects.map((project, index) => (
            <Card
              key={index}
              className="sticky"
              style={{ top: `calc(64px + ${index * 40}px)` }}
            >
              <div className="lg:pb-16 ">
                <div className="flex justify-center gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text mb-4 font-bold uppercase tracking-widest text-sm md:text-lg lg:text-2xl py-8">
                  <span>{project.company}</span>
                  <span>&bull;</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="font-serif text-2xl mt-2 md:mt-5  md:text-4xl">
                  {project.title}
                </h3>
                <hr className="border-t-2 border-white/20 mt-4" />
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map((result, index) => (
                    <li
                      key={index}
                      className="flex gap-2 text-sm md:text-base text-white/50"
                    >
                      <CheckCircleIcon className="size-5 md:size-6" />
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
                <a href={project.link}>
                  <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-8 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-6">
                    <span>View Live Site</span>
                    <ArrowUpRightIcon className="size-4" />
                  </button>
                </a>
              </div>
              <div>
                <Image
                  src={project.image}
                  alt={project.title}
                  className="mt-8 lg:-pt2 -lg:mt-0 lg:absolute lg:h-full lg:w-full lg:w-auto"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
