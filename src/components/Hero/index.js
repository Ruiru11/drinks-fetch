import { Layout } from "antd";
import HeaderItem from "../header";
import DrinkView from "../Cokctails";
import RandomDrinkView from "../Random";

const { Footer, Content } = Layout;

const Hero = () => {
  const showCockTail = (id) => {
    // history.push(`/cocktails/${id}`);
  };
  const popularData = [
    {
      idDrink: "17185",
      strDrink: "Casino",
      strDrinkAlternate: null,
      strTags: "IBA",
      strVideo: "https://www.youtube.com/watch?v=C6v8NsaDNj8",
    },
    {
      idDrink: "17185",
      strDrink: "Casino",
      strDrinkAlternate: null,
      strTags: "IBA",
      strVideo: "https://www.youtube.com/watch?v=C6v8NsaDNj8",
    },
    {
      idDrink: "17185",
      strDrink: "Casino",
      strDrinkAlternate: null,
      strTags: "IBA",
      strVideo: "https://www.youtube.com/watch?v=C6v8NsaDNj8",
    },
    {
      idDrink: "17185",
      strDrink: "Casino",
      strDrinkAlternate: null,
      strTags: "IBA",
      strVideo: "https://www.youtube.com/watch?v=C6v8NsaDNj8",
    },
    {
      idDrink: "17185",
      strDrink: "Casino",
      strDrinkAlternate: null,
      strTags: "IBA",
      strVideo: "https://www.youtube.com/watch?v=C6v8NsaDNj8",
    },
    {
      idDrink: "17185",
      strDrink: "Casino",
      strDrinkAlternate: null,
      strTags: "IBA",
      strVideo: "https://www.youtube.com/watch?v=C6v8NsaDNj8",
    },
  ];
  const getRandomDrink = () => {
    console.log("here")
  }
  const bannerImg = "https://res.cloudinary.com/dxecwuaqd/image/upload/v1620670701/tc-champagne-brands-2-1544808366.jpg"
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
        <DrinkView showCockTail={showCockTail} data={popularData} />
      </Content>

      <Footer style={{ textAlign: "center" }}>Cocktails here 2021</Footer>
    </Layout>
  );
};

export default Hero;
