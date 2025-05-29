"use client";

import Link from "next/link";

interface NavLinkProps {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
}

export default function NavLink({ href, isActive, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`font-medium text-[15px] transition-colors hover:text-primary
        ${isActive ? "text-primary" : "text-heading"}`}
    >
      {children}
    </Link>
  );
}
