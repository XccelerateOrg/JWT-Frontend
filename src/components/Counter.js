import React from 'react';
import { Button } from 'reactstrap'
const counterStyle = {
    border: '2px solid #000000',
    width: '50%'
}

export default function Counter(props){
    return (
        <div style={counterStyle}>
    <h5>{(props.name === '')? 'Counter': props.name + `'s Counter`}: {props.count}</h5>
    <Button color="success" onClick={props.onClick}>+</Button>
    <Button color="danger" onClick={props.onMouseDown}>-</Button>
    <Button color="secondary" onClick={props.onButtonPress}>Delete Me</Button>
        </div>
    )
}