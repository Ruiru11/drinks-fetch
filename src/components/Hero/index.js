import { Layout } from "antd";
import HeaderItem from "../header";

const { Footer } = Layout;

const Hero = () => {
  return (
    <Layout className="layout">
      <HeaderItem />

      <Footer style={{ textAlign: "center" }}>Cocktails here 2021</Footer>
    </Layout>
  );
};

export default Hero;
