import s from "./content.module.scss";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div className={s.content}>
      <h2 className={s.content_title}>Тренуйся зараз</h2>
      <div className={s.content_group}>
        <div className={s.content_group_left}>
          <p className={s.content_group_left_text}>Онлайн супровід</p>
          <Link to="https://www.instagram.com/train.with.vlad/">
            <button className={s.content_group_left_btn}>ЗАПИСАТИСЯ</button>
          </Link>
        </div>
        <ul className="header_content_group_right"></ul>
      </div>
    </div>
  );
};

export default Content;
