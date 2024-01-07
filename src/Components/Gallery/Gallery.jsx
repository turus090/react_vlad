import s from "./gallery.module.scss";

import leftTopImg from "./img/left_top.jpg";
import leftBottomImg from "./img/left_bottom.jpg";
import rightTopLeftImg from "./img/right_top.jpg";
import rightTopRightImg from "./img/right_top_right.jpg";
import rightTopButtomImg from "./img/right_buttom.jpg";
import rightBottomImg from "./img/right_buttom_buttom.jpg";
import Tablet from "./Tablet/Tablet";

const Gallery = () => {
  return (
    <section className={s.gallery}>
      <div className={s.wrapper}>
        <h2 className={s.gallery_title}>Результат</h2>
        <div className={s.gallery_content}>
          <div className={s.gallery_content_left}>
            <img
              className={s.gallery_content_left_top}
              src={leftTopImg}
              alt="чемпіонат України з бодибілдінгу"
            />
            <img
              className={s.gallery_content_left_bottom}
              src={leftBottomImg}
              alt="чемпіонат з бодибілдінгу в Шанхаї"
            />
          </div>
          <div className={s.gallery_content_right}>
            <div className={s.gallery_content_right_top}>
              <img
                className={s.gallery_content_right_top_left}
                src={rightTopLeftImg}
                alt="чемпіонат України з бодибілдінгу "
              />
              <div className={s.gallery_content_right_top_right}>
                <img
                  className={s.gallery_content_right_top_right_top}
                  src={rightTopRightImg}
                  alt="чемпіонат України з бодибілдінгу"
                />
                <img
                  className={s.gallery_content_right_top_right_bottom}
                  src={rightTopButtomImg}
                  alt="чемпіонат Эвропи з бодибілдінгу "
                />
              </div>
            </div>
            <img
              className={s.gallery_content_right_bottom}
              src={rightBottomImg}
              alt="чемпіонат України з бодибілдінгу"
            />
          </div>
        </div>
        <Tablet />
      </div>
    </section>
  );
};

export default Gallery;
