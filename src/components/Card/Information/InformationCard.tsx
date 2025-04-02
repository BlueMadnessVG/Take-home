import style from "./InformationCard.module.css";
import { motion } from "framer-motion";

interface InformationCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const InformationCard = ({
  icon,
  title,
  description,
}: InformationCardProps) => {
  return (
    <motion.div
      className={style.card}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className={style.iconContainer}>{icon}</div>

      <div className={style.content}>
        <h3 className={style.title}>{title}</h3>
        <p className={style.description}>{description}</p>
      </div>
    </motion.div>
  );
};
