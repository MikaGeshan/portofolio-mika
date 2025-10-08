import React from "react";
import InstagramIcon from "../Images/icons/instagram.svg";
import GithubIcon from "../Images/icons/github.svg";
import LinkedInIcon from "../Images/icons/linkedin.svg";
import TiktokIcon from "../Images/icons/tiktok.svg";
import GmailIcon from "../Images/icons/gmail.svg";

function Footer() {
  return (
    <footer className="bg-blue-700 text-white border-t-4 border-black shadow-[0_6px_0_0_black] px-8 py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
        {/* ProfileSection */}
        <div className="text-left">
          <h1 className="text-2xl font-bold tracking-wider">Mika Geshan</h1>
          <div className="flex justify-start gap-4 mt-4">
            <a
              href="https://github.com/MikaGeshan"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="w-7 h-7 transition-transform hover:scale-110 hover:fill-black" />
            </a>
            <a
              href="https://www.linkedin.com/in/mika-geshan-1741b7330"
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className="w-7 h-7 transition-transform hover:scale-110 hover:fill-[#0077b5]" />
            </a>
            <a
              href="https://www.instagram.com/noturfavmikaaa/"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="w-7 h-7 transition-transform hover:scale-110 hover:fill-[#E1306C]" />
            </a>
            <a
              href="https://www.tiktok.com/@pemudaresing0"
              title="TikTok"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TiktokIcon className="w-7 h-7 transition-transform hover:scale-110 hover:fill-[#000000]" />
            </a>
          </div>
        </div>

        {/* Pages Section */}
        <div className="text-left">
          <h2 className="text-xl font-bold mb-3">Pages</h2>
          <ul className="space-y-1 font-mono">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:underline">
                Projects
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="text-left">
          <h2 className="text-xl font-bold mb-3">Contact Us</h2>
          <ul className="space-y-1 font-mono">
            <li>
              <a
                href="mailto:mikageshan@gmail.com"
                className="flex items-center gap-2 hover:underline transition-all duration-300 ease-in-out transform hover:scale-110"
              >
                <GmailIcon className="w-6 h-6 transition-transform hover:scale-110 hover:fill-[#EA4335]" />
                mikageshan@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="text-left md:text-right">
          <h2 className="text-xl font-bold mb-3">Legal</h2>
          <ul className="space-y-1 font-mono">
            <li>
              <a href="/privacy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:underline">
                Terms of Service
              </a>
            </li>
          </ul>
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
