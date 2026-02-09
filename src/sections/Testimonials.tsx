import aiquantLogo from "@/assets/images/aiquant_logo.png";
import fortmindzLogo from "@/assets/images/weblogoshub_logo.png";
import settylLogo from "@/assets/images/settyl_corporation_logo.png";
import tedekstraLogo from "@/assets/images/tedekstra-logo.png"

import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Tedekstra",
    position: "Full Stack Engineer | September 2025 - Present",
    text: "Building scalable CRM and ERP solutions for various mid to large scale businesses, interacting with clients to understand their requirements and delivering high-quality solutions. Currently working on a CRM solution for a mid-size company, managing their data and automating their workflows. Mentoring junior developers and supervising them.",
    avatar: tedekstraLogo,
    techStack: ["React", "Next.js", "Node.js", "Express", "NestJS", "MongoDB", "PostgreSQL", "Docker", "Azure", "Git", "TypeScript"],
  },
  {
    name: "Aiquant Technologies",
    position: "SDE-1 | May 2025 - September 2025",
    text: "Focusing on mastering Java Spring Boot for scalable backend development and exploring blockchain solutions within the Cardano ecosystem. Currently developing a DeFi analytics dashboard using n8n automation workflows, Grafana visualizations, and InfluxDB for time-series data management.",
    avatar: aiquantLogo,
    techStack: ["Javascript", "Python", "React", "Cardano", "InfluxDB", "Grafana"],
  },
  {
    name: "Fortmindz Private Ltd.",
    position: "Associate Software Engineer | September 2023 - May 2025",
    text: "Designed and implemented robust APIs with Node.js and backend architecture for enterprise-grade mobile and web applications. Developed responsive frontend components in React.js, delivering high-performance, user-friendly interfaces with optimized UX workflows.",
    avatar: fortmindzLogo,
    techStack: ["Node.js", "React.js", "React Native", "MongoDB", "TypeScript", "AWS", "Git"],
  },
  {
    name: "DataInvestigo",
    position: "Freelance Full Stack Developer",
    text: "Delivered end-to-end full stack solutions, enhancing Python FastAPI-based APIs for better performance and security. Built a real-time website monitoring dashboard using React.js and TypeScript, integrating seamless API communication for data visualization.",
    avatar: "",
    techStack: ["Python", "FastAPI", "React.js", "TypeScript", "Docker", "Git", "AWS"],
  },
  {
    name: "Settyl",
    position: "Full Stack Engineer Intern | Aug 2023 - Oct 2023",
    text: "Developed a mobile inventory management application using the Ionic React Framework, enhancing operational efficiency. Worked with MicroFrontend architecture and Webpack for modular deployments. Created an interactive drag-and-drop warehouse design tool from scratch with React.js.",
    avatar: settylLogo,
    techStack: ["Ionic", "React", "Webpack", "Docker", "Git"],
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24" id="experience">
      <div className="container">
        <SectionHeader
          eyebrow="Work Experiences"
          title="Companies and Clients that I have worked with"
        />
        <div className="mt-16 lg:mt-20 flex overflow-x-auto [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4 scrollbar-hide">
          <div className="flex gap-8 flex-none pr-8 pl-8">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
              >
                <div className="flex gap-4 items-center">
                  <div className="size-12 inline-flex items-center justify-center rounded-full flex-shrink-0">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="max-h-full"
                    />
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500 dark:text-white/40">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
                <p className="mt-4 md:mt-6 text-sm md:text-base">
                  {testimonial.text}
                </p>
                <div className="flex flex-wrap gap-2 mt-4 md:mt-6">
                  {testimonial.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/70 text-xs px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
