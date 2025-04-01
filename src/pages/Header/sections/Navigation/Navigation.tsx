import { FlipText } from "../../../../components/Text";
import { Route } from "../../../../models";
import { AnimatePresence, motion } from "framer-motion";
import style from "./Navigation.module.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    y: 20,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
    },
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
      duration: 0.2,
    },
  },
};

interface NavigationProps {
  items: Route[];
  orientation?: "horizontal" | "vertical";
}

export const Navigation = ({
  items,
  orientation = "horizontal",
}: NavigationProps) => {
  return (
    <motion.div
      className={`${style.nav} ${style[`nav--${orientation}`]}`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {items.map(({ name, route }) => (
        <motion.a
          key={name}
          className={style.nav__item}
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: orientation === "horizontal" ? 1.05 : 1.02 }}
          whileTap={{ scale: 0.95 }}
        >
          <FlipText active={false}> {name} </FlipText>
        </motion.a>
      ))}
    </motion.div>
  );
};
