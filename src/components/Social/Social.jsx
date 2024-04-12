import styled from "./Social.module.scss";
import {
  FaTelegramPlane,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaFacebook,
  FaDiscord,
  FaReddit,
  FaGithub,
  FaTwitch,
  FaLinkedinIn,
  FaPinterest,
  FaTiktok,
  FaSnapchat,
  FaWhatsapp,
  FaMeetup,
  FaSoundcloud,
  FaBandcamp,
  FaVimeo,
  FaDailymotion,
  FaTumblr,
  FaMedium,
  FaPatreon,
  FaBlogger,
  FaQuora,
  FaVk,
  FaWeibo,
  FaLine,
  FaStackOverflow,
  FaViber,
  FaSteam,
} from "react-icons/fa";

const Social = () => {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      console.log("Широта:", position.coords.latitude);
      console.log("Долгота:", position.coords.longitude);
      console.log("Точность:", position.coords.accuracy);
      console.log("Высота:", position.coords.altitude);
    },
    function (error) {
      console.error("Ошибка получения местоположения:", error.message);
    }
  );
  return (
    <div className={styled.main}>
      <a target="_blank" href="https://web.telegram.org/">
        <FaTelegramPlane />
      </a>
      <a target="_blank" href="https://www.instagram.com/">
        <FaInstagram />
      </a>
      <a target="_blank" href="https://twitter.com/">
        <FaTwitter />
      </a>
      <a target="_blank" href="https://vk.com/">
        <FaVk />
      </a>
      <a target="_blank" href="https://www.youtube.com/">
        <FaYoutube />
      </a>
      <a target="_blank" href="https://www.facebook.com/">
        <FaFacebook />
      </a>
      <a target="_blank" href="https://store.steampowered.com//">
        <FaSteam />
      </a>
      <a target="_blank" href="https://discord.com/">
        <FaDiscord />
      </a>
      <a target="_blank" href="https://www.reddit.com/">
        <FaReddit />
      </a>
      <a target="_blank" href="https://github.com/">
        <FaGithub />
      </a>
      <a target="_blank" href="https://www.twitch.tv/">
        <FaTwitch />
      </a>
      <a target="_blank" href="https://stackoverflow.com//">
        <FaStackOverflow />
      </a>
      <a target="_blank" href="https://www.linkedin.com/">
        <FaLinkedinIn />
      </a>
      <a target="_blank" href="https://www.pinterest.com/">
        <FaPinterest />
      </a>
      <a target="_blank" href="https://www.tiktok.com/">
        <FaTiktok />
      </a>
      <a target="_blank" href="https://www.snapchat.com/">
        <FaSnapchat />
      </a>
      <a target="_blank" href="https://www.whatsapp.com/">
        <FaWhatsapp />
      </a>
      <a target="_blank" href="https://www.viber.com/ru/">
        <FaViber />
      </a>
      <a target="_blank" href="https://www.meetup.com/">
        <FaMeetup />
      </a>
      <a target="_blank" href="https://www.soundcloud.com/">
        <FaSoundcloud />
      </a>
      <a target="_blank" href="https://www.bandcamp.com/">
        <FaBandcamp />
      </a>
      <a target="_blank" href="https://www.vimeo.com/">
        <FaVimeo />
      </a>
      <a target="_blank" href="https://www.dailymotion.com/">
        <FaDailymotion />
      </a>
      <a target="_blank" href="https://www.tumblr.com/">
        <FaTumblr />
      </a>
      <a target="_blank" href="https://www.medium.com/">
        <FaMedium />
      </a>
      <a target="_blank" href="https://www.patreon.com/">
        <FaPatreon />
      </a>
      <a target="_blank" href="https://www.blogger.com/">
        <FaBlogger />
      </a>
      <a target="_blank" href="https://www.quora.com/">
        <FaQuora />
      </a>

      <a target="_blank" href="https://www.weibo.com/">
        <FaWeibo />
      </a>
      <a target="_blank" href="https://line.me/">
        <FaLine />
      </a>
    </div>
  );
};

export default Social;
