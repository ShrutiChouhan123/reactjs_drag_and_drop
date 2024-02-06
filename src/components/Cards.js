import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDrag } from 'react-dnd';


export const Cards = ({ id,text }) => {
    const [{ isDragging }, drag] = useDrag({
        type: 'CARD',
        item: { id },
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      });
  return (
    <>
      <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        padding: '10px',
        marginBottom: '5px',
      }}
    >
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text>
          {text}
        </Card.Text>
        <Button variant="primary">move</Button>
      </Card.Body>
    </Card>
    </div>
    </>
  );
};
