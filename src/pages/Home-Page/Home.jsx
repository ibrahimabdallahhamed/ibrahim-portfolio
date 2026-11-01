import "./Home.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// يمكنك استخدام ثيم متوافق مع الدارك واللايت أو تثبيت ثيم داكن، هنا سنستخدم coldarkCold كمثال
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import myPic from "../../assets/my-photo.png";
import ProjectCard from "../../Components/ProjectCard";
import Skills from "../../Components/Skills";
import { useNavigate } from "react-router-dom";
import projectPic from "../../assets/pricing-page.png";
import portofolioPic from "../../assets/portofolio.png";
export default function Home() {
  const nanigate = useNavigate();
  let projects = [
    {
      header: "Synkra Projcet",
      description:
        "Built a responsive, theme-aware (light/dark) pricing page for Synkra in React, featuring a monthly/annual billing toggle with dynamic pricing and reusable plan-card components, including a highlighted “Popular” Pro tier. Also implemented the navbar, a hero section with custom typography, and a persistent cookie-consent banner, using hooks and component-based architecture.",
      skills: ["React", "HTML", " CSS", "JavaScript", "Git & GitHub"],
      pic: projectPic,
    },
    {
      header: "My Portfolio",
      description:
        "Developed a responsive personal portfolio using React.js, Vite, Tailwind CSS, React Router, and FontAwesome, showcasing my skills, experience, and projects. Implemented reusable components, smooth navigation, interactive UI, dark theme, and responsive design, with deployment on GitHub Pages.",
      skills: [
        "React",
        "HTML",
        "Tailwind CSS",
        "JavaScript",
        "Git & GitHub",
        "Figma",
      ],
      pic: portofolioPic,
    },
  ];
  return (
    <main className="px-[20px] sm:px-[50px] py-[50px]">
      <section className="my-info-section flex flex-col md:flex-row justify-center items-center ">
        {" "}
        <div className="info-content">
          <p
            className="mb-10 text-[var(--nav-link-color)] text-[20px] 
            border border-solid border-[var(--border-nav-color)] rounded-full
            px-[25px] py-[10px] w-[max-content] bg-[var(--home-downloadcv-bg)]"
          >
            <span className="inline-block bg-[#16A34A] w-[15px] h-[15px] rounded-[50%] mr-[20px]"></span>
            Available for work
          </p>
          <p className="text-[var(--nav-link-color)] text-[20px]">Hi I'm</p>
          <h1 className="my-name text-center text-[28px] text-left sm:text-[72px]">
            Ibrahim Abdallah
          </h1>
          <h2 className="my-job text-center text-[18px] text-left sm:text-[22px]">
            Front-End Developer
          </h2>
          <p className="job-description">
            I build fast, accessible and pixel-perfect interfaces with React,
            focused on writing clean code and delivering seamless user
            experiences.
          </p>
          <div className="flex justify-between items-center sm:justify-start text-[16px] sm:text-[20px] ">
            <button
              className="view-projects-btn sm:mr-[20px] "
              onClick={() => nanigate("/projects")}
            >
              View Projects <FontAwesomeIcon icon={faArrowRight} />
            </button>
            <a
              href="https://drive.google.com/uc?export=download&id=16McDvaOeP5hqCdFVeETKfmHkymOsTjAA"
              className="download-cv-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDownload} /> Download Cv
            </a>
          </div>
        </div>
        <div className="my-pic-container relative py-[10px] max-w-[500px]">
          <img
            src={myPic}
            alt="My Picture"
            className="my-pic border border-solid border-[var(--border-nav-color)] "
          />

          <div className="bg-[var(--bg-color)] rounded-[15px] absolute bottom-0 left-[-20px] p-[10px] border border-solid border-[var(--border-nav-color)] shadow-lg">
            <div className="flex gap-2 mb-2 px-2">
              <span className="inline-block bg-[#526077] w-[10px] h-[10px] rounded-[50%]"></span>
              <span className="inline-block bg-[#526077] w-[10px] h-[10px] rounded-[50%]"></span>
              <span className="inline-block bg-[#526077] w-[10px] h-[10px] rounded-[50%]"></span>
            </div>

            <div className="text-[13px] sm:text-[14px]">
              <SyntaxHighlighter
                language="javascript"
                customStyle={{
                  background: "transparent",
                  margin: 0,
                  padding: 0,
                }}
                style={coldarkCold}
              >
                {`const dev = {
  role: 'Front-End',
  stack: ['React', 'TS'],
  open: true
}`}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20 mb-20">
        <p className="text-[var(--nav-font-active)] text-[22px] ">
          // tech stack
        </p>
        <h2 className="text-[46px] font-[900] mb-10 text-[var(--font-color)]">
          Tools I work with
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
          {" "}
          <Skills skill="React" />
          {/* ------------------------------------------------------------------- */}
          <Skills skill="TypeScript" />
          {/* ------------------------------------------------------------------- */}
          <Skills skill="JavaScript" />
          {/* ------------------------------------------------------------------- */}
          <Skills skill="Tailwind CSS" />
          {/* ------------------------------------------------------------------- */}
          <Skills skill="HTML & CSS" />
          {/* ------------------------------------------------------------------- */}
          <Skills skill="Git & GitHub" />
          {/* ------------------------------------------------------------------- */}
          <Skills skill="Figma" />
        </div>
      </section>
      <section>
        <p className="text-[var(--nav-font-active)] text-[22px]">
          // Featured work
        </p>
        <h2 className="text-[46px] font-[900] mb-10 text-[var(--font-color)]">
          Selected Projects
        </h2>
        <div className="flex flex-col md:flex-row gap-[5%] ">
          {projects.map((project) => (
            <div className="mb-[20px] md:w-[45%]">
              <ProjectCard prop={project} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
