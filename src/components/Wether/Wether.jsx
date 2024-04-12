import React, { useState, useEffect } from "react";
import styled from "./Wether.module.scss";
import axios from "axios";

const Wether = () => {
  const [posts, setPosts] = React.useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const res = await axios.get(
  //         "https://api.openweathermap.org/data/2.5/weather?q=Оренбург&appid=9cfb9d6a2b28e4a7fa4dff8dbb735338"
  //       );
  //       setPosts(res.data);
  //     } catch (err) {
  //       console.log(err);
  //       console.log("Error");
  //     }
  //   }
  //   fetchData();
  // }, []);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?lat=51.8291456&lon=55.1518208&appid=9cfb9d6a2b28e4a7fa4dff8dbb735338"
        );
        setPosts(res.data);
      } catch (err) {
        console.log(err);
        console.log("Error");
      }
    }
    fetchData();
  }, []);
  // console.log(posts);9cfb9d6a2b28e4a7fa4dff8dbb735338
  console.log(posts);
  if (posts.length === 0) return null;
  return (
    <div className={styled.main}>
      <h3 className={styled.cityname}>{posts.name}</h3>
      <h2 className={styled.temp}>{Math.round(posts.main.temp - 273)}°</h2>
      <p className={styled.tatlon}>
        H:{posts.coord.lat.toFixed(4)}° L:{posts.coord.lon.toFixed(4)}°
      </p>
      <ul>
        <li>
          <p>Ветер</p>
          <p>
            {Math.round(posts.wind.speed)}
            <span>м/с</span>
          </p>
        </li>
        <li>
          <p>Давление</p>
          <p>
            {Math.round(posts.main.pressure / 1.333)}
            <span>мм.рт.с</span>
          </p>
        </li>
        <li>
          <p>Влажность</p>
          <p>
            {posts.main.humidity}
            <span>%</span>
          </p>
        </li>
        <li>
          <p>Вода</p>
          <p>
            300
            <span>м/с</span>
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Wether;

// "http://api.openweathermap.org/geo/1.0/direct?q=Оренбург&limit=9cfb9d6a2b28e4a7fa4dff8dbb735338"
// -273
