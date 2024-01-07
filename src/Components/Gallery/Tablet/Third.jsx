import s from "../gallery.module.scss";

import tabletLeft_1_3 from "../img/thirt/item_1_3.jpg";
import tabletLeft_2_3 from "../img/thirt/item_2_3.jpg";
import tabletRight_3_3 from "../img/thirt/item_3_3.jpg";
import tabletRight_4_3 from "../img/thirt/item_4_3.jpg";
const Third = () => {
  return (
    <div className={s.gallery_contentT}>
      <div className={s.gallery_contentT_left}>
        <img
          style={{ height: "360px" }}
          src={tabletLeft_1_3}
          alt="чемпіонат України з бодибілдінгу"
        />
        <img
          style={{ height: "360px" }}
          src={tabletLeft_2_3}
          alt="чемпіонат України з бодибілдінгу"
        />
      </div>
      <div className={s.gallery_contentT_right}>
        <img
          style={{ height: "360px" }}
          src={tabletRight_3_3}
          alt="чемпіонат України з бодибілдінгу"
        />
        <img
          style={{ height: "360px" }}
          src={tabletRight_4_3}
          alt="чемпіонат України з бодибілдінгу"
        />
      </div>
    </div>
  );
};

export default Third;
