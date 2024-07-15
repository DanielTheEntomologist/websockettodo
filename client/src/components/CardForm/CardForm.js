import styles from "./CardForm.module.scss";

import TextInput from "../TextInput/TextInput.js";
import Button from "../Button/Button.js";

import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addCard } from "../../redux/cardsRedux.js";

const CardForm = function ({ columnId }) {
  const defaultTitle = "New Card";
  const [title, setTitle] = useState(defaultTitle);

  // const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(addCard(columnId, title));
    console.log("add card", columnId, title);
    setTitle(defaultTitle);
    e.target.reset();
  };

  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        placeholder={defaultTitle}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button>Add card</Button>
    </form>
  );
};

export default CardForm;
