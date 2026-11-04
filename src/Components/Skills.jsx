/* function Skills(props) {
  return (
    <p
      className=" text-[var(--font-color)] text-[16px] sm:text-[20px]
            border border-solid border-[var(--border-nav-color)] rounded-full
            px-[10px] py-[0px] w-[max-content] bg-[var(--home-downloadcv-bg)] mb-3 flex items-center w-[100%]"
    >
      <span className="inline-block bg-[var(--button-bg-color)] w-[10px] h-[10px] rounded-[50%] mr-[10px]"></span>
      {props.skill}
    </p>
  );
}

export default Skills; */
function Skills(props) {
  return (
    <div
      className="p-[1px] rounded-xl bg-gradient-to-r from-purple-500/40 via-indigo-500/40 to-blue-500/40 w-[max-content] mb-3
     hover:scale-105 transition-transform "
    >
      <p
        className="text-[var(--font-color)] text-[16px] sm:text-[20px]
                   rounded-[11px] px-4 py-1.5 bg-[var(--skill-bg)] 
                   flex items-center m-0"
      >
        <span className="inline-block bg-[var(--button-bg-color)] w-[8px] h-[8px] rounded-full mr-[10px]" />
        {props.skill}
      </p>
    </div>
  );
}

export default Skills;
