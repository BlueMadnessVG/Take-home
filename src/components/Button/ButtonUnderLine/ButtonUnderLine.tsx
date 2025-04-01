import { ReactNode } from "react";
import { motion } from "framer-motion";
import style from "./ButtonUnderLine.module.css";

const underlineVariants = {
  initial: { scaleX: 0, originX: 0 },
  hovered: {
    scaleX: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

interface ButtonUnderLineProps {
  children: ReactNode;
  text_color?: string;
  bg_color?: string;
  fullWidth?: boolean;
}

export const ButtonUnderLine = ({
  children,
  text_color = "#1ba896",
  bg_color,
  fullWidth = false,
}: ButtonUnderLineProps) => {
  return (
    <motion.div
      initial="initial"
      animate="initial"
      whileHover="hovered"
      className={`${style.buttonUnderLine} ${fullWidth ? style.fullWidth : ""}`}
      style={{ background: bg_color }}
    >
      {children}
      <motion.div
        variants={underlineVariants}
        className={style.buttonUnderLine__line}
        style={{ background: text_color }}
      />
    </motion.div>
  );
};
