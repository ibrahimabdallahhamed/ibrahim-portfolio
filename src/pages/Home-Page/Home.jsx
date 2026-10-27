import "./Home.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// يمكنك استخدام ثيم متوافق مع الدارك واللايت أو تثبيت ثيم داكن، هنا سنستخدم coldarkCold كمثال
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import myPic from "../../assets/my-photo.png";

export default function Home() {
  return (
    <main className="home" style={styles.Container}>
      <section className="my-info-section flex flex-col md:flex-row justify-center itema-center">
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
            <button className="view-projects-btn sm:mr-[20px] ">
              View Projects <FontAwesomeIcon icon={faArrowRight} />
            </button>
            <button className="download-cv-btn ">
              <FontAwesomeIcon icon={faDownload} /> Download Cv
            </button>
          </div>
        </div>
        <div className="my-pic-container relative py-[10px] max-w-[500px]">
          <img
            src={myPic}
            alt="My Picture"
            className="my-pic border border-solid border-[var(--border-nav-color)] "
          />

          <div className="bg-[var(--bg-color)] rounded-[15px] absolute bottom-0 left-[-40px] p-[10px] border border-solid border-[var(--border-nav-color)] shadow-lg">
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
        <p className="text-[var(--nav-font-active)]">// tech stack</p>
        <h2 className="text-[46px] font-[900] mb-10 text-[var(--font-color)]">
          Tools I work with
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
          {" "}
          <p
            className=" text-[var(--font-color)] text-[16px] sm:text-[20px]
            border border-solid border-[var(--border-nav-color)] rounded-full
            px-[10px] py-[0px] w-[max-content] bg-[var(--home-downloadcv-bg)] mb-3 flex items-center"
          >
            <span className="inline-block bg-[var(--button-bg-color)] w-[10px] h-[10px] rounded-[50%] mr-[10px]"></span>
            React
          </p>
          {/* ------------------------------------------------------------------- */}
          <p
            className=" text-[var(--font-color)] text-[16px] sm:text-[20px]
            border border-solid border-[var(--border-nav-color)] rounded-full
            px-[10px] py-[0px] w-[max-content] bg-[var(--home-downloadcv-bg)] mb-3 flex items-center"
          >
            <span className="inline-block bg-[var(--button-bg-color)] w-[10px] h-[10px] rounded-[50%] mr-[10px]"></span>
            TypeScript
          </p>
          {/* ------------------------------------------------------------------- */}
          <p
            className=" text-[var(--font-color)] text-[16px] sm:text-[20px]
            border border-solid border-[var(--border-nav-color)] rounded-full
            px-[10px] py-[0px] w-[max-content] bg-[var(--home-downloadcv-bg)] mb-3 flex items-center"
          >
            <span className="inline-block bg-[var(--button-bg-color)] w-[10px] h-[10px] rounded-[50%] mr-[10px]"></span>
            JavaScript
          </p>
          {/* ------------------------------------------------------------------- */}
          <p
            className=" text-[var(--font-color)] text-[16px] sm:text-[20px]
            border border-solid border-[var(--border-nav-color)] rounded-full
            px-[10px] py-[0px] w-[max-content] bg-[var(--home-downloadcv-bg)] mb-3 flex items-center"
          >
            <span className="inline-block bg-[var(--button-bg-color)] w-[10px] h-[10px] rounded-[50%] mr-[10px]"></span>
            Tailwind CSS
          </p>
          {/* ------------------------------------------------------------------- */}
          <p
            className=" text-[var(--font-color)] text-[16px] sm:text-[20px]
            border border-solid border-[var(--border-nav-color)] rounded-full
            px-[10px] py-[0px] w-[max-content] bg-[var(--home-downloadcv-bg)] mb-3 flex items-center"
          >
            <span className="inline-block bg-[var(--button-bg-color)] w-[10px] h-[10px] rounded-[50%] mr-[10px]"></span>
            HTML & CSS
          </p>
          {/* ------------------------------------------------------------------- */}
          <p
            className=" text-[var(--font-color)] text-[16px] sm:text-[20px]
            border border-solid border-[var(--border-nav-color)] rounded-full
            px-[10px] py-[0px] w-[max-content] bg-[var(--home-downloadcv-bg)] mb-3 flex items-center"
          >
            <span className="inline-block bg-[var(--button-bg-color)] w-[10px] h-[10px] rounded-[50%] mr-[10px]"></span>
            Git & GitHub
          </p>
          {/* ------------------------------------------------------------------- */}
          <p
            className=" text-[var(--font-color)] text-[16px] sm:text-[20px]
            border border-solid border-[var(--border-nav-color)] rounded-full
            px-[10px] py-[0px] w-[max-content] bg-[var(--home-downloadcv-bg)] mb-3 flex items-center"
          >
            <span className="inline-block bg-[var(--button-bg-color)] w-[10px] h-[10px] rounded-[50%] mr-[10px]"></span>
            Figma
          </p>
        </div>
      </section>
      <section>
        <p className="text-[var(--nav-font-active)]">// Featured work</p>
        <h2 className="text-[46px] font-[900] mb-10 text-[var(--font-color)]">
          Selected Projects
        </h2>
      </section>
    </main>
  );
}

let styles = {
  Container: {
    padding: "0 20px",
  },
};
