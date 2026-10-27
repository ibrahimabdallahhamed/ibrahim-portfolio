function Skills(props) {
  return (
    <p
      className=" text-[var(--font-color)] text-[16px] sm:text-[20px]
            border border-solid border-[var(--border-nav-color)] rounded-full
            px-[10px] py-[0px] w-[max-content] bg-[var(--home-downloadcv-bg)] mb-3 flex items-center"
    >
      <span className="inline-block bg-[var(--button-bg-color)] w-[10px] h-[10px] rounded-[50%] mr-[10px]"></span>
      {props.skill}
    </p>
  );
}

export default Skills;
