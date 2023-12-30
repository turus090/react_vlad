import s from "./aboutUs.module.scss";
import aboutUsImg from "./images/about_my.png";
import aboutUsImgTablet from "./images/about_my_tablet.png";
import aboutUsImgDesktop from "./images/about_my_desctop.png";
import { Element } from "react-scroll";
const AboutUs = () => {
  return (
    <Element name="aboutUs">
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
              Привіт. Я Влад Усенко професійний тренер та спортсмен. З моєю
              допомогою ти досягнеш бажаних результатів та нових вершин у
              спорті. Створюю чемпіонів та призерів України, Європи та Світу !
            </p>
            <p className={s.aboutSection_wrapper_text}>
              Маю індивідуальний підхід до кожного клієнта, постановка цілей і
              розробка стратегії їх досягнення, виходячи з ваших особливостей,
              режиму дня та багатьох інших факторів, складання програми
              тренувань, плану харчування враховуючи рівень підготовки,
              обмеження по здоров’ю та багато іншого.
            </p>
            <p className={s.aboutSection_wrapper_text}>
              Маю успішний досвід роботи з людьми у сфері спорту який сягає
              понад 10 років, а саме підготовка до змагань спортсменів
              Бодибілдингу, супровід на всіх стадіях росту, робота з надмірною
              вагою, набором м’язової маси, підтримка форми тощо. 100% гарантія
              бажаного результату.
            </p>
          </div>
          <div className={s.right}>
            <img
              src={aboutUsImgTablet}
              alt="about us"
              className={s.right_img}
            />
            <img
              src={aboutUsImgDesktop}
              alt="about us"
              className={s.right_imgDesktop}
            />
          </div>
        </div>
      </section>
    </Element>
  );
};

export default AboutUs;
