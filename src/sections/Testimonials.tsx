import aiquantLogo from "@/assets/images/aiquant_logo.png";
import fortmindzLogo from "@/assets/images/weblogoshub_logo.png";
import settylLogo from "@/assets/images/settyl_corporation_logo.png";

import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";

const testimonials = [
  {
    name: "Aiquant Technologies",
    position: "SDE-1 | May 2025 -  Present",
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: aiquantLogo,
  },
  {
    name: "Fortmindz Private Ltd.",
    position: "Associate Software Engineer | September 2023 - May 2025",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.",
    avatar: fortmindzLogo,
  },
  {
    name: "DataInvestigo",
    position: "Freelance Full Stack Developer",
    text: "Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined.",
    avatar: "",
  },
  {
    name: "Settyl",
    position: "Full Stack Engineer Intern | Aug 2023 - Oct 2023",
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: settylLogo,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Work Experiences"
          title="Companies and Clients that I have worked with"
        />
        <div className="mt-16 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-8 flex-none">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.name}
                className="max-w-xs md:max-w-md md:p-8"
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
          </div>
        </div>
      </div>
    </div>
  );
};
