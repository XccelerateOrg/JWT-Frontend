import React, { useState } from "react";

const CurrencyConverter = () => {
  const [hkd, setHKD] = useState(0);
  const [usd, setUSD] = useState(0);

  const handleChange = (e) => {
    const name = e.target.name;
    if (name == "hkd") {
      setHKD(e.target.value);
      setUSD(e.target.value * 0.13);
    }
    if (name == "usd") {
      setUSD(e.target.value);
      setHKD(e.target.value * 7.82);
    }
  };
  return (
    <div className="ui card">
      <label>Enter hkd</label>
      <input
        type="text"
        name="hkd"
        value={hkd}
        onChange={handleChange}
      ></input>
      <label>Enter usd</label>
      <input
        type="text"
        name="usd"
        value={usd}
        onChange={handleChange}
      ></input>
    </div>
  );
};
export default CurrencyConverter;
