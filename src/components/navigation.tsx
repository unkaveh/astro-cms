import React from "react";
import type { FC } from "react";
import navData from "@data/navigation.json";
// Define the shape of a single link
type NavLink = {
  text: string;
  href: string;
};

interface NavigationProps {
  logoSrc?: string;
  logoAlt?: string;
  links?: NavLink[];
  activeUrl?: string;
}

const Navigation: FC<NavigationProps> = ({
  logoSrc,
  logoAlt,
  links,
  activeUrl,
}) => {
  // Fallback to values from navData if props aren't provided
  const finalLogoSrc = logoSrc || navData.logoSrc;
  const finalLogoAlt = logoAlt || navData.logoAlt;
  const finalLinks = links || navData.links;
  const finalActiveUrl = activeUrl || navData.activeUrl;

  return (
    <nav
      className="
          sticky 
          top-0 
          bg-black 
          text-white 
          min-h-[80px] 
          flex 
          items-center 
          justify-between 
          px-4
        "
    >
      {/* Left side: Logo */}
      <div className="flex items-center">
        <img src={finalLogoSrc} alt={finalLogoAlt} className="h-8 w-auto" />
      </div>

      {/* Right side: Links */}
      <div className="flex space-x-4">
        {finalLinks.map((link, index) => {
          const isActive = link.href === finalActiveUrl;
          return (
            <a
              key={index}
              href={link.href}
              className={`
                  px-4 
                  py-2 
                  hover:border-2 
                  hover:border-white 
                  ${isActive ? "bg-gray-800" : ""}
                `}
            >
              {link.text}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
