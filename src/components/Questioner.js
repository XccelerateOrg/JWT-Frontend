import React, { useState } from 'react';

export default function Questioner(props){
    const [answer, setAnswer] = useState();

    const query = () => {
        const userInput = prompt(props.question)
        if(!userInput){
            setAnswer("Please Input an Answer");
        } else {
            setAnswer(userInput);
        }; 
    }

    return (
        <div>
            <button className="promptBox" onClick={query}>Questioner</button>
            <p>{answer}</p>
        </div>
    )
}