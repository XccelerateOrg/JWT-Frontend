import React, { useState } from 'react';

import { ListGroup, ListGroupItem } from 'reactstrap'

import AddItem from './AddItem'

export default function ShoppingList(props){
  const [list, setList] = useState(props.list);

  const deleteItem = (id) => {
    const newList = list.filter( item => {
      return item.id != id;
    });
    setList(newList);
  };
    
  const addItem = (item) => {
    item.id = Math.random();
    const newList = [...list, item]
    setList(newList);
  };

  const listItems = list.map(listItem => 
      <ListGroupItem color="warning" key={listItem.id}>{listItem.item}</ListGroupItem>)

  return (
      <div>
          <AddItem addItem={addItem}/>
          <h3>Shopping List for: {props.name}</h3>
          <ListGroup>
              {listItems}
          </ListGroup>
          
      </div>
  )
}
