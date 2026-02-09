import happsLandingPage from "@/assets/images/Happs.png";
import mypefectShotLandingPage from "@/assets/images/Myperfectshot.png";
import blueIrisScreenshot from "@/assets/images/blue_iris_screenshot.png";
import allianceConnectivityScreenshot from "@/assets/images/alliance_screenshot.png"
import chartComponentGeneratorScreenshot from "@/assets/images/Chartcomp1.png"
import indieSyncLandingPage from "@/assets/images/indieSyncPage.png";
import resuflexLandingPage from "@/assets/images/screencapture-resu-flex-resume-builder-vercel-app-2025-08-10-01_52_30.png";
import chimeInPage from "@/assets/images/ChimeIn.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Personal",
    year: "2026",
    title: "React Chart Component Generator",
    results: [
      {
        title: "Built a chart component generator for React, where users can come and paste their raw JSON data and turn into a beautiful chart component."
      },
      {
        title: "Users can customize the chart component based on their and choose which library to use, for which they have to make an one time purchase."
      },
      {
        title: "Includes payment using Razorpay. Built using Next.js, and Tailwindcss."
      }
    ],
    link: "https://chart-component-code-generator-for.vercel.app/",
    image: chartComponentGeneratorScreenshot
  },
  {
    company: "Tedekstra",
    year: "2026-Ongoing",
    title: "Alliance Connectivity",
    results: [
      {
        title: "Developing an end to end fully secure and advanced CRM for a company in the UK"
      },
      {
        title: "It is a CRM for a company that deals with connectivity, networking and provide broadband and other networking services"
      },
    ],
    link: "https://alliance.tedekstra.com/",
    image: allianceConnectivityScreenshot
  },
  {
    company: "Tedekstra",
    year: "2025-Ongoing",
    title: "Blue Iris Landscapes",
    results: [
      {
        title: "Developed an end to end scalable CRM application for a landscaping business, which had three sub companies under it."
      },
      {
        title: "Implemented proper role based authentication and views, job planner with google maps integration, sorting jobs based on farthest to closest route."
      },
      {
        title: "Automated price calculation from excel formula and quote management with enhanced statistics dashboard."
      }
    ],
    link: "https://planterra.tedekstra.com/sign-in",
    image: blueIrisScreenshot
  },
  {
    company: "Personal",
    year: "2025",
    title: "ChimeIn",
    results: [
      {
        title:
          "Developing a instagram like social media mobile app with user friend UI using React Native.",
      },
      {
        title:
          "Users have the ability to like, comment, follow, post, bookmark and share posts, they can see notifications.",
      },
      {
        title: "Working currently on building a dedicated chat for the users.",
      },
    ],
    link: "https://github.com/Reetam101/chimeIn-social",
    image: chimeInPage,
  },
  {
    company: "Personal",
    year: "2025",
    title: "ResuFlex",
    results: [
      {
        title:
          "Developed a resume builder web app with customizable templates for quick and professional resume creation.",
      },
      {
        title:
          "Built using Next.js 15, Clerk authentication, and NeonDB for fast and scalable storage.",
      },
      {
        title:
          "Integrated Stripe for secure payments, supporting single-column and two-column modern resume layouts.",
      },
    ],
    link: "https://resu-flex-resume-builder.vercel.app/",
    image: resuflexLandingPage,
  },
  {
    company: "Fortmindz Private Ltd.",
    year: "2025",
    title: "Happs",
    results: [
      {
        title:
          "Engineered an API to deliver event listings, handle ticket purchases, and manage user bookings efficiently.",
      },
      {
        title:
          "Implemented real-time updates for instant booking confirmations and event reminders.",
      },
      {
        title:
          "Designed role-based authentication for attendees, event organizers, and administrators.",
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
          "Created a photography marketplace for booking professional photographers and services online.",
      },
      {
        title:
          "Integrated secure authentication and Stripe-powered payment processing.",
      },
      {
        title:
          "Used AWS S3 for image storage and automated watermarking for copyright protection.",
      },
    ],
    link: "https://myperfectshots.com/home",
    image: mypefectShotLandingPage,
  },
  {
    company: "Fortmindz Private Ltd.",
    year: "2024",
    title: "Indie Sync",
    results: [
      {
        title:
          "Developed a music licensing platform for indie artists to upload and sell their tracks securely.",
      },
      {
        title:
          "Implemented role-based access control with a clean and intuitive user interface.",
      },
      {
        title:
          "Integrated Stripe payments and built an advanced React music player for smooth playback.",
      },
    ],
    link: "https://indiesync.io/",
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
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              id="projects"
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
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
                  <hr className="border-t-2 border-gray-200 dark:border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex md:text-base gap-2 text-sm text-gray-500 dark:text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-gray-900 text-white dark:bg-white dark:text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6">
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
