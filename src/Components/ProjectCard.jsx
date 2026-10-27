import projectPic from "../../src/assets/pricing-page.png";
import Skills from "./Skills";
function ProjectCard() {
  return (
    <div className=" border-[2px] border-solid border-[var(--border-nav-color)] rounded-[10px] p-[2px] ">
      <div className="bg-[var(--project-card-bg)] px-[20px] py-[20px]">
        <div className="flex gap-2 mb-5 px-2">
          <span className="inline-block bg-[#526077] w-[10px] h-[10px] rounded-[50%]"></span>
          <span className="inline-block bg-[#526077] w-[10px] h-[10px] rounded-[50%]"></span>
          <span className="inline-block bg-[#526077] w-[10px] h-[10px] rounded-[50%]"></span>
        </div>
        <div className="mb-[30px] w-[80%] h-[15px] bg-[var(--button-bg-color)] rounded-[10px]">
          {" "}
        </div>
        <img src={projectPic} className="rounded-[10px] mb-[20px]"></img>
      </div>
      <div className="px-[20px] py-[20px]">
        <h2 className="text-[24px] font-[700] text-[var(--font-color)]">
          Synkra Projcet
        </h2>
        <p className="text-[18px] text-[#526077]">
          Built a responsive, theme-aware (light/dark) pricing page for Synkra
          in React, featuring a monthly/annual billing toggle with dynamic
          pricing and reusable plan-card components, including a highlighted
          “Popular” Pro tier. Also implemented the navbar, a hero section with
          custom typography, and a persistent cookie-consent banner, using hooks
          and component-based architecture.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 mt-[20px]">
          <Skills skill="react" />
          <Skills skill="HTML & CSS" />
          <Skills skill="GIT & GitHub" />
          <Skills skill="Figma" />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
