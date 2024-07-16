import styles from "./CardForm.module.scss";

import TextInput from "../TextInput/TextInput.js";
import Button from "../Button/Button.js";

import { useState } from "react";

const CardForm = function ({ columnId, onSubmit }) {
  const defaultTitle = "New Task";
  const [title, setTitle] = useState(defaultTitle);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(columnId, title);
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
