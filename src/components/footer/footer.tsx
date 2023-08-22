"use client";

import Image from "next/image";
import NextLink from "next/link";

import Link from "@/components/link/link";

import { Socials } from "@/constants/socials";

import { ISocial } from "@/interfaces";

const FooterLink = ({ name, href }: { name: string; href: string }) => {
  return (
    <div
      className={
        "normal-case text-center p-1 flex-[0_0_33.333333%] sm:flex-[0_0_16.666667%] sm: max-w-[16.666667%]"
      }
    >
      <Link
        href={href}
        color="info.main"
        className={"text-base opacity-70 hover:opacity-100"}
        style={{ transition: " opacity 0.2s" }}
      >
        {name}
      </Link>
    </div>
  );
};

const SocialLinks = ({ socials }: { socials: ISocial[] }) => {
  const elementRows = socials.map((social) => (
    <div
      key={social.name}
      className={"opacity-70 hover:opacity-100"}
      style={{ transition: " opacity 0.2s" }}
    >
      <a href={social.link} target="_blank" rel="noreferrer">
        <Image
          src={social.iconUrl}
          alt={`${social.name} logo`}
          width={16}
          height={16}
          className={"cursor-pointer"}
        />
      </a>
    </div>
  ));

  return <>{elementRows}</>;
};

export function Footer() {
  const date: Date = new Date();

  return (
    <div className={"w-full h-[22.375rem] flex flex-col items-center"}>
      <div className={"mt-12 flex"}>
        <NextLink href={"/"}>
          <Image
            src="/images/logos/octalogic.svg"
            alt="Octalogic logo"
            width={60}
            height={60}
            className={"cursor-pointer"}
          />
        </NextLink>
      </div>
      <div className={"w-full flex flex-col items-center my-12"}>
        <div className={"w-full flex justify-center mb-[0.187rem] gap-x-4 items-center"}>
          <FooterLink name={"Contact"} href={"contact"} />
          <FooterLink name={"Home"} href={"/"} />
          <FooterLink name={"Remote Resources"} href={"remote-resources"} />
        </div>
        <div className={"w-full flex justify-center mb-[0.187rem] gap-x-4 items-center"}>
          <FooterLink name={"Privacy"} href={"privacy-policy"} />
          <FooterLink name={"About"} href={"about"} />
          <FooterLink name={"Web Dev"} href={"web-development"} />
        </div>
        <div className={"w-full flex justify-center mb-[0.187rem] gap-x-4 items-center"}>
          <FooterLink name={"Terms of Service"} href={"terms-of-service"} />
          <FooterLink name={"Services"} href={"services"} />
          <FooterLink name={"Mobile Dev"} href={"mobile-development"} />
        </div>
      </div>
      <div className={"flex items-center mb-4 gap-4"}>
        <SocialLinks socials={Socials} />
      </div>
      <div className={"text-[0.8rem]/[0.8rem] text-center pb-2"}>
        © 2017 - {date.getFullYear()}, Octalogic Tech LLP. All rights reserved
      </div>
    </div>
  );
}

export default Footer;
