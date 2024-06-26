import styled from "./Cryptoitem.module.scss";

const Cryptoitem = (item) => {
  // console.log(item);
  return (
    <div className={styled.main}>
      <ul>
        <li>{item.name}</li>
        <li>{item.values.USD.price.toFixed(3)}</li>
      </ul>
    </div>
  );
};

export default Cryptoitem;
