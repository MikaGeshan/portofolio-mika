import React from "react";

import instagramIcon from "../Images/icons/instagram.svg?url";
import githubIcon from "../Images/icons/github.svg?url";
import linkedinIcon from "../Images/icons/linkedin.svg?url";
import tiktokIcon from "../Images/icons/tiktok.svg?url";
import gmailIcon from "../Images/icons/gmail.svg?url";

function Footer() {
  return (
    <footer className="bg-blue-700 text-white border-t-4 border-black shadow-[0_6px_0_0_black] px-8 py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
        <div className="text-left">
          <h1 className="text-2xl font-bold tracking-wider">Mika Geshan</h1>
          <div className="flex justify-start gap-4 mt-4">
            <a href="https://github.com/MikaGeshan" target="_blank">
              <img
                src={githubIcon}
                alt="GitHub"
                className="w-7 h-7 hover:scale-110 transition-transform"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/mika-geshan-1741b7330"
              target="_blank"
            >
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="w-7 h-7 hover:scale-110 transition-transform"
              />
            </a>
            <a href="https://www.instagram.com/noturfavmikaaa/" target="_blank">
              <img
                src={instagramIcon}
                alt="Instagram"
                className="w-7 h-7 hover:scale-110 transition-transform"
              />
            </a>
            <a href="https://www.tiktok.com/@pemudaresing0" target="_blank">
              <img
                src={tiktokIcon}
                alt="TikTok"
                className="w-7 h-7 hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </div>

        <div className="text-left">
          <h2 className="text-xl font-bold mb-3">Contact Us</h2>
          <a
            href="mailto:mikageshan@gmail.com"
            className="flex items-center gap-2"
          >
            <img src={gmailIcon} alt="Gmail" className="w-6 h-6" />
            mikageshan@gmail.com
          </a>
        </div>
      </div>

      <div className="border-t-2 border-black pt-4 text-center">
        <p className="text-sm font-medium">
          © 2025 Mika Geshan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
