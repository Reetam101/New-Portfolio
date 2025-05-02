import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";

export const HeroSection = () => {
  return (
    <div className="py-32">
      <div className="container">
        <Image
          src={memojiImage}
          className="size-[100px]"
          alt="Person peeking from behind laptop"
        />
        <div>
          <div></div>
          <div>Available for new projects</div>
        </div>
        <h1>Crafting smart software solutions tailored to your needs.</h1>
        <p>
          Full Stack Developer with 2+ years of experience specializing in
          building scalable, high-performance web and mobile applications using
          React, Next.js, Node.js, Express, MongoDB, PostgreSQL, React Native,
          and AWS — with a strong focus on clean UI, efficient APIs, and
          containerized deployment using Docker and Git.
        </p>
        <div>
          <button>
            <span>Explore My Work</span>
            <ArrowDown />
          </button>
          <button>
            <span>👋</span>
            <span>Let's Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
