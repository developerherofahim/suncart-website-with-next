"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, className, children, ...props }) => {
  const pathname = usePathname();
  console.log(pathname, "pathname");

  const isActive = href === pathname;

  return (
    <Link
      href={href}
      className={`${isActive ? "bg-[#F77013] text-white px-5 py-2 rounded-lg text-lg font-semibold hover:drop-shadow-sm transition" : ""} ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;