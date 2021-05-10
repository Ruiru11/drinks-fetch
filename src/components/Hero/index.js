// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
import { Layout } from "antd";
import HeaderItem from '../header'
// import { fetchPopular, fetchRandom, fetchLatest } from '../../redux/actions'
// import { useHistory } from "react-router-dom";

const { Footer } = Layout

const Hero = () => {
  //   const dispatch = useDispatch();
  //   const history = useHistory();

  return (
    <Layout className="layout">
      <HeaderItem />

      <Footer style={{ textAlign: "center" }}>Cocktails here 2021</Footer>
    </Layout>
  );
};

export default Hero;
