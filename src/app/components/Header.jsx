"use client";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { useState } from "react";
import {
  Navbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  Link,
} from "@nextui-org/react";
import { Image } from "@nextui-org/react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "01 Experiences", path: "/experiences" },
    { name: "02 Projects", path: "/projects" },
    { name: "03 Services", path: "/services" },
    {
      name: "04 Resumé",
      path: "/Resume_henry-navntoft.pdf",
    },
  ];

  return (
    <Navbar
      className="mt-10"
      position="static"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent justify="start">
        <Link href="/" color="foreground">
          <h4 className="">HN</h4>
        </Link>
      </NavbarContent>
      <NavbarContent justify="end">
        <ThemeSwitcher />
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarMenu className="mt-10">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              color="foreground"
              className="py-6 flex justify-center"
              href={item.path}
            >
              <h2>{item.name}</h2>
            </Link>
          </NavbarMenuItem>
        ))}
        <div className="flex justify-center gap-6">
          <div className="flex ">
            <Image src="/arrow.go.svg" alt="arrow" className="dark:invert" />
            <Link
              className="animated-underline"
              color="foreground"
              target="_blank"
              href="https://github.com/henrynavntoft"
            >
              github
            </Link>
          </div>
          <div className="flex ">
            <Image src="/arrow.go.svg" alt="arrow" className="dark:invert" />
            <Link
              className="animated-underline"
              color="foreground"
              target="_blank"
              href="https://www.linkedin.com/in/henry-lundberg-navntoft/"
            >
              linkedin
            </Link>
          </div>
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
