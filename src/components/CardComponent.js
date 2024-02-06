import React, { useState } from "react";
import DataList from "./DataList";
import { Cards } from "./Cards";
import { useDrop } from 'react-dnd';

const moveCard = (cards, dragIndex, hoverIndex) => {
  const draggedCard = cards[dragIndex];
  const updatedCards = [...cards];
  updatedCards.splice(dragIndex, 1);
  updatedCards.splice(hoverIndex, 0, draggedCard);
  return updatedCards;
};

export const CardComponent = () => {
  const [cards, setCards] = useState(DataList);

  const [, drop] = useDrop({
    accept: "CARD",
    hover: (item, monitor) => {
      const dragIndex = item.id;
      const hoverIndex = cards.findIndex((card) => card.id === dragIndex);
      
      if (dragIndex === hoverIndex) {
        return;
      }

      const updatedCards = moveCard(cards, dragIndex, hoverIndex);
      setCards(updatedCards);
      item.id = hoverIndex;
    },
  });

  return (
    <div ref={drop}>
      {cards.map((card, index) => (
        <Cards key={card.id} {...card} />
      ))}
    </div>
  );
};
