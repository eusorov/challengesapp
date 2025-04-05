"use client";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LogoTsx } from "./logo";

export function Flownavbar() {
  const homeLink = "/";
  const [activeLink, setActiveLink] = useState(homeLink);
  const [showProfile, setShowProfile] = useState(false); // State to toggle between button and Profile
  const [showShadow, setShowShadow] = useState(false); // State to toggle shadow

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
  };

  const handleShowProfileClick = (toggle: boolean) => {
    setShowProfile(!toggle);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowShadow(true);
      } else {
        setShowShadow(false);
      }
    };

    // just trigger this so that the initial state
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      fluid
      rounded
      className={`${showShadow ? "shadow-md" : ""} sticky top-0 z-10 w-full max-w-6xl bg-gradient-to-r from-blue-500 to-green-500 text-white`}
    >
      <NavbarBrand
        as={Link}
        href={homeLink}
        onClick={() => handleLinkClick(homeLink)}
      >
        <div className="mr-2 w-12">
          <LogoTsx />
        </div>

        <span className="self-center text-xl font-semibold whitespace-nowrap">
          Challenges
        </span>
      </NavbarBrand>
      <div className="flex gap-3 md:order-2">
        {showProfile ? (
          <Profile onClick={() => handleShowProfileClick(showProfile)} /> // Display Profile component
        ) : (
          <Button
            id="#getStartedId"
            onClick={() => handleShowProfileClick(showProfile)}
          >
            Get started
          </Button>
        )}

        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink
          className="text-white"
          href={homeLink}
          active={activeLink === homeLink}
          onClick={() => handleLinkClick(homeLink)}
        >
          Home
        </NavbarLink>
        <NavbarLink
          as={Link}
          href="/about"
          className="text-white"
          active={activeLink === "/about"}
          onClick={() => handleLinkClick("/about")}
        >
          About
        </NavbarLink>
        <NavbarLink
          as={Link}
          href="/claude"
          className="text-white"
          active={activeLink === "/claude"}
          onClick={() => handleLinkClick("/claude")}
        >
          Claude Page
        </NavbarLink>

        <NavbarLink href="#" className="text-white">
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

interface ProfileProps {
  onClick?: () => void;
}

const Profile: React.FC<ProfileProps> = ({ onClick }) => {
  return (
    <Dropdown
      arrowIcon={false}
      inline
      label={
        <Avatar
          alt="User settings"
          img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          rounded
        />
      }
    >
      <DropdownHeader>
        <span className="block text-sm">Bonnie Green</span>
        <span className="block truncate text-sm font-medium">
          name@flowbite.com
        </span>
      </DropdownHeader>
      <DropdownItem>Dashboard</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Earnings</DropdownItem>
      <DropdownDivider />
      <DropdownItem onClick={onClick}>Sign out</DropdownItem>
    </Dropdown>
  );
};
