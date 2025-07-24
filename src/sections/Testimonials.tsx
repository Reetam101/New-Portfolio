import aiquantLogo from "@/assets/images/aiquant_logo.png";
import fortmindzLogo from "@/assets/images/weblogoshub_logo.png";
import settylLogo from "@/assets/images/settyl_corporation_logo.png";

import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import grainImage from "@/assets/images/grain.jpg";

const testimonials = [
  {
    name: "Aiquant Technologies",
    position: "SDE-1 | May 2025 - Present",
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
    <div className="py-16">
      <div className="container">
        <SectionHeader
          eyebrow="Work Experiences"
          title="Companies and Clients that I have worked with"
        />
        <div>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-gray-800 rounded-3xl p-6 relative overflow-hidden z-0"
            >
              <div
                className="absolute inset-0 opacity-5 -z-10"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>
              <Image src={testimonial.avatar} alt={testimonial.name} />
              <div>{testimonial.name}</div>
              <div>{testimonial.position}</div>
              <div>{testimonial.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
