import s from "./panel.module.scss";

import logoImg from "./img/logo_vlad.png";
import { BurgerIcon } from "./../../Assets/Icons";
import { Link } from "react-scroll";

const Panel = ({ handleToggleModal }) => {
  return (
    <div className={s.panel}>
      <img src={logoImg} alt="" className={s.panel_logo} />
      <button
        type="button"
        onClick={() => handleToggleModal(true)}
        className={s.panel_btn}
      >
        <BurgerIcon />
      </button>
      <nav className={s.panel_nav}>
        <Link
          to="aboutUs"
          spy={true}
          smooth={true}
          duration={500}
          className={s.panel_nav_item}
        >
          Про мене
        </Link>
        <Link
          to="advantage"
          spy={true}
          smooth={true}
          duration={500}
          className={s.panel_nav_item}
        >
          Послуги
        </Link>
        <Link className={s.panel_nav_item}>Результат</Link>
        <Link className={s.panel_nav_item}>Блог</Link>
        <Link className={s.panel_nav_item}>FAQ</Link>
        <Link
          to="footer"
          spy={true}
          smooth={true}
          duration={500}
          className={s.panel_nav_item}
        >
          Контакти
        </Link>
      </nav>
    </div>
  );
};

export default Panel;
