import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer
      className=" mt-[50px]  bg-[var(--project-card-bg)] text-[var(--font-color)]
        flex flex-col md:flex-row 
     justify-between  py-[30px] rounde-[20px] px-[20px] bg-[var(--home-downloadcv-bg)] px-[20px] sm:px-[50px] items-center "
    >
      <div>
        <h2 className="text-[28px] font-[700] mb-[10px]">Ibrahim Abdallah</h2>
        <h3 className="text-[22px] font-[400] text-[var(--button-bg-color)] mb-[10px] ">
          Frontend Developer
        </h3>
      </div>
      <div>
        <h3 className="text-[22px] font-[400] text-center mb-[30px]  ">
          Turning ideas into amazing web experiences
        </h3>
      </div>
      <ul className="flex  w-[100%] justify-between items-center md:w-[30%] text-[34px] md:text-[50px] md:mr-[100px]">
        <li>
          <a href="https://github.com/ibrahimabdallahhamed" target="_blank">
            <FontAwesomeIcon icon={faGithub} bounce />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ibrahim-abdallah2024/ "
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} bounce />
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/201148272793"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} bounce />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
