"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface TeamMemberProps {
  firstName: string;
  lastName: string;
  position: string;
  image: string;
  description: string;
  social?: {
    linkedin?: string;
  };
}

export default function TeamMember({
  firstName,
  lastName,
  position,
  image,
  description,
  social,
}: TeamMemberProps) {
  return (
    <div className="bg-white rounded-lg border border-[#E6EEF4] p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 ">
      {/* Image */}
      <div className="w-32 h-32 mb-6">
        <div className="relative w-full h-full rounded-full overflow-hidden bg-gray-100">
          <Image
            src={image}
            alt={firstName}
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
      </div>

      {/* Content */}
      <div>
        <h3 className="text-xl font-bold text-heading ">{firstName}</h3>
        <h3 className="text-xl font-bold text-heading mb-2">{lastName}</h3>
        <p className="text-primary font-medium mb-4 min-h-12">{position}</p>
        <p className="text-[#4A5568] text-sm leading-relaxed mb-4 line-clamp-4">
          {description}
        </p>

        {/* Social Icons */}
        {social?.linkedin && (
          <div className="flex justify-center">
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
