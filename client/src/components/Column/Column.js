import styles from "./Column.module.scss";

import Card from "../Card/Card.js";
import CardForm from "../CardForm/CardForm.js";

const Column = ({ title, icon, id }) => {
  const cards = [
    { id: 1, columnId: 1, title: "This is Going to Hurt", isFavorite: true },
    { id: 2, columnId: 1, title: "Interpreter of Maladies", isFavorite: false },
    { id: 3, columnId: 2, title: "Harry Potter", isFavorite: false },
    { id: 4, columnId: 2, title: "Star Wars", isFavorite: false },
    { id: 5, columnId: 3, title: "The Witcher", isFavorite: true },
    { id: 6, columnId: 3, title: "Skyrim", isFavorite: false },
  ];

  const element = (
    <article className={styles.column}>
      <h1 className={styles.title}>
        <span className={styles.icon + " fa fa-" + icon}></span>
        {title}
      </h1>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            isFavorite={card.isFavorite}
          />
        ))}
      </ul>
      <CardForm columnId={id} />
    </article>
  );
  return element;
};

export default Column;
