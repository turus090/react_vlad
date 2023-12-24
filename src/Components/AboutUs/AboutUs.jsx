import s from "./aboutUs.module.scss";
import aboutUsImg from "./images/about_my.png";
import aboutUsImgTablet from "./images/about_my_tablet.png";
import aboutUsImgDesktop from "./images/about_my_desctop.png";
const AboutUs = () => {
  return (
    <section className={s.aboutSection}>
      <div className={s.aboutSection_wrapper}>
        <div className={s.left}>
          <h2 className={s.aboutSection_wrapper_title}>Про мене</h2>
          <img
            src={aboutUsImg}
            alt="about us"
            className={s.aboutSection_wrapper_img}
          />
          <p className={s.aboutSection_wrapper_text}>
            Привіт, мене звати Владислав Усенко. Я створю чемпіонів з нуля. На
            моєму рахунку чемпіони та призери України, Європи, та Світу.
          </p>
          <p className={s.aboutSection_wrapper_text}>
            Працюю як індивідуально, так і розробляю програми тренувань та плани
            харчування для всіх. Успішно працюю з людьми різного віку та рівня
            підготовки. Підготовка до змагань з бодибілдингу, просто схуднути,
            набрати м'язову масу.
          </p>
        </div>
        <div className={s.right}>
          <img src={aboutUsImgTablet} alt="about us" className={s.right_img} />
          <img
            src={aboutUsImgDesktop}
            alt="about us"
            className={s.right_imgDesktop}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
