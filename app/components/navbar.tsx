"use client";
import {
  Navbar,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";
import { useState } from "react";

export function MyNavbar() {
  const homeLink = "/";
  const [activeLink, setActiveLink] = useState(homeLink);

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
  };
  return (
    <Navbar fluid={true} rounded className="bg-gray-100">
      <div></div>
      <div className="flex gap-3 md:order-2">
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink
          href={homeLink}
          active={activeLink === homeLink}
          onClick={() => handleLinkClick(homeLink)}
        >
          Home
        </NavbarLink>
        <NavbarLink
          as={Link}
          href="/about"
          active={activeLink === "/about"}
          onClick={() => handleLinkClick("/about")}
        >
          About
        </NavbarLink>

        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
