import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import axios from "axios";
import Cryptoitem from "./Cryptoitem/Cryptoitem";
import "swiper/css";
import "swiper/css/pagination";
import styled from "./Crypto.module.scss";

const Crypto = () => {
  const [post, setPosts] = useState([]);
  useEffect(() => {
    async function getCrypto() {
      try {
        const res = await axios.get(
          "https://api.cryptorank.io/v1/currencies?api_key=f82840021aa82ad93ecdefb00892677bdfef851bed6a62967bf1c6cb6377"
        );
        //   .then((res) => res.json)
        setPosts(res.data.data);
      } catch (err) {
        console.log(err);
      }
    }
    getCrypto();
  }, []);
  const chunkArray = (arr, cnt) =>
    arr.reduce(
      (prev, cur, i, a) =>
        !(i % cnt) ? prev.concat([a.slice(i, i + cnt)]) : prev,
      []
    );
  // console.log(post);
  return (
    <div className={styled.main}>
      {/* {console.log(post)} */}
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className={styled.mySwiper}
      >
        {chunkArray(post, 7).map((items) => (
          <SwiperSlide key={items.id}>
            {items.map((item) => (
              <Cryptoitem key={item.id} {...item} />
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div>asd</div>
      {post.map((item) => (
        <div className={styled.crypt}>{item.name}</div>
      ))} */}
    </div>
  );
};

export default Crypto;
