import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  function submitHandler(e) {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");
    const SERVICE_ID = "service_nejsw0c";
    const TEMPLATE_ID = "template_zdwkmxs";
    const PUBLIC_KEY = "iSuUz6G3I-MhNeqx1";
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        setStatusMessage("Message sent successfully!");
        setLoading(false);
        formRef.current.reset();
      },
      (error) => {
        console.log(error.text);
        setStatusMessage("Failed to send message. Please try again.");
        setLoading(false);
      },
    );
  }
  return (
    <main className="px-[20px] sm:px-[50px]  py-[50px]">
      <section>
        <p className="text-[var(--nav-font-active)]">// contact</p>
        <h1 className="text-[72px] font-[700] mb-[10px] text-[var(--font-color)] ">
          Let's talk
        </h1>
        <p className="text-[var(--nav-link-color)]">
          Tell me about your project or the role you're hiring for. I usually
          reply within [24 hours].
        </p>
      </section>
      <section className="flex flex-col md:flex-row justify-between items-center gap-[5%] ">
        <section className=" bg-[var( --contact-message-bg)] mb-[50px] flex-1 w-[100%] sm:w-[40%] mt-[20px] border-1 border-[var(--border-nav-color)] rounded-[7px]  p-[20px]">
          <form onSubmit={submitHandler} ref={formRef}>
            <div className="flex flex-col md:flex-row justify-between gap-[10px] ">
              <div className="w-full">
                <label
                  htmlFor="name"
                  className="block mb-[5px] text-[var(--font-color)]"
                >
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="from-name"
                  className="border-1 border-[var(--border-nav-color)] rounded-[7px] p-[5px] w-[100%] placeholder:text-[var(--nav-link-color)] "
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="email"
                  className="block mb-[5px] text-[var(--font-color)]"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="from-email"
                  placeholder="you@example.com"
                  className="border-1 border-[var(--border-nav-color)] rounded-[7px] p-[5px] w-[100%] placeholder:text-[var(--nav-link-color)]"
                  required
                />
              </div>
            </div>
            <div className="mt-[20px]">
              <label
                htmlFor="subject"
                className="block mb-[5px] text-[var(--font-color)]"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="What is this about ?"
                className="border-1 border-[var(--border-nav-color)] rounded-[7px] p-[5px] w-[100%] placeholder:text-[var(--nav-link-color)]"
                required
              />
            </div>
            <div className="mt-[20px]">
              <label className="block mb-[5px] text-[var(--font-color)]">
                Message
              </label>
              <textarea
                placeholder="Tell me a bit about it..."
                className="border-1 border-[var(--border-nav-color)] rounded-[7px] p-[10px] w-[100%] h-[300px] placeholder:text-[var(--nav-link-color)]"
                required
              />
            </div>
            <button
              type="submit"
              className="text-[var(--font-button-color)] bg-[var(--button-bg-color)] px-[10px] py-[7px] rounded-[10px] mt-[20px]"
            >
              {loading ? "Sending..." : "Send message"}

              <FontAwesomeIcon
                icon={faPaperPlane}
                className="ml-[10px] text-[12px] "
              />
            </button>
            {statusMessage && (
              <p className="mt-[15px] text-[14px] text-[var(--nav-font-active)]">
                {statusMessage}
              </p>
            )}
          </form>
        </section>
        <section className="w-[100%] sm:w-[40%]">
          <p
            className="mb-10 text-[var(--nav-link-color)] text-[20px] 
            border border-solid border-[var(--border-nav-color)] rounded-full
            px-[25px] py-[10px] w-[max-content] bg-[var(--home-downloadcv-bg)]"
          >
            <span className="inline-block bg-[#16A34A] w-[15px] h-[15px] rounded-[50%] mr-[20px]"></span>
            Available for work
          </p>
          {/* --------------------------------------------------------------------------------------------------------------- */}
          <div className="flex items-center gap-[15px] sm:gap-[25px] border-2 border-[var(--border-nav-color)] py-[20px] px-[10px] sm:px-[20px] rounded-[20px] mb-[20px]">
            <p className="p-[15px] text-[15px] bg-[var(--nav-link-active-bg-color)] text-[var(--button-bg-color)] rounded-[10px] ">
              @
            </p>
            <p>
              <p className="text-[var(--nav-link-color)] ">Email</p>
              <p className="text-[14px] sm:text-[18px] font-[500] text-[var(--font-color)]  ">
                eng.ibrahimabdallah2024@gmail.com
              </p>
            </p>
          </div>
          {/* --------------------------------------------------------------------------------------------------------------- */}
          <div className="flex items-center gap-[15px] sm:gap-[25px] border-2 border-[var(--border-nav-color)] py-[20px] px-[10px] sm:px-[20px] rounded-[20px] mb-[20px] ">
            <p className="p-[15px] text-[15px] bg-[var(--nav-link-active-bg-color)] text-[var(--button-bg-color)] rounded-[10px] ">
              in
            </p>
            <p>
              <p className="text-[var(--nav-link-color)] ">Linkedin</p>
              <p className="text-[14px] sm:text-[18px] font-[500] text-[var(--font-color)] ">
                linkedin.com/in/ibrahim-abdallah2024/
              </p>
            </p>
          </div>
          {/* --------------------------------------------------------------------------------------------------------------- */}
          <div className="flex items-center gap-[15px] sm:gap-[25px] border-2 border-[var(--border-nav-color)] py-[20px] px-[10px] sm:px-[20px] rounded-[20px] mb-[20px] ">
            <p className="p-[15px] text-[15px] bg-[var(--nav-link-active-bg-color)] text-[var(--button-bg-color)] rounded-[10px] ">
              gh
            </p>
            <p>
              <p className="text-[var(--nav-link-color)] ">GitHub</p>
              <p className="text-[14px] sm:text-[18px] font-[500] text-[var(--font-color)] ">
                github.com/ibrahimabdallahhamed
              </p>
            </p>
          </div>
          {/* --------------------------------------------------------------------------------------------------------------- */}
          <div className="flex items-center gap-[15px] sm:gap-[25px] border-2 border-[var(--border-nav-color)] py-[20px] px-[10px] sm:px-[20px] rounded-[20px] mb-[20px] ">
            <p className="p-[15px] text-[15px] bg-[var(--nav-link-active-bg-color)] text-[var(--button-bg-color)] rounded-[10px] ">
              wa
            </p>
            <p>
              <p className="text-[var(--nav-link-color)] ">WhatsApp</p>
              <p className="text-[14px] sm:text-[18px] font-[500] text-[var(--font-color)] ">
                +201148272793
              </p>
            </p>
          </div>
          {/* --------------------------------------------------------------------------------------------------------------- */}
        </section>
      </section>
    </main>
  );
}
