import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import movieImage from "@/assets/images/inception-poster.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import TypescriptIcon from "@/assets/icons/typescript-svgrepo-com.svg";
import NodejsIcon from "@/assets/icons/nodejs-svgrepo-com.svg";
import MongoDbIcon from "@/assets/icons/mongodb-svgrepo-com.svg";
import FastapiIcon from "@/assets/icons/fastapi-svgrepo-com.svg";
import PythonIcon from "@/assets/icons/python-127-svgrepo-com.svg";
import AwsIcon from "@/assets/icons/aws-svgrepo-com.svg";
import DockerIcon from "@/assets/icons/docker-svgrepo-com.svg";
import PostgresqlIcon from "@/assets/icons/postgresql-svgrepo-com.svg";
import KafkaIcon from "@/assets/icons/kafka-icon-svgrepo-com.svg";
import GithubIcon from "@/assets/icons/github.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NextjsIcon from "@/assets/icons/nextjs-fill-svgrepo-com.svg";
import { TechIcon } from "@/components/TechIcon";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "Typescript",
    iconType: TypescriptIcon,
  },
  {
    title: "Node.js",
    iconType: NodejsIcon,
  },
  {
    title: "MongoDB",
    iconType: MongoDbIcon,
  },
  {
    title: "FastAPI",
    iconType: FastapiIcon,
  },
  {
    title: "Python",
    iconType: PythonIcon,
  },
  {
    title: "AWS",
    iconType: AwsIcon,
  },
  {
    title: "Docker",
    iconType: DockerIcon,
  },
  {
    title: "Postgresql",
    iconType: PostgresqlIcon,
  },
  {
    title: "Kafka",
    iconType: KafkaIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "React.js",
    iconType: ReactIcon,
  },
  {
    title: "Next.js",
    iconType: NextjsIcon,
  },
];

const hobbies = [
  {
    title: "Drawing",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📸",
    left: "50%",
    top: "5%",
  },
  {
    title: "Gym",
    emoji: "💪",
    left: "10%",
    top: "35%",
  },
  {
    title: "Coding",
    emoji: "👨‍💻",
    left: "35%",
    top: "40%",
  },
  {
    title: "Anime & Movies",
    emoji: "🎬",
    left: "5%",
    top: "65%",
  },
  {
    title: "Music",
    emoji: "🎶",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-5 ">
            <Card className="h-[320px] md:col-span-2">
              <CardHeader
                title={"Movie Log"}
                description={"Explore the movies shaping my perspectives"}
              />
              <div className="w-40 mx-auto mt-2">
                <Image src={movieImage} alt="poster" />
              </div>
            </Card>
            <Card className="h-[320px] col-span-3">
              <CardHeader
                title={"My Toolbox"}
                description={
                  "Explore the technologies and tools I use to craft digital experiences"
                }
                className=""
              />
              <ToolboxItems toolboxItems={toolboxItems} className="" />
              <ToolboxItems
                toolboxItems={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2"
              />
            </Card>
          </div>
          <Card className="h-[320px] p-0 flex flex-col">
            <CardHeader
              title={"Beyond the Code"}
              description={
                "Explore my interests and hobbies beyond the digital realm."
              }
              className="px-6 py-6"
            />
            <div className="relative flex-1">
              {hobbies.map((hobby) => (
                <div
                  key={hobby.title}
                  className="absolute inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5"
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                >
                  <span className="font-medium text-gray-950">
                    {hobby.title}
                  </span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
