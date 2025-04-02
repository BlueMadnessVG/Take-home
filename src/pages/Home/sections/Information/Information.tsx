import { InformationCard } from "../../../../components/Card";
import style from "./Information.module.css";
import { CardsInfo } from "./Cards.Info";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

export const Information = () => {
  return (
    <motion.section
      className={style.information}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.div className={style.header} variants={itemVariants}>
        <h1 className={style.title}>Why Thousands Trust Us for</h1>
        <h1 className={style.title}>Their Insurance Needs</h1>
        <p className={style.subtitle}>
          Reliable, affordable, and hassle-free insurance solutions tailored for
          you. With 24/7 support and quick claims processing.
        </p>
      </motion.div>

      <div className={style.grid}>
        {Object.values(CardsInfo).map((info, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <InformationCard
              icon={<info.icon />}
              title={info.title}
              description={info.description}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
