"use client";

import { useState } from "react";
import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold ml-[10px] text-gray-300">Angelot</span>
        </a>

        {/* Bouton hamburger visible sur tous les écrans */}
        <div className="flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <div className={`space-y-2 ${isOpen ? "open" : ""}`}>
              <span className={`block w-8 h-1 bg-white transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2.5" : ""}`} />
              <span className={`block w-8 h-1 bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`block w-8 h-1 bg-white transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Menu déroulant visible quand le hamburger est cliqué */}
      {isOpen && (
        <div className="flex flex-col items-center bg-[#03001488] text-white py-5 space-y-4">
          <a href="#about-me" className="cursor-pointer">
            Competence
          </a>
          <a href="#skills" className="cursor-pointer">
            Education
          </a>
          <a href="#projects" className="cursor-pointer">
            Projects
          </a>
          <a href="#experience" className="cursor-pointer">
            Experience
          </a>
          <a href="#contact" className="cursor-pointer">
            Contact
          </a>

          <div className="flex flex-row gap-5">
            {Socials.map((social) => (
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
