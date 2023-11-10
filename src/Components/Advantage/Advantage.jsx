import {
  AplleIcon,
  CollIcon,
  ControllIcon,
  GymIcon,
  HandleIcon,
  PhotoIcon,
} from "../Assets/Icons";
import s from "./advantage.module.scss";

const Advantage = () => {
  return (
    <section className={s.advantage}>
      <div className={s.advantage_wrapper}>
        <h2 className={s.advantage_title}>Онлайн супровід</h2>
        <ul className={s.advantage_cards}>
          <li className={s.advantage_cards_item}>
            <div className={s.advantage_cards_item_up}>
              <ControllIcon />
              <h3 className={s.advantage_cards_item_up_title}>Контроль</h3>
            </div>
            <p className={s.advantage_cards_item_text}>
              Контрольний тижневий звіт та аналіз проробленоїроботи за тиждень.
              У звіт входять фото заміри, вага. Звіт робимо раз у тиждень та в
              один і той самий день.
            </p>
          </li>
          <li className={s.advantage_cards_item}>
            <div className={s.advantage_cards_item_up}>
              <GymIcon />
              <h3 className={s.advantage_cards_item_up_title}>
                Програма тренувань
              </h3>
            </div>
            <p className={s.advantage_cards_item_text}>
              Програма тренувань яку я розробляю під ваші цілі, та під ваше
              обладнання для максимального результату. Мені потрібні фото
              тренажерів або відео.
            </p>
          </li>
          <li className={s.advantage_cards_item}>
            <div className={s.advantage_cards_item_up}>
              <AplleIcon />
              <h3 className={s.advantage_cards_item_up_title}>
                Програма харчуваня
              </h3>
            </div>
            <p className={s.advantage_cards_item_text}>
              Програма харчування з урахуванням ваших побажань, та урахування
              алергії та непереносність продуктів. Мені потрібна ваша продуктова
              корзина.
            </p>
          </li>
          <li className={s.advantage_cards_item}>
            <div className={s.advantage_cards_item_up}>
              <HandleIcon />
              <h3 className={s.advantage_cards_item_up_title}>Зв’язок 24/7</h3>
            </div>
            <p className={s.advantage_cards_item_text}>
              Постійний зв’язок. Ви можете задавати мені питання які Вас
              цікавлять (харчування, тренування, здоров'я, мотивація). Наша мета
              – єдина.
            </p>
          </li>
          <li className={s.advantage_cards_item}>
            <div className={s.advantage_cards_item_up}>
              <PhotoIcon />
              <h3 className={s.advantage_cards_item_up_title}>
                Перевірка виконaння вправ
              </h3>
            </div>
            <p className={s.advantage_cards_item_text}>
              Ви робите відео останнього підходу кожної вправи і надсилайте мені
              на перевірку. Від мене відео виконання вправ, якщо не знаєте як її
              виконувати.
            </p>
          </li>
          <li className={s.advantage_cards_item}>
            <div className={s.advantage_cards_item_up}>
              <CollIcon />
              <h3 className={s.advantage_cards_item_up_title}>Консультація</h3>
            </div>
            <p className={s.advantage_cards_item_text}>
              Підбір бадів для здоров’я. Провірка мед. аналізів. Стероїдні курси
              для спортсменів. Контроль аналізів на курсі. За вашим побажанням.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Advantage;
