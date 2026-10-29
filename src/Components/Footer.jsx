function Footer() {
  return (
    <footer
      className=" mt-[50px]  bg-[var(--project-card-bg)] text-[var(--font-color)]
        flex flex-col md:flex-row 
     justify-between  py-[30px] rounde-[20px] px-[20px] bg-[var(--home-downloadcv-bg)] px-[20px] sm:px-[50px] "
    >
      <div>
        <h2 className="text-[28px] font-[700] mb-[10px]">Ibrahim Abdallah</h2>
        <p>© 2026 Front-End Developer. All rights reserved.</p>
      </div>
      <ul className="flex  w-[100%] justify-between items-center md:w-[30%] text-[18px] md:text-[24px] md:mr-[100px]">
        <li className="bg-[var(--home-downloadcv-bg)] px-[12px] py-[7px] rounded-[10px]">
          <a href="https://github.com/ibrahimabdallahhamed" target="_blank">
            GitHub
          </a>
        </li>
        <li className="bg-[var(--home-downloadcv-bg)] px-[12px] py-[7px] rounded-[10px]">
          <a
            href="https://www.linkedin.com/in/ibrahim-abdallah2024/ "
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li className="bg-[var(--home-downloadcv-bg)] px-[12px] py-[7px] rounded-[10px]">
          <a
            href="https://www.facebook.com/ibrahim.abdallahhamed.5/"
            target="_blank"
          >
            Facebook
          </a>
        </li>
        <li className="bg-[var(--home-downloadcv-bg)] px-[12px] py-[7px] rounded-[10px]">
          <a href="eng.ibrahimabdallah2024@gmail.com" target="_blank">
            Email
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
