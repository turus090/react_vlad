import { InstaIcon, FasebookIcon, TelegramIcon } from "../../Assets/Icons";
import s from "./content.module.scss";
import { useNavigate, Link } from "react-router-dom";

const Content = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("https://www.instagram.com/train.with.vlad/");
  };
  return (
    <div className={s.content}>
      <h2 className={s.content_title}>Тренуйся зараз</h2>
      <div className={s.content_group}>
        <div className={s.content_group_left}>
          <p className={s.content_group_left_text}>Онлайн супровід</p>
          <div className={s.btn_group}>
            <button onClick={handleClick} className={s.content_group_left_btn}>
              ЗАПИСАТИСЯ
            </button>
            <button className={s.content_group_left_btnService}>
              ОБРАТИ ПОСЛУГУ
            </button>
          </div>
        </div>
        <ul className={s.content_group_right}>
          <li className={s.content_group_right_item}>
            <Link
              to="https://www.instagram.com/train.with.vlad/"
              className={s.content_group_right_item_link}
            >
              <InstaIcon />
            </Link>
          </li>
          <li className={s.content_group_right_item}>
            <Link
              to="https://t.me/usenkoprotrainer"
              className={s.content_group_right_item_link}
            >
              <TelegramIcon />
            </Link>
          </li>
          <li className={s.content_group_right_item}>
            <Link
              to="https://www.facebook.com/vlad.usenko.334"
              className={s.content_group_right_item_link}
            >
              <FasebookIcon />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Content;
