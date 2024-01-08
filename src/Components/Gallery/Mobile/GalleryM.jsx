import s from "./mobile.module.scss";

import image_01 from "../img/mobile/mob_1.jpg";
import image_02 from "../img/mobile/mob_2.jpg";
import image_03 from "../img/mobile/mob_3.jpg";
import image_04 from "../img/mobile/mob_4.jpg";
import image_05 from "../img/mobile/mob_5.png";
import image_06 from "../img/mobile/mob_6.jpg";
import image_07 from "../img/mobile/mob_7.jpg";
import image_08 from "../img/mobile/mob_8.jpg";
import image_09 from "../img/mobile/mob_9.jpg";
import image_10 from "../img/mobile/mob_10.jpg";
import image_11 from "../img/mobile/mob_11.jpg";
import image_12 from "../img/mobile/mob_12.jpg";

const GalleryM = () => {
  return (
    <div className={s.gallery}>
      <img
        className={s.gallery_item}
        src={image_01}
        alt="чемпіонат України з бодибілдінгу"
      />
      <img
        className={s.gallery_item}
        src={image_02}
        alt="чемпіонат України з бодибілдінгу"
      />
      <img
        className={s.gallery_item}
        src={image_03}
        alt="чемпіонат України з бодибілдінгу"
      />
      <img
        className={s.gallery_item}
        src={image_04}
        alt="чемпіонат України з бодибілдінгу"
      />
      <img
        className={s.gallery_item}
        src={image_05}
        alt="чемпіонат України з бодибілдінгу"
      />
      <img
        className={s.gallery_item}
        src={image_06}
        alt="чемпіонат України з бодибілдінгу"
      />
      <img
        className={s.gallery_item}
        src={image_07}
        alt="чемпіонат України з бодибілдінгу"
      />
      <img
        className={s.gallery_item}
        src={image_08}
        alt="чемпіонат України з бодибілдінгу"
      />
      <img
        className={s.gallery_item}
        src={image_09}
        alt="чемпіонат України з бодибілдінгу"
      />
      <img
        className={s.gallery_item}
        src={image_10}
        alt="чемпіонат України з бодибілдінгу"
      />
      <img
        className={s.gallery_item}
        src={image_11}
        alt="чемпіонат України з бодибілдінгу"
      />
      <img
        className={s.gallery_item}
        src={image_12}
        alt="чемпіонат України з бодибілдінгу"
      />
    </div>
  );
};

export default GalleryM;
