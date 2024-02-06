import React, { useState } from "react";
import DataList from "./DataList";
import { Cards } from "./Cards";
import { useDrop } from 'react-dnd';


export const CardComponent = () => {
  const [cards, setCards] = useState(DataList);
  const moveCard = (dragIndex, hoverIndex) => {
    const draggedCard = cards[dragIndex];
    const updatedCards = [...cards];
    updatedCards.splice(dragIndex, 1);
    updatedCards.splice(hoverIndex, 0, draggedCard);
    setCards(updatedCards);
  };

  const [, drop] = useDrop({
    accept: "CARD",
    hover: (item, monitor) => {
      const dragIndex = item.id;
      const hoverIndex = cards.findIndex((card) => card.id === item.id);
      if (dragIndex === hoverIndex) {
        return;
      }
      moveCard(dragIndex, hoverIndex);
      item.id = hoverIndex;
    },
  });

  return (
    <>
      <div ref={drop}>
        {cards.map((card, index) => {
          return <Cards key={card.id} id={index} text={card.text} />;
        })}
      </div>
    </>
  );
};
