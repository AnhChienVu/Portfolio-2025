import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 rounded-3xl py-8 px-10 lg:p-16 text-center md:text-left text-gray-900">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let's create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let's connect and
                discuss how I can help you achieve your goals .
              </p>
            </div>

            <button className="text-white bg-gray-900 inline-flex justify-center items-center px-6 h-12 rounded-xl gap-2 border border-gray-900">
              <span className="font-semibold w-max">Contact Me</span>
              <ArrowUpRightIcon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
