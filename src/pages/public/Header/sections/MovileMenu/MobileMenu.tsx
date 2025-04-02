import { Modal } from "../../../Modal";
import { motion } from "framer-motion";
import style from "./MobileMenu.module.css";
import { PublicRoutes } from "../../../../../router";
import { Navigation } from "../Navigation/Navigation";

interface MobileMenuProps {
    closeModal: () => void;
}

export const MobileMenu = ({ closeModal }: MobileMenuProps) => {

  return (
    <Modal>
      <motion.div
        className={style.mobileMenu}
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={(_e, info) => {
          if (info.offset.x < -100) {
            closeModal();
          }
        }}
      >
        <Navigation items={Object.values(PublicRoutes)} />
      </motion.div>
    </Modal>
  );
};
