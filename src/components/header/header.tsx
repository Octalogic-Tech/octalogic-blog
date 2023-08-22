"use client";
import * as React from "react";

import Image from "next/image";
import { usePathname } from "next/navigation";
import NextLink from "next/link";

import PillButton from "@/components/pill-button/pill-button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import vars from "@/config/vars";

interface NavItems {
  linkName: string;
  linkHref: string;
}

const navItems: NavItems[] = [
  {
    linkName: "Home",
    linkHref: "/",
  },
  {
    linkName: "Who We Are",
    linkHref: `${vars.domain}/about`,
  },
  {
    linkName: "Services",
    linkHref: `${vars.domain}/services`,
  },
  {
    linkName: "Let's Talk",
    linkHref: `${vars.domain}/contact`,
  },
];

function Header() {
  const pathname = usePathname();

  const navLinks = (navigationItems: NavItems[]) => {
    return navigationItems.map((item: NavItems) => {
      return item.linkName === "Let's Talk" ? (
        <div key={item.linkName} className={"py-0 px-[0rem] sm:px-[1rem]"}>
          <PillButton
            title={item.linkName}
            className={"py-[0.375rem] px-[1rem] sm:px-[0.75rem] text-xl sm:text-base"}
            href={`${vars.domain}/contact`}
          />
        </div>
      ) : (
        <div key={item.linkName} className={"py-0 px-[0.5rem] sm:px-[1rem]"}>
          <NextLink
            href={item.linkHref}
            className={`no-underline ${
              pathname === item.linkHref ? "text-primary-main" : "text-info-main"
            } hover:text-primary-main text-xl sm:text-base`}
          >
            {item.linkName}
          </NextLink>
        </div>
      );
    });
  };

  return (
    <Sheet>
      <div className={"flex"}>
        <nav
          className={`relative flex flex-col w-full box-border flex-shrink-0 text-white bg-transparent justify-center h-[7.25rem] sm:py-[0] sm:px-[2.4rem]`}
        >
          <div className={"relative flex items-center pl-8 pr-8 min-h-[4rem] sm:pl-6 sm:pr-6"}>
            <div className={"block flex-grow items-center"}>
              <NextLink href={"/"} className={"flex"}>
                <Image
                  src="/images/logos/octalogic.svg"
                  alt="Octalogic logo"
                  width={60}
                  height={60}
                />
              </NextLink>
            </div>
            <div className={"hidden sm:flex sm:flex-row sm:items-center"}>{navLinks(navItems)}</div>
            <div className="block sm:hidden">
              <SheetTrigger>
                <Image src="/images/icons/menu.svg" alt="menu icon" width={50} height={50} />
              </SheetTrigger>
            </div>
          </div>
        </nav>
      </div>
      <SheetContent className="flex flex-col justify-center items-end gap-y-6">
        {navLinks(navItems)}
      </SheetContent>
    </Sheet>
  );
}

export default Header;
