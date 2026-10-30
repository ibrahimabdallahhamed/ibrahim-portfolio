import myPic from "../assets/my-photo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Skills from "../Components/Skills";

export default function About() {
  let experianceCard = [
    {
      date: "[2026 – Present]",
      job: "Frontend Developer – Personal Projects",
      company: "Freelancer",
      description:
        "Building responsive web interfaces using HTML, CSS, JavaScript,React.js, and Tailwind CSS. Developing practical projects andcollaborating through Git and GitHub",
    },
    {
      date: "[2026]",
      job: "Front End Development Course",
      company: "Gig Skill Boost Program – Nile University",
      description:
        "Completed training in HTML, CSS, JavaScript, React.js, API Integration, Authentication & Authorization. Applied the acquired skills in a graduation project, developing practical front-end development experience.",
    },
    {
      date: "[2025 – 2026]",
      job: "Embedded Systems & C Programming",
      company: "Technical Learning & Projects",
      description:
        "Studied C programming and embedded systems, applying technical knowledge to microcontroller-based projects, including an ESP32-controlled robotic arm.",
    },
    {
      date: "[2019 – 2024]",
      job: "B.Sc. in Mechatronics Engineering",
      company: "Higher Technological Institute (HTI)",
      description:
        "Graduated with an Excellent grade, developing strong analytical and problem-solving skills.",
    },
  ];
  let skillCard = [
    {
      header: "Front-end",
      skills: ["React", "HTML", "Tailwind CSS", "JavaScript"],
    },
    {
      header: "Tools",
      skills: ["Git & GitHub", "Figma", "VS Code", "Vite"],
    },
    {
      header: "Soft skills",
      skills: [
        "Communication",
        "Problem solving",
        "Teamwork",
        "Time management",
        "Attention to detail",
      ],
    },
  ];
  return (
    <main className=" px-[20px] sm:px-[50px] pb-[50px]">
      <section className="flex flex-col md:flex-row  md:items-center md:gap-[5%]">
        <div className="w-full md:w-1/2 mb-[40px]">
          <img
            src={myPic}
            alt="My Picture"
            className="my-pic border border-solid border-[var(--border-nav-color)] "
          />
        </div>
        <div className="">
          <p className="text-[var(--nav-font-active)] mb-[30px]">// about me</p>
          <h1 className="text-[36px] sm:text-[72px] font-[700] mb-[30px] text-[var(--font-color)] ">
            Developer who cares about the details.
          </h1>
          <p className="text-[var(--nav-link-color)] md:text-[18px] ">
            I'm a Front-End Developer based in Egypt, specializing in building
            responsive, user-friendly web applications using React, JavaScript,
            HTML, and CSS. I focus on clean code, pixel-perfect designs,
            performance, and creating seamless user experiences across all
            devices.
          </p>
          <br />
          <p className="text-[var(--nav-link-color)] mb-[50px] md:text-[18px]">
            I'm a Front-End Developer based in Egypt, specializing in building
            responsive, user-friendly web applications using React, JavaScript,
            HTML, and CSS. I focus on clean code, pixel-perfect designs,
            performance, and creating seamless user experiences across all
            devices.
          </p>
          <div className="flex justify-evenly items-center sm:justify-start text-[16px] sm:text-[20px] ">
            <button className="sm:mr-[100px] p-[10px] rounded-[7px] bg-[var(--button-bg-color)] text-[var(--font-button-color)] ">
              <FontAwesomeIcon icon={faDownload} /> Download Cv
            </button>
            <button className="sm:mr-[20px] p-[10px] rounded-[7px] bg-[var(--home-downloadcv-bg)] text-[var(--font-color)] border-1 border-[var(--border-nav-color)]">
              Contact me
            </button>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex-row mt-[50px] md:justify-between gap-[5%]">
        <div>
          <p className="text-[var(--nav-font-active)] mb-[30px]">// journey</p>
          <h2 className="text-[36px] md:text-[46px] font-[900] mb-10 text-[var(--font-color)]">
            Experience & Education
          </h2>
        </div>
        <div className="border-l-[2px] px-[30px] border-[var(--border-nav-color)] relative">
          {experianceCard.map((card) => (
            <div className="mb-[30px]">
              <span className="inline-block bg-[var(--button-bg-color)] w-[20px] h-[20px] rounded-[50%] mr-[10px] absolute left-[-10px]"></span>

              <p className="text-[var(--nav-link-color)] mb-[5px]">
                {card.date}
              </p>
              <h2 className="text-[24px] md:text-[30px] font-[900] text-[var(--font-color)] mb-[5px]">
                {card.job}
              </h2>
              <h3 className="text-[var(--nav-font-active)] text-[20px] md:text-[22px] mb-[15px]">
                {card.company}
              </h3>
              <p className="text-[var(--nav-link-color)]">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className=" ">
        <div>
          <p className="text-[var(--nav-font-active)] my-[30px]">// skills</p>
          <h2 className="text-[36px] md:text-[46px] font-[900] mb-10 text-[var(--font-color)]">
            What I bring
          </h2>
        </div>
        <div className="flex flex-col  xl:flex-row items-center justify-center gap-[5%]  ">
          {skillCard.map((card) => (
            <div className="border-[2px] rounded-[30px] px-[50px] border-[var(--border-nav-color)] mb-[30px] py-[50px] w-full xl:w-[30%]   2xl:h-[300px] xl:h-[400px] ">
              <h3 className="text-[var(--font-color)] text-[36px] font-[700] mb-[30px]">
                {card.header}
              </h3>
              <div className="flex items-center justify-between flex-wrap ">
                {card.skills.map((skill) => (
                  <Skills skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
