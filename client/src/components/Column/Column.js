import styles from "./Column.module.scss";

import { useState, useEffect } from "react";

import Card from "../Card/Card.js";
import CardForm from "../CardForm/CardForm.js";
import websocket from "../../websocket.js";

import { nanoid } from "nanoid";

const Column = ({ title, icon, id }) => {
  const [socket, setSocket] = useState(websocket);
  const columnId = 1;
  const [cards, setCards] = useState([]);

  useEffect(() => {
    socket.connect();
    socket.on("connect", () => {
      console.log("connected");
    });
    socket.on("disconnect", () => {
      console.log("disconnected");
    });

    socket.on("updateCards", (data) => {
      console.log("updateCards", data);
      setCards(data);
    });

    return () => {
      socket.disconnect();
      socket.off("connect");
      socket.off("disconnect");
      socket.off("updateCards");
    };
  }, []);

  const addCard = (columnId, title) => {
    console.log("add card", columnId, title);
    socket.emit("addCard", {
      id: nanoid(),
      columnId: columnId,
      title: title,
      isFavorite: false,
    });
  };

  const removeCard = (cardId) => {
    console.log("removeCard", cardId);
    socket.emit("removeCard", cardId);
  };

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
            removeCard={() => removeCard(card.id)}
          />
        ))}
      </ul>
      <CardForm
        columnId={columnId}
        onSubmit={(columnId, title) => addCard(columnId, title)}
      />
    </article>
  );
  return element;
};

export default Column;
