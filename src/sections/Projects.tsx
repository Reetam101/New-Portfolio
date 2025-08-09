import happsLandingPage from "@/assets/images/Happs.png";
import mypefectShotLandingPage from "@/assets/images/Myperfectshot.png";
import indieSyncLandingPage from "@/assets/images/indieSyncPage.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Fortmindz Private Ltd.",
    year: "2025",
    title: "Happs",
    results: [
      {
        title:
          "Built a robust API to fetch event listings, handle ticket purchases, and manage user bookings.",
      },
      {
        title:
          "Implemented real-time updates for booking confirmations and reminders.",
      },
      {
        title:
          "Role-based authentication for users, event organizers, and admins.",
      },
    ],
    link: "https://happslive.com/",
    image: happsLandingPage,
  },
  {
    company: "Fortmindz Private Ltd.",
    year: "2024-2025",
    title: "My Perfect Shot",
    results: [
      {
        title:
          "Built a web application to for hiring photographers and their services.",
      },
      { title: "Implemented secure auth and payment flow using Stripe" },
      { title: "Image secure storage using AWS S3 and watermark generation" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: mypefectShotLandingPage,
  },
  {
    company: "Fortmindz Private Ltd.",
    year: "2024",
    title: "Indie Sync",
    results: [
      {
        title:
          "Built a web application for Indie Music Artist to upload and sell license to their songs and tracks",
      },
      {
        title:
          "Implemented secure role based access control and user friendly UI",
      },
      {
        title:
          "Implemented secure payment using Stripe and advanced music player in React",
      },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: indieSyncLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging software experiences."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20"
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li className="flex md:text-base gap-2 text-sm text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6">
                      <span>Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
