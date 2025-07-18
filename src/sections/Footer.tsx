import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "Youtube",
    href: "https://www.youtube.com/@ChrisVuOfficial",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/chris-vu-177255226/",
  },
  {
    title: "Github",
    href: "https://github.com/AnhChienVu",
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container relative z-10">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-white/40">&copy; 2025. Anh Chien Vu</div>
          <nav className="flex flex-col items-center gap-8 md:flex-row ">
            {footerLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="mx-2 inline-flex items-center gap-2 hover:text-white/80 transition-colors cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
