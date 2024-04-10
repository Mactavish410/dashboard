import styled from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styled.main}>
      <div className={styled.logo}>
        <svg></svg>
        <h2>Spectra</h2>
      </div>
      <input type="text" name="name" required />
      <div className={styled.settings}>
        <button>Ночь</button>
        <button>Настройки</button>
      </div>
    </div>
  );
};

export default Header;
