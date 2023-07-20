"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {
  text: string;
  href: string;
};

const NavButton = ({ text, href }: Props) => {
  const pathname = usePathname();
  const styling =
    pathname === href
      ? "inline-block border-b-2 border-blue-600 p-2 text-base font-medium leading-5 tracking-wide text-black hover:text-black"
      : "inline-block p-2 align-middle text-base font-medium leading-5 tracking-wide text-gray-400 hover:text-black";
  return (
    <li className="mr-5">
      <Link className={styling} href={href}>
        {text}
      </Link>
    </li>
  );
};

export default NavButton;
