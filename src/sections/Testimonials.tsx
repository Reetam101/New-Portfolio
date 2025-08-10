import aiquantLogo from "@/assets/images/aiquant_logo.png";
import fortmindzLogo from "@/assets/images/weblogoshub_logo.png";
import settylLogo from "@/assets/images/settyl_corporation_logo.png";

import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Aiquant Technologies",
    position: "SDE-1 | May 2025 - Present",
    text: "Focusing on mastering Java Spring Boot for scalable backend development and exploring blockchain solutions within the Cardano ecosystem. Currently developing a DeFi analytics dashboard using n8n automation workflows, Grafana visualizations, and InfluxDB for time-series data management.",
    avatar: aiquantLogo,
  },
  {
    name: "Fortmindz Private Ltd.",
    position: "Associate Software Engineer | September 2023 - May 2025",
    text: "Designed and implemented robust APIs with Node.js and backend architecture for enterprise-grade mobile and web applications. Developed responsive frontend components in React.js, delivering high-performance, user-friendly interfaces with optimized UX workflows.",
    avatar: fortmindzLogo,
  },
  {
    name: "DataInvestigo",
    position: "Freelance Full Stack Developer",
    text: "Delivered end-to-end full stack solutions, enhancing Python FastAPI-based APIs for better performance and security. Built a real-time website monitoring dashboard using React.js and TypeScript, integrating seamless API communication for data visualization.",
    avatar: "",
  },
  {
    name: "Settyl",
    position: "Full Stack Engineer Intern | Aug 2023 - Oct 2023",
    text: "Developed a mobile inventory management application using the Ionic React Framework, enhancing operational efficiency. Worked with MicroFrontend architecture and Webpack for modular deployments. Created an interactive drag-and-drop warehouse design tool from scratch with React.js.",
    avatar: settylLogo,
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
        <div className="mt-16 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
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
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
