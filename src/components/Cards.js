import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDrag } from 'react-dnd';

const dragStyles = {
  cursor: 'move',
  padding: '10px',
  marginBottom: '5px',
};

export const Cards = ({ id, text }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'CARD',
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} style={{ ...dragStyles, opacity: isDragging ? 0.5 : 1 }}>
      <Card style={{ width: '18rem',boxShadow:"0px 0px 10px rgba(0,0,0,0.5)",display:"inline-block"}}>
        <Card.Body>
          <Card.Text>{text}</Card.Text>
          <Button variant="primary">Move</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
