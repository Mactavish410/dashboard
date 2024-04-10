import styled from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <div className={styled.main}>
      <ul>
        <li>
          <a href="">Dashboard</a>
        </li>
        <li>
          <a href="">Lorem</a>
        </li>
        <li>
          <a href="">Lorem222</a>
        </li>
        <li>
          <a href="">Lorem</a>
        </li>
        <li>
          <a href="">Setting</a>
        </li>
        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Navigation;
