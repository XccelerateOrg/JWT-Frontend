import RandomName from "node-random-name";
import React, { useState } from "react";
import Counter from "./Counter";

const LeaderBoard = (props) => {
  const [counters, setCounters] = useState([
    { name: RandomName({ seed: Math.random() }), count: 0 },
    { name: RandomName(), count: 2 },
  ]);
  // Exercise - 2

  const addCounter = () => {
    let newCounterArray = counters.concat([
      {
        name: RandomName({ seed: Math.random() }),
        count: 0,
      },
    ]);

    // newCounterArray.push({ name: RandomName({ seed: Math.random() }), count: 0 })
    setCounters(newCounterArray);
  };

  // Exercise - 3

  const removeCounter = (i) => {
    console.log(i);
    {
      /*
You can use the filter method instead of splice:
            let newArray = [...this.state.counters]
            newArray = newArray.filter((item, index) => index !== i)
            this.setState({
                counters: newArray
            })
        */
    }
    let newArray = [...counters];
    newArray.splice(i, 1);
    setCounters(newArray);
  };

  const renderCounter = (i, name, count) => {
    return (
      <Counter
        count={count}
        name={name}
        key={i}
        onClick={() => handleClickPlus(i)}
        onMouseDown={() => handleClickMinus(i)}
        onButtonPress={() => removeCounter(i)}
      />
    );
  };

  const handleClickPlus = (i) => {
    let newObj = {
      ...counters[i],
      count: counters[i].count + 1,
    };
    let newArray = [...counters];
    newArray[i] = newObj;
    setCounters(newArray);
  };

  const handleClickMinus = (i) => {
    let newObj = {
      ...counters[i],
      count: counters[i].count - 1,
    };
    let newArray = [...counters];
    newArray[i] = newObj;
    setCounters(newArray);
  };

  // Exercise - 1
  const sortedData = []
    .concat(counters)
    .sort((a, b) => b.count - a.count)
    .map((item, i) => <div key={i}>{item.name}</div>);

  return (
    <div>
      <div>
        <button onClick={addCounter}>Add Counter</button>
      </div>

      {counters.map((counter, index) =>
        renderCounter(index, counter.name, counter.count)
      )}
      <div>
        <br />
        <br />
        <h3>LeaderBoard</h3>
        {sortedData}
      </div>
    </div>
  );
};

export default LeaderBoard;
