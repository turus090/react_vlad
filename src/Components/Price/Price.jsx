import s from "./price.module.scss";
import priceImgOnline from "./img/price_1.png";
import priceImgTraining from "./img/price_2.png";
import priceImgSteroids from "./img/price_3.png";

const Price = () => {
  return (
    <section className={s.price}>
      <div className={s.price_container}>
        <h2 className={s.price_title}>Прайс</h2>
        <ul className={s.price_cards}>
          <li className={`${s.price_cards_item} ${s.card_1}`}>
            <h3 className={s.price_cards_item_title}>Онлайн супровід</h3>
            <ul className={s.price_cards_item_list}>
              <li className={s.price_cards_item_list_service}>
                1 місяць - <span>175$</span>
              </li>
              <li className={s.price_cards_item_list_service}>
                2 місяці - <span>320$</span> (160 $ за місяць )
              </li>
              <li className={s.price_cards_item_list_service}>
                3 місяці - <span>450$</span> (150 $ за місяць)
              </li>
            </ul>
            <p className={s.price_cards_item_list_text}>
              Контрольний тижневий звіт, програма тренувань та харчування під
              ваші цілі, постійний зв’язок.
            </p>
          </li>
          <li className={`${s.price_cards_item} ${s.card_2}`}>
            <h3 className={s.price_cards_item_title}>Програма тренувань</h3>
            <ul className={s.price_cards_item_list}>
              <li className={s.price_cards_item_list_service}>
                Програма тренувань - <span>55$ </span>
              </li>
              <li className={s.price_cards_item_list_service}>
                План харчування - <span>55$</span>
              </li>
              <li className={s.price_cards_item_list_service}>
                План тренувань та харчування - <span>80$</span>
              </li>
            </ul>
            <p className={s.price_cards_item_list_text}>
              Програма тренувань та харчування - розробляю під ваші цілі, та під
              ваше обладнання для максимального результату.
            </p>
          </li>
          <li className={`${s.price_cards_item} ${s.card_3}`}>
            <h3 className={s.price_cards_item_title}>Стероїдні курси </h3>
            <ul className={s.price_cards_item_list}>
              <li className={s.price_cards_item_list_service}>
                Стероїдні курси для спортсменів -
                <span>ціна обговорюється індивідуально</span>
              </li>
            </ul>
            <p className={s.price_cards_item_list_text}>
              Консультація , контроль та перевірка аналізів на курсі. Підбір
              бадів для здоров’я.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Price;
