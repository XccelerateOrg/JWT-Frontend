import React, { useState } from 'react';

const AddItem = (props) => {
    const [item, setItem] = useState('');
    const handleSubmit = (e)=> {
        e.preventDefault();
        props.addItem({ item });
        setItem('');
    }

    const handleChange = (e)=> {
        setItem(e.target.value);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={item} onChange={handleChange}/> 
            <input type="submit" value="Submit"></input>
        </form>
    )
}
export default AddItem;