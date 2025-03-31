import { ButtonUnderLine } from "../../../../components/Button";
import { useMediaQuery } from "../../../../hooks";
import style from "./Auth.module.css";

export const Auth = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 820px)" });

  return (
    <div className={style.auth}>
      {!isMobile && (
        <ButtonUnderLine fullWidth={isMobile}>
          <button className={style.auth__button} aria-label="Login">
            Login
          </button>
        </ButtonUnderLine>
      )}

      <ButtonUnderLine
        text_color="#fff"
        bg_color="#1BA986"
        fullWidth={isMobile}
      >
        <button
          className={`${style.auth__button} ${style["auth__button--primary"]}`}
        >
          Get Started
        </button>
      </ButtonUnderLine>
    </div>
  );
};
