/* eslint-disable react-hooks/exhaustive-deps */
import { Layout } from "antd";
import HeaderItem from "../header";
import DrinkView from "../Cokctails";
import RandomDrinkView from "../Random";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPopular, fetchRandom } from "../../redux/actions";
import { useHistory } from "react-router-dom";

const { Footer, Content } = Layout;

const Hero = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { data: popularData,  } = useSelector(
    (state) => state.popular
  );
  const { data: random } = useSelector((state) => state.random);

  useEffect(() => {
    dispatch(fetchPopular());
  }, []);

  useEffect(() => {
    if (random.idDrink) {
      showCockTail(random.idDrink);
    }
  }, [random]);

  const showCockTail = (id) => {
    history.push(`/cocktails/${id}`);
  };

  const getRandomDrink = () => {
    dispatch(fetchRandom());
  };
  const bannerImg =
    "https://res.cloudinary.com/dxecwuaqd/image/upload/v1620670701/tc-champagne-brands-2-1544808366.jpg";
  return (
    <Layout className="layout">
      <HeaderItem />
      <RandomDrinkView getRandomDrink={getRandomDrink} bannerImg={bannerImg} />
      <Content>
        <div
          style={{
            textAlign: "center",
            alignContent: "center",
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          <h1>Popular drinks </h1>
        </div>
        <DrinkView  data={popularData} showCockTail={showCockTail} />
      </Content>

      <Footer style={{ textAlign: "center" }}>Cocktails here 2021</Footer>
    </Layout>
  );
};

export default Hero;
