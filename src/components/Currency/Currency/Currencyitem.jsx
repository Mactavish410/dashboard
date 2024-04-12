import styled from "./Currencyitem.module.scss";
import React, { useState, useEffect } from "react";

const Currencyitem = (item) => {
  const [name, setName] = useState([item.CharCode]);
  const swapClick = () => {
    setName(name === item.CharCode ? item.Name : item.CharCode);
  };
  return (
    <div className={styled.main}>
      <div
        style={name === item.Name ? { fontSize: 17 } : {}}
        onClick={swapClick}
      >
        {name}
      </div>
      <div>{item.Value.toFixed(2)}р</div>
    </div>
  );
};

export default Currencyitem;
