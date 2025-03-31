import { PublicRoutes } from "../../router";
import style from "./Header.module.css";
import { Auth, Logo, Navigation } from "./";
import { useMediaQuery } from "../../hooks";

export const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 820px)" });

  return (
    <div className={style.header}>
      {isMobile && <button className={style.header__menuButton}> X </button>}

      <Logo />
      
      {!isMobile && <Navigation items={Object.values(PublicRoutes)} />}
      
      <Auth />
    </div>
  );
};
