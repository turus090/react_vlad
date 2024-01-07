import s from "../gallery.module.scss"

import tabletLeft_1_1 from "../img/item_1_1.jpg";
import tabletLeft_2_1 from "../img/item_2_1.jpg";
import tabletLeft_3_1 from "../img/item_3_1.jpg";
import tabletLeft_4_1 from "../img/item_4_1.jpg";

const FirstPage = () => { 
    return (
        <div className={s.gallery_contentT}>
          <div className={s.gallery_contentT_left}>
            <img
              className={s.gallery_contentT_left_top}
              src={tabletLeft_1_1}
              alt="чемпіонат України з бодибілдінгу"
            />
            <img
              className={s.gallery_contentT_left_bottom}
              src={tabletLeft_2_1}
              alt="чемпіонат України з бодибілдінгу"
            />
          </div>
          <div className={s.gallery_contentT_right}>
            <img
              className={s.gallery_contentT_right_top}
              src={tabletLeft_3_1}
              alt="чемпіонат України з бодибілдінгу"
            />
            <img
              className={s.gallery_contentT_right_bottom}
              src={tabletLeft_4_1}
              alt="чемпіонат України з бодибілдінгу"
            />
          </div>
        </div>
    )
}

export default FirstPage