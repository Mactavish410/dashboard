import styled from "./Time.module.scss";
import React, { useState, useEffect } from "react";

const Time = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const timeString = `${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }:${seconds < 10 ? "0" + seconds : seconds}`;
  return <div className={styled.main}>{<h1>Оренбург {timeString}</h1>}</div>;
};

export default Time;
// const [posts, setPosts] = React.useState([]);
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const res = await axios.get(
//           "https://www.cbr-xml-daily.ru/daily_json.js"
//         );
//         setPosts(res.data.Valute);
//       } catch (err) {
//         console.log(err);
//         console.log("Error");
//       }
//     }
//     fetchData();
//   }, []);
//   console.log(posts);
