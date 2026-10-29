import myPic from "../assets/my-photo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function About() {
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
    </main>
  );
}
