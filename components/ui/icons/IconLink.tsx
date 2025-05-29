"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface IconLinkProps {
  href: string;
  icon: IconDefinition;
  children: React.ReactNode;
}

export default function IconLink({ href, icon, children }: IconLinkProps) {
  return (
    <a href={href} className="hover:opacity-90">
      <FontAwesomeIcon icon={icon} className="mr-2" /> {children}
    </a>
  );
}
