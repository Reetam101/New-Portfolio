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
  },
  {
    title: "Photography",
    emoji: "📸",
  },
  {
    title: "Gym",
    emoji: "💪",
  },
  {
    title: "Coding",
    emoji: "👨‍💻",
  },
  {
    title: "Anime & Movies",
    emoji: "🎬",
  },
  {
    title: "Music",
    emoji: "",
  },
];

export const AboutSection = () => {
  return (
    <div className="pb-96">
      <SectionHeader
        eyebrow="About Me"
        title="A Glimpse Into My World"
        description="Learn more about who I am, what I do and what inspires me."
      />
      <div>
        <Card>
          <div>
            <StarIcon />
            <h3>Movie Log</h3>
            <p>Explore the movies shaping my perspectives.</p>
          </div>
          <Image src={movieImage} alt="poster" />
        </Card>
        <Card>
          <div>
            <StarIcon />
            <h3>My Toolbox</h3>
            <p>
              Explore the technologies and tools I use to craft digital
              experiences.
            </p>
          </div>
          <div>
            {toolboxItems.map((item) => (
              <div key={item.title}>
                <TechIcon component={item.iconType} />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <div>
            <StarIcon />
            <h3>Beyond the Code</h3>
            <p>Explore my interests and hobbies beyond the digital realm.</p>
          </div>
        </Card>
        {/* <Card>
  
        </Card> */}
      </div>
    </div>
  );
};
