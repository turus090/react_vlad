import { Link } from "react-router-dom";

import {
  AddressIcon,
  AdressL,
  FasebookIcon,
  FooterLogo,
  InstaIcon,
  PhoneIcon,
  TelegramIcon,
} from "../Assets/Icons";
import s from "./footer.module.scss";
import { Element } from "react-scroll";

const Footer = () => {
  return (
    <Element name="footer">
      <footer className={s.footer}>
        <h2 className={s.footer_title}> Контакти </h2>
        <iframe
          className={s.footer_map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2545.3773143595768!2d30.933097076856868!3d50.35951849390651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4e8991024cf2b%3A0x68150d5108db0fd4!2sPulsarFitness!5e0!3m2!1suk!2sua!4v1699479610919!5m2!1suk!2sua"
          width="400"
          height="300"
          title="map"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className={s.footer_address}>
          <AddressIcon />
          <p className={s.footer_address_text}>
            вулиця Київський шлях, 4, Бориспіль, Київська обл., 08300
          </p>
        </div>
        <ul className={s.footer_social}>
          <li className={s.footer_social_item}>
            <Link
              to="https://www.instagram.com/train.with.vlad/"
              className={s.footer_social_item_link}
            >
              <InstaIcon />
            </Link>
          </li>
          <li className={s.footer_social_item}>
            <Link
              to="https://t.me/usenkoprotrainer"
              className={s.footer_social_item_link}
            >
              <TelegramIcon />
            </Link>
          </li>
          <li className={s.footer_social_item}>
            <Link
              to="https://www.facebook.com/vlad.usenko.334"
              className={s.footer_social_item_link}
            >
              <FasebookIcon />
            </Link>
          </li>
        </ul>
        <div className={`${s.footer_line} ${s.footer_line_up}`}></div>
        <div className={`${s.footer_line} ${s.footer_line_bottom}`}></div>
        <p className={s.footer_copyright}>
          Copyright © 2023 CAT design studio - all rights reserved
        </p>
      </footer>
      <footer className={s.footerL}>
        <section className={s.footerL_wrapper}>
          <div className={s.footerL_left}>
            <div className={s.footerL_left_logo}>
              <FooterLogo />
              <div className={s.footerL_left_logo_text}>
                <p className={s.footerL_left_logo_text_up}>Vlad</p>
                <p className={s.footerL_left_logo_text_bottom}>Usenko</p>
              </div>
            </div>
            <h2 className={s.footerL_left_title}>Контакти</h2>
            <ul className={s.footerL_left_info}>
              <li className={s.footerL_left_info_item}>
                <PhoneIcon />
                <p className={s.footerL_left_info_item_text}>
                  +380 63 533 79 62
                </p>
              </li>
              <li className={s.footerL_left_info_item}>
                <AdressL />
                <p className={s.footerL_left_info_item_text}>
                  вулиця Київський шлях, 4, Бориспіль, Київська обл., 08300
                </p>
              </li>
            </ul>
            <ul className={s.footerL_left_social}>
              <li className={s.footerL_left_social_item}>
                <Link
                  to="https://www.instagram.com/train.with.vlad/"
                  className={s.footerL_left_social_item_link}
                >
                  <InstaIcon />
                </Link>
              </li>
              <li className={s.footerL_left_social_item}>
                <Link
                  to="https://t.me/usenkoprotrainer"
                  className={s.footerL_left_social_item_link}
                >
                  <TelegramIcon />
                </Link>
              </li>
              <li className={s.footerL_left_social_item}>
                <Link
                  to="https://www.facebook.com/vlad.usenko.334"
                  className={s.footerL_left_social_item_link}
                >
                  <FasebookIcon />
                </Link>
              </li>
            </ul>
          </div>

          <div className={s.footerL_right}>
            <iframe
              className={s.footerL_right_map}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2545.3773143595768!2d30.933097076856868!3d50.35951849390651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4e8991024cf2b%3A0x68150d5108db0fd4!2sPulsarFitness!5e0!3m2!1suk!2sua!4v1699479610919!5m2!1suk!2sua"
              width="400"
              height="300"
              title="map"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
        <section className={s.footerL_bottom}>
          <div
            className={`${s.footerL_bottom_line} ${s.footerL_bottom_line_up}`}
          ></div>
          <div
            className={`${s.footerL_bottom_line} ${s.footerL_bottom_line_bottom}`}
          ></div>
          <p className={s.footerL_bottom_copyright}>
            Copyright © 2023 CAT design studio - all rights reserved
          </p>
        </section>
      </footer>
    </Element>
  );
};

export default Footer;
