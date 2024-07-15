import styles from "./Card.module.scss";

// import { removeCard } from "../../redux/cardsRedux.js";
// import { toggleFavoriteCard } from "../../redux/cardsRedux.js";
// import { useDispatch } from "react-redux";

const Card = (props) => {
  // const dispatch = useDispatch();

  const toggleFavorite = () => {
    console.log("toggleFavorite", props.id);
    // dispatch(toggleFavoriteCard(props.id));
  };
  const removeCardDispatcher = () => {
    console.log("removeCard", props.id);
    // dispatch(removeCard(props.id));
  };

  let isFavoriteClass = styles.isFavorite;
  if (!props.isFavorite) {
    isFavoriteClass = "";
  }

  const element = (
    <li className={styles.card}>
      <span>{props.title}</span>
      <div className={styles.controls}>
        <button
          onClick={toggleFavorite}
          className={` ${isFavoriteClass} fa fa-star-o`}
        ></button>
        <button
          onClick={removeCardDispatcher}
          className={` fa fa-trash`}
        ></button>
      </div>
    </li>
  );

  return element;
};
export default Card;
