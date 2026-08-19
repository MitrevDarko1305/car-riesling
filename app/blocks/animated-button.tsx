"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";

interface MotionButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
}

export default function MotionButton({
  children,
  className = "",
  ...rest
}: MotionButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.97, y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={` bg-foreground cursor-pointer px-4 py-3 text-sm font-black text-light shadow-sm ${className}`}
      {...rest}
    >
      {children}
    </motion.button>
  );
}