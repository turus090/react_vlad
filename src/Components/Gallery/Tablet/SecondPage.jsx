import s from "../gallery.module.scss";

import tabletLeft_2_1 from "../img/item_1_2.jpg";
import tabletLeft_2_2 from "../img/item_2_2.jpg";
import tabletRight_2_3 from "../img/item_3_2.jpg";
import tabletRight_2_4 from "../img/item_4_2.jpg";
const SecondPage = () => {
  return (
    <div className={s.gallery_contentT}>
      <div className={s.gallery_contentT_left}>
        <img
          style={{ height: "450px" }}
          src={tabletLeft_2_1}
          alt="чемпіонат України з бодибілдінгу"
        />
        <img
          style={{ height: "360px" }}
          src={tabletLeft_2_2}
          alt="чемпіонат України з бодибілдінгу"
        />
      </div>
      <div className={s.gallery_contentT_right}>
        <img
          style={{ height: "360px" }}
          src={tabletRight_2_3}
          alt="чемпіонат України з бодибілдінгу"
        />
        <img
          style={{ height: "450px" }}
          src={tabletRight_2_4}
          alt="чемпіонат України з бодибілдінгу"
        />
      </div>
    </div>
  );
};

export default SecondPage;
