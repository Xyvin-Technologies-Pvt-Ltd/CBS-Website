"use client";

import { motion } from "framer-motion";

export default function InfinityAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <svg 
        className="infinity-animation" 
        viewBox="0 0 440 220"
        width="100%" 
        height="100%"
      >
        {/* Base infinity path */}
        <path
          className="infinity-path"
          d="M120,110 
             C120,150 150,186 190,186 
             C230,186 250,150 270,110
             C290,70 310,34 350,34
             C390,34 420,70 420,110
             C420,150 390,186 350,186
             C310,186 290,150 270,110
             C250,70 230,34 190,34
             C150,34 120,70 120,110"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="2"
        />

        {/* Moving Dot */}
        <circle
          className="moving-dot"
          r="6"
          fill="white"
        >
          <animateMotion
            dur="6s"
            repeatCount="indefinite"
            path="M120,110 
                 C120,150 150,186 190,186 
                 C230,186 250,150 270,110
                 C290,70 310,34 350,34
                 C390,34 420,70 420,110
                 C420,150 390,186 350,186
                 C310,186 290,150 270,110
                 C250,70 230,34 190,34
                 C150,34 120,70 120,110"
            keyPoints="0;0.25;0.5;0.75;1"
            keyTimes="0;0.25;0.5;0.75;1"
            calcMode="linear"
          />
        </circle>
      </svg>
    </motion.div>
  );
} 