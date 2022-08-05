import React from "react";

import { ReactComponent as GithubImg } from "../assets/github.svg";
import { ReactComponent as InstagramImg } from "../assets/instagram.svg";
import { ReactComponent as TelegramImg } from "../assets/telegram.svg";
import { ReactComponent as EmailImg } from "../assets/email.svg";
import { ReactComponent as ResumeImg } from "../assets/resume.svg";
import resumePdf from "../assets/CV_Daniel_Hutsuliak.pdf";

function Footer() {
  return (
    <div
      id="contact"
      className="bg-primary w-full p-20 flex flex-col text-center justify-center gap-8"
    >
      <h4 className="text-2xl"> Contact Me </h4>
      <div className="flex justify-center gap-10">
        <a
          className="text-secondary flex gap-2"
          href="https://github.com/danhutsuliak"
          target="_blank"
          rel="noreferrer"
        >
          <GithubImg />
          <p className="font-bold">danhutsuliak</p>
        </a>
        <a
          className="text-secondary flex gap-2"
          href="https://instagram.com/danhutsuliak"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramImg />
          <p className="font-bold">danhutsuliak</p>
        </a>
        <a
          className="text-secondary flex gap-2"
          href="https://t.me/danhutsuliak"
          target="_blank"
          rel="noreferrer"
        >
          <TelegramImg />
          <p className="font-bold">danhutsuliak</p>
        </a>
        <a
          className="text-secondary flex gap-2"
          href="mailto:danguts23@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <div className="bg-black w-6 h-6 p-1 rounded-md">
            <EmailImg />
          </div>
          <p className="font-bold">danguts23@gmail.com</p>
        </a>
        <a
          className="text-secondary flex gap-2"
          href={resumePdf}
          target="_blank"
          rel="noreferrer"
        >
          <ResumeImg />
          <p className="font-bold">Resume</p>
        </a>
      </div>
    </div>
  );
}

export default Footer;
