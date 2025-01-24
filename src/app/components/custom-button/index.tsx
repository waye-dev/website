"use client";

import React from "react";
import Link from "next/link";

const CustomButton = ({
  children,
  href,
  props,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
  props?: React.HtmlHTMLAttributes<HTMLAnchorElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>;
}) => {
  return (
    <Link
      href={href}
      className={`rounded-full bg-blue-custom-200 text-lg leading-[160%] font-medium py-[14px] px-[22px] text-black text-nowrap  ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomButton;
