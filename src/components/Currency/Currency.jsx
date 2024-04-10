import styled from "./Currency.module.scss";
import Currencyitem from "./Currency/Currencyitem";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import axios from "axios";
import "swiper/css";
import "swiper/css/pagination";

const Currency = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          "https://www.cbr-xml-daily.ru/daily_json.js"
        );
        setPosts(Object.values(res.data.Valute));
      } catch (err) {
        console.log(err);
        console.log("Error");
      }
    }
    fetchData();
  }, []);
  const chunkArray = (arr, cnt) =>
    arr.reduce(
      (prev, cur, i, a) =>
        !(i % cnt) ? prev.concat([a.slice(i, i + cnt)]) : prev,
      []
    );
  posts.map((post) => console.log(post));
  console.log(posts);
  return (
    <div className={styled.main}>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className={styled.mySwiper}
      >
        {chunkArray(posts, 7).map((items) => (
          <SwiperSlide key={items.id}>
            {items.map((item) => (
              <Currencyitem key={item.id} {...item} />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Currency;
