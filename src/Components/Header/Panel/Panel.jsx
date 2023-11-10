import s from "./panel.module.scss";

import logoImg from "./img/logo_vlad.png";
import { BurgerIcon } from "./../../Assets/Icons";

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
    </div>
  );
};

export default Panel;
