import React from "react";
import { motion, MotionProps } from "framer-motion";

interface LineProps extends MotionProps {
  stroke?: string;
  strokeWidth?: number;
  vectorEffect?: string;
}

export const MobileModalButton = ({
  isOpen = false,
  width = 24,
  height = 18,
  strokeWidth = 1,
  color = "#0E3B51",
  transition = { type: "spring", stiffness: 300, damping: 20 },
  lineProps = {},
  ...props
}) => {
  const variant = isOpen ? "opened" : "closed";

  const lineVariants = {
    top: {
      closed: { rotate: 0, translateY: 0 },
      opened: { rotate: 45, translateY: 2 },
    },
    center: {
      closed: { opacity: 1 },
      opened: { opacity: 0 },
    },
    bottom: {
      closed: { rotate: 0, translateY: 0 },
      opened: { rotate: -45, translateY: -2 },
    },
  };

  const mergedLineProps: LineProps = {
    stroke: color,
    strokeWidth: strokeWidth,
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
    transition,
    ...lineProps,
  };

  const unitHeight = 4;
  const unitWidth = (unitHeight * width) / height;

  // Explicitly type the SVG props we want to pass
  const svgProps: React.ComponentProps<typeof motion.svg> = {
    viewBox: `0 0 ${unitWidth} ${unitHeight}`,
    overflow: "visible",
    preserveAspectRatio: "none",
    width,
    height,
    "aria-label": isOpen ? "Close menu" : "Open menu",
    "aria-expanded": isOpen,
    role: "button",
    className: `mt-1 cursor-pointer focus:outline-none flex sm:hidden ${
      props.className || ""
    }`,
    ...props, // Only spread props that are valid for motion.svg
  };

  return (
    <motion.svg {...svgProps}>
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="0"
        y2="0"
        variants={lineVariants.top}
        {...mergedLineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="2"
        y2="2"
        variants={lineVariants.center}
        {...mergedLineProps}
      />
      <motion.line
        x1="0"
        x2={unitWidth}
        y1="4"
        y2="4"
        variants={lineVariants.bottom}
        {...mergedLineProps}
      />
    </motion.svg>
  );
};
