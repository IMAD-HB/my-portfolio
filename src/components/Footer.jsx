import {
  RiFacebookFill,
  RiGithubFill,
  RiLinkedinFill,
} from "@remixicon/react";
import React from "react";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto text-green-500">
      <div className="flex flex-col justify-center items-center border-t-2 py-4">
        <div className="flex space-x-6 mb-2">
          <a
            href="https://www.facebook.com/imad.hb.1293"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my Facebook page"
          >
            <RiFacebookFill />
          </a>
          <a
            href="https://github.com/IMAD-HB"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my Github page"
          >
            <RiGithubFill />
          </a>
          <a
            href="https://www.linkedin.com/in/habbi-imad-eddine-41b479251/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my Linkedin page"
          >
            <RiLinkedinFill />
          </a>
        </div>
        <p className="text-sm">&copy; 2025 IMADHB. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
