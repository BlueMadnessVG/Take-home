import { ReactNode, useEffect, useRef } from "react";
import style from "./Modal.module.css";
import { useModalContext } from "../../context";
import { createPortal } from "react-dom";

const eventListener = "keydown";

interface ModalProps {
  children: ReactNode;
}
export const Modal = ({ children }: ModalProps) => {
  const ModalRef = useRef<HTMLDivElement>(null);
  const { state, setState } = useModalContext();

  const closeModal = () => setState(false);
  const modalRoot = document.getElementById("modal");

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setState(false);
      }
    };

    if (state) {
      document.addEventListener(eventListener, handleEsc);
    }

    return () => {
      document.removeEventListener(eventListener, handleEsc);
    };
  }, [state, setState]);

  if (!state || !modalRoot) return null;

  return createPortal(
    <div className={style.overlay} onClick={closeModal}>
        <div className="modal" onClick={handleContentClick} ref={ModalRef}>
        {children}
      </div>
    </div>,
    modalRoot
  );
};
