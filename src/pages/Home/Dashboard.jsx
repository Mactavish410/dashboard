import Currency from "../../components/Currency/Currency";
import Test_block from "../../components/Test_block/Test_block";
import Test_block_2 from "../../components/Test_block_2/Test_block_2";
import Time from "../../components/Time/Time";
import Wether from "../../components/Wether/Wether";
import Crypto from "../../components/Crypto/Crypto";
import styled from "./Dashboard.module.scss";
import Social from "../../components/Social/Social";

const Dashboard = () => {
  return (
    <div className={styled.main}>
      <Wether />
      <Time />
      {/* <Currency />
      <Crypto /> */}
      <Social />
      <Test_block />
      <Test_block />
      <Test_block />
      <Test_block_2 />
      <Test_block />
    </div>
  );
};

export default Dashboard;
