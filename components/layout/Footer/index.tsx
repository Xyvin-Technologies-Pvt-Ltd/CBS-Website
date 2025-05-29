"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import Image from "next/image";

const LINKS = {
  solutions: [
    { label: "Technology", href: "/solutions/technology" },
    { label: "Training", href: "/solutions/training" },
    { label: "Consulting", href: "/solutions/consulting" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Events", href: "/events" },
  ],
};

const SOCIAL_LINKS = [
  { icon: faFacebookF, href: "#" },
  { icon: faTwitter, href: "#" },
  { icon: faLinkedinIn, href: "#" },
  { icon: faInstagram, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#083c54] text-white pt-16 md:pt-20 lg:pt-24 pb-6">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12 md:mb-16">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex flex-row">

            <Image
                src='/images/logo.png'
                alt="logo"
                width={60}
                height={50}
              />
            <Logo color="light" />
            </div>

            <p className="text-gray-400 mb-6">
              End-to-end business transformation solutions helping organizations
              achieve continuous improvements through technology and innovation.
            </p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <FontAwesomeIcon icon={link.icon} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Solutions</h3>
            <ul className="space-y-3">
              {LINKS.solutions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              {LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-3">
              {LINKS.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-white">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>© 2024 Continuity Business Solutions. All rights reserved.</p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
