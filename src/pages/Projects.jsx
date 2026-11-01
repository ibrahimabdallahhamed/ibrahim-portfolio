import projectPic from "../assets/pricing-page.png";
import portofolioPic from "../assets/portofolio.png";
import smartHome from "../assets/smart-home.png";
import ticTacPic from "../assets/tic-tac.jpeg";
import schoolManagement from "../assets/school-management.jpeg";
import ProjectCard from "../Components/ProjectCard";
export default function Projects() {
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
    {
      header: "Tic Tac Toe",
      description:
        "Developed a Tic Tac Toe game in C with single-player and multiplayer modes, featuring a smart AI opponent and scoreboard. Implemented game logic, player interaction, and win/draw detection using core C programming concepts.",
      skills: ["C", "Data Structures", "Algorithms", "Problem Solving"],
      pic: ticTacPic,
    },
    {
      header: "School Management System",
      description:
        "Developed a school management system in C for managing student records with add, edit, delete, list, and ranking features. Implemented linked lists and core programming concepts to organize and manage student data efficiently.",
      skills: [
        "C",
        "Linked Lists",
        "Data Structures",
        "Algorithms",
        "Problem Solving",
      ],
      pic: schoolManagement,
    },
    {
      header: "Smart Home Project",
      description:
        "Developed a smart home system using PIC18F4620 microcontroller with two MCUs communicating through USART and I2C. Implemented security login, temperature control, TV and door control, and automatic and remote lighting control.",
      skills: [
        "C",
        "Embedded C",
        "PIC18F4620",
        "USART",
        "I2C",
        "ADC",
        "Microcontrollers",
      ],
      pic: smartHome,
    },
  ];
  return (
    <main className="px-[20px] sm:px-[50px] py-[50px]">
      <p className="text-[var(--nav-font-active)] my-[30px] text-[22px]">
        // projects
      </p>
      <h1 className="text-[36px] sm:text-[72px] font-[700] mb-[30px] text-[var(--font-color)] ">
        Things I've built
      </h1>
      <p className="text-[var(--nav-link-color)] text-[18px] md:w-1/2">
        A collection of real products, side projects and UI experiments.
        Currently learning and building with modern Frontend technologies, with
        a focus on React.js and creating responsive, user-friendly interfaces.
      </p>
      <div className="flex flex-col md:flex-row gap-[20px] justify-evenly mt-[50px] w-full flex-wrap">
        {projects.map((project) => (
          <div className="mb-[20px] md:max-w-[30%]">
            <ProjectCard prop={project} />
          </div>
        ))}
      </div>
    </main>
  );
}
