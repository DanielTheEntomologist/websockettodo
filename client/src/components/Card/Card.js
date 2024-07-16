import styles from "./Card.module.scss";

const Card = (props) => {
  const toggleFavorite = () => {
    console.log("toggleFavorite", props.id);
    // dispatch(toggleFavoriteCard(props.id));
  };
  const removeCardDispatcher = () => {
    console.log("removeCard", props.id);
    // dispatch(removeCard(props.id));
  };

  const editCardDispatcher = () => {
    console.log("editCard", props.id);
    props.removeCard(props.id);
    // dispatch(editCard(props.id));
  };

  let isFavoriteClass = styles.isFavorite;
  if (!props.isFavorite) {
    isFavoriteClass = "";
  }

  const element = (
    <li className={styles.card}>
      <span>{props.title}</span>
      <div className={styles.controls}>
        {/* <button
          onClick={editCardDispatcher}
          className={`fa fa-pencil`}
        ></button> */}
        {/* <button
          onClick={toggleFavorite}
          className={` ${isFavoriteClass} fa fa-star-o`}
        ></button> */}
        <button onClick={props.removeCard} className={` fa fa-trash`}></button>
      </div>
    </li>
  );

  return element;
};
export default Card;
