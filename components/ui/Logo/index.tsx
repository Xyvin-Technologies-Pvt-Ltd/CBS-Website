"use client";

interface LogoProps {
  color?: "dark" | "light";
}

export default function Logo({ color = "dark" }: LogoProps) {
  const textColor = color === "dark" ? "#1A2B4B" : "#FFFFFF";
  const mutedColor = color === "dark" ? "#64748B" : "#A3AED0";

  return (
    <svg width="160" height="48" viewBox="30 0 200 48" fill="none">
      {/* Infinity/Continuity Symbol */}
      {/* <path
        d="M16 24C16 27.3137 13.3137 30 10 30C6.68629 30 4 27.3137 4 24C4 20.6863 6.68629 18 10 18C11.5913 18 13.0174 18.6321 14.0711 19.6569"
        stroke="#C8102E"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M14 24C14 20.6863 16.6863 18 20 18C23.3137 18 26 20.6863 26 24C26 27.3137 23.3137 30 20 30C18.4087 30 16.9826 29.3679 15.9289 28.3431"
        stroke="#007236"
        strokeWidth="2.5"
        strokeLinecap="round"
      /> */}

      {/* Company Name */}
      <text
        x="40"
        y="28"
        fill={textColor}
        fontFamily="Manrope"
        fontWeight="700"
        fontSize="22"
        letterSpacing="1"
      >
        CONTINUITY
      </text>

      {/* Tagline */}
      <text
        x="40"
        y="44"
        fill={mutedColor}
        fontFamily="Manrope"
        fontWeight="500"
        fontSize="11"
        letterSpacing="2"
      >
        BUSINESS SOLUTIONS
      </text>
    </svg>
  );
}
