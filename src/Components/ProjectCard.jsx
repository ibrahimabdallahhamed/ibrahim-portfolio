import Skills from "./Skills";
function ProjectCard({ prop }) {
  return (
    <div className=" border-[2px] border-solid border-[var(--border-nav-color)] rounded-[10px] p-[2px] md:h-[900px]">
      <div className="bg-[var(--project-card-bg)] px-[20px] py-[20px]">
        <div className="flex gap-2 mb-5 px-2">
          <span className="inline-block bg-[#526077] w-[10px] h-[10px] rounded-[50%]"></span>
          <span className="inline-block bg-[#526077] w-[10px] h-[10px] rounded-[50%]"></span>
          <span className="inline-block bg-[#526077] w-[10px] h-[10px] rounded-[50%]"></span>
        </div>
        <div className="mb-[30px] w-[80%] h-[15px] bg-[var(--button-bg-color)] rounded-[10px]">
          {" "}
        </div>
        <img src={prop.pic} className="rounded-[10px] mb-[20px]"></img>
      </div>
      <div className="px-[20px] py-[20px]">
        <h2 className="text-[24px] font-[700] text-[var(--font-color)]">
          {prop.header}
        </h2>
        <p className="text-[18px] text-[#526077]">{prop.description}</p>
        {/* <div className="grid grid-cols-2 sm:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-[10px] mt-[20px]"> */}
        <div className="flex flex-wrap gap-[25px] mt-[20px]">
          {prop.skills.map((skill) => (
            <Skills skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
