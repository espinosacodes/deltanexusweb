import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to <span className="text-purple">improve</span> and{" "}
          <span className="text-purple">automate</span> your trading?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to us and let&apos;s discuss how we can help you achieve
          your trading goals.
        </p>
        <a href="https://calendly.com/santiagoespinosagiraldo1"target="_blank">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 DeltaNexus
        </p>

        <div className="flex items-center md:gap-3 gap-6">
    {socialMedia.map((info) => (
      <a
        key={info.id}
        href={info.link} // Assuming each socialMedia object has a 'link' property
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
      >
        <img src={info.img} alt="icons" width={20} height={20} />
      </a>
    ))}
  </div>
</div>
</footer>
);
};

export default Footer;
