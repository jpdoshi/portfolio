import Image from "next/image";

import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import ProjectCard from "@/components/ProjectCard";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="content">
        <div
          className="text-center"
          style={{ maxWidth: "650px", margin: "auto" }}
        >
          <Image
            src={"/images/pfp.png"}
            loading="lazy"
            alt="profile picture"
            height={120}
            width={120}
            className="mx-auto block mb-[12px]"
          />
          <p className="text-[18px]">Hi, I'm Jainam Doshi 👋</p>
          <div className="h-[16px]" />
          <h1
            className="text-[34px] md:text-[42px] xl:text-[48px] font-bold poppins"
            style={{ lineHeight: "125%" }}
          >
            Creating Amazing Digital Experiences, Products & Solutions
          </h1>
          <div className="h-[32px]" />
          <div className="flex">
            <div className="flex mx-auto flex-col md:flex-row gap-[8px] md:gap-[16px]">
              <Button
                href={"mailto:jpdoshi2811@gmail.com"}
                text={"Contact Me"}
                sameTab={true}
              />
              <Button
                href={"https://github.com/jpdoshi"}
                text={"Get Resume"}
                secondary={true}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="content text-center">
        <h2 className="poppins font-bold text-[30px] md:text-[36px] mb-[4px]">
          Explore Projects
        </h2>
        <p className="text-[18px]">
          Here are some of my personal projects made by me. Check all projects
          on my Github
        </p>
        <div className="h-[36px]" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[10px] relative">
          <ProjectCard
            imgSrc={"/images/project-1.png"}
            href="https://github.com/jpdoshi/godot-2d-rpg"
            title="2D RPG with Godot Engine"
            description="RPG Game made with Godot Engine with Collision Detection, Animator, Health, Enemy AI, Tilemaps, etc."
          />
          <ProjectCard
            imgSrc={"/images/project-2.png"}
            href="https://aura-walls.vercel.app"
            title="Aura Walls Wallpaper Website"
            description="Wallpapers App Made with NextJS and Vanilla CSS. Hosted on Vercel. Source code available on Github."
          />
          <ProjectCard
            imgSrc={"/images/project-3.png"}
            href="https://jpdoshi-switch-landing.framer.website"
            title="Nintendo Switch Landing Page"
            description="Responsive Animated Landing Page designed in Figma and Hosted with Framer."
          />
          <ProjectCard
            imgSrc={"/images/project-4.png"}
            href="https://github.com/jpdoshi/BookStore"
            title="Django Books Ecommerce Website"
            description="Online book store project made with Python Django and design in Bootstrap."
          />
          <ProjectCard
            imgSrc={"/images/project-5.png"}
            href="https://github.com/jpdoshi/asset-management-client"
            title="Fullstack Asset Management App"
            description="Modern Asset Management System with React+Vite on client and NodeJS and MongoDB on server."
          />
          <ProjectCard
            imgSrc={"/images/project-6.png"}
            href="https://github.com/jpdoshi/react-chatbot"
            title="AI Chatbot with React Gemini API"
            description="Super-fast AI chatbot made with React+Vite and Gemini API. Responsive design with Dark mode in CSS."
          />
          <div className="absolute bottom-0 left-0 h-[12%] md:h-[20%] w-full pointer-events-none transparent-layer" />
        </div>
        <div className="flex mt-[24px]">
          <div className="mx-auto">
            <Button
              text="More on Github"
              icon={
                <svg
                  className="translate-y-[20px]"
                  width="18px"
                  height="18px"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.343 15.657L15.657 4.343m0 0v9.9m0-9.9h-9.9"
                    />{" "}
                  </g>
                </svg>
              }
              href="https://github.com/jpdoshi/?tab=repositories"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
