import { motion } from "framer-motion";
import style from "./FeaturesCard.module.css";

interface FeaturesCardProps {
  number: string;
  title: string;
  description: string;
  index: number;
}

export const FeaturesCard = ({
  number,
  title,
  description,
  index,
}: FeaturesCardProps) => {
  return (
    <motion.div
      className={style.step}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <h3 className={style.stepHeader}>
        <span className={style.stepNumber}>{number} - </span>
        <span>{title}</span>
      </h3>
      <p className={style.stepDescription}>{description}</p>
    </motion.div>
  );
};
