import style from "./Footer.module.css";

export const Footer = () => {
  return (
    <>
      <div className={style.footer}>
        <p className={style.copyright}>
          © 2025 Shield Plus. All Rights Reserved.
        </p>

        <div className={style.links}>
          <a href="">Terms & Conditions</a>
          <a href="">Privacy Policy</a>
          <a href="">Licensing</a>
        </div>
      </div>
    </>
  );
};
