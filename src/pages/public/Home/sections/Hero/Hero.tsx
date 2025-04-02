import { motion } from "framer-motion";
import style from "./Hero.module.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export const Hero = () => {
  return (
    <motion.section
      className={style.hero}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className={style.content}>
        <motion.h1 variants={itemVariants}>
          Smart Insurance Solutions for a Worry
          <motion.span className={style.highlight} variants={itemVariants}>
            Free Life
          </motion.span>
        </motion.h1>

        <motion.p variants={itemVariants}>
          Stay protected with flexible coverage that safeguards your health,
          family, and assets. Choose the right plan and enjoy financial peace of
          mind.
        </motion.p>

        <motion.div className={style.buttons} variants={itemVariants}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={style.primaryBtn}
          >
            Get a Free Quote
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={style.secondaryBtn}
          >
            View Our Plans
          </motion.button>
        </motion.div>
      </div>

      <motion.picture className={style.imageContainer} variants={itemVariants}>
        <source srcSet="/images/hero/hero-image.jpg" type="image/jpeg" />
        <img
          src="/images/hero/hero-image.jpg"
          alt="Happy family protected by insurance"
          className={style.heroImage}
          loading="eager"
        />
      </motion.picture>
    </motion.section>
  );
};
