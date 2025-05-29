"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import MobileMenu from "./MobileMenu";
import MegaMenu from "./MegaMenu";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white py-4 border-b border-border sticky top-0 z-[9999]">
      <Container>
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <Link href="/" className="logo relative z-[101] cursor-pointer flex flex-row">
            <Image
                src='/images/logo.png'
                alt="logo"
                width={50}
                height={50}
                className="mx-auto object-contain"
            />
            <div>
            <Logo />
            </div>

          </Link>

          {/* Mega Menu */}
          <div className="hidden lg:flex items-center">
            <MegaMenu />
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </Container>
    </nav>
  );
}
