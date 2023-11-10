import classnames from "classnames";
import { Link } from "react-router-dom";

import s from "./modal.module.scss";

import logoImg from "./logo_vlad.png";
import {
  CloseIcon,
  InstaIcon,
  TelegramIcon,
  FasebookIcon,
} from "../Assets/Icons";
const Modal = ({ handleToggleModal }) => {
  const styleObj = {
    up: classnames([s.modal_line, "line_up"]),
    bottom: classnames([s.modal_line, "line_bottom"]),
  };
  return (
    <div className={s.modal}>
      <div className={s.modal_up}>
        <img src={logoImg} alt="logo" className={s.modal_up_logo} />
        <button
          onClick={() => handleToggleModal(false)}
          type="button"
          className={s.modal_up_btn}
        >
          <CloseIcon />
        </button>
      </div>
      <div className={s.modal_content}>
        <ul className={s.modal_content_listLinks}>
          <li className={s.modal_content_listLinks_item}>
            <a className={s.active} href="#">
              Про мене
            </a>
          </li>
          <li className={s.modal_content_listLinks_item}>
            <a href="#">Послуги</a>
          </li>
          <li className={s.modal_content_listLinks_item}>
            <a href="#">Результат</a>
          </li>
          <li className={s.modal_content_listLinks_item}>
            <a href="#">Блог</a>
          </li>
          <li className={s.modal_content_listLinks_item}>
            <a href="#"> FQA</a>
          </li>
          <li className={s.modal_content_listLinks_item}>
            <a href="#">Контакти</a>
          </li>
        </ul>
        <ul className={s.modal_content_listIcons}>
          <li className={s.modal_content_listIcons_item}>
            <Link
              to="https://www.instagram.com/train.with.vlad/"
              className={s.modal_content_listIcons_item_link}
            >
              <InstaIcon />
            </Link>
          </li>
          <li className={s.modal_content_listIcons_item}>
            <Link
              to="https://t.me/usenkoprotrainer"
              className={s.modal_content_listIcons_item_link}
            >
              <TelegramIcon />
            </Link>
          </li>
          <li className={s.modal_content_listIcons_item}>
            <Link
              to="https://www.facebook.com/vlad.usenko.334"
              className={s.modal_content_listIcons_item_link}
            >
              <FasebookIcon />
            </Link>
          </li>
        </ul>
      </div>
      <div className={styleObj.up}></div>
      <div className={styleObj.bottom}></div>
    </div>
  );
};

export default Modal;
