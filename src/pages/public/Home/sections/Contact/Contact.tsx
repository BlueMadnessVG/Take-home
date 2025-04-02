import style from "./Contact.module.css";
import {
  FaceBookIcon,
  PhoneIcon,
  TwitterIcon,
} from "../../../../../assets/icons/Home";
import { MailIcon } from "../../../../../assets/icons/Home/Contact/Mail.icon";

export const Contact = () => {
  return (
    <section className={style.contact}>
      <div className={style.contactSection}>
        <h1 className={style.contactTitle}>Shield Plus</h1>
        <p className={style.contactText}>
          Providing reliable coverage for health, life, travel, and assets with
          seamless claim processes and 24/7 support.
        </p>

        <div className={style.contactInfo}>
          <p className={style.contactInfoItem}>
            <PhoneIcon size={32} /> +(123) 456-7890
          </p>
          <p className={style.contactInfoItem}>
            <MailIcon size={32} /> support@Shield_Plus.com
          </p>
        </div>
      </div>

      <div className={style.contactSection}>
        <h1 className={style.contactTitle}>Quick Links</h1>
        <div className={style.quickLinks}>
          <a >Insurance Plans</a>
          <a >Claims Assistance</a>
          <a >Customer Support</a>
          <a >About Us</a>
        </div>
      </div>

      <div className={style.contactSection}>
        <h1 className={style.contactTitle}>Subscribe to Our Newsletter</h1>
        <div>
          <p className={style.newsletterText}>
            Providing reliable coverage for health, life, travel, and assets
            with seamless claim processes and 24/7 support
          </p>
          <div className={style.newsletterForm}>
            <input type="text" placeholder="Your email address" />
            <button>Subscribe</button>
          </div>
        </div>

        <div className={style.socialIcons}>
          <TwitterIcon size={36} />
          <FaceBookIcon />
        </div>
      </div>
    </section>
  );
};
