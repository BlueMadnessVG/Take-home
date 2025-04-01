import { PublicRoutes } from "../../router";
import style from "./Header.module.css";
import { Auth, Logo, Navigation, MobileMenu } from "./";
import { useMediaQuery } from "../../hooks";
import { useModalContext } from "../../context";
import { MobileModalButton } from "../../components/Button";

export const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 820px)" });
  const { state, setState } = useModalContext();

  const handleOpenModal = () => {
    setState(() => !state);
  }

  return (
    <div className={style.header}>
      {isMobile && <MobileModalButton isOpen={state} onClick={handleOpenModal} />}

      <Logo />
      
      {!isMobile && <Navigation items={Object.values(PublicRoutes)} />}
      
      <Auth />

      {isMobile && state && <MobileMenu closeModal={handleOpenModal}/>}
    </div>
  );
};
