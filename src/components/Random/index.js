import { Button, Row, Col, Image } from "antd";

const btnStyle = {
  background: "#d22747",
  color: "#fff",
  borderColor: "#d22747",
  height: "51px",
  borderRadius: "6px",
  fontsize: "16px",
};

const RandomDrinkView = ({ getRandomDrink, bannerImg }) => (
  <Row style={{ backgroundColor: "grey" }}>
    <Col span={12} style={{ padding: "160px 160px 0" }}>
      <p style={{ color: "#fff", fontSize: "30px", fontWeight: "500" }}>
        Drink responsibly. Do not drink and drive
      </p>
      <p style={{ color: "#fff", width: "300px" }}>
        Morbi sit amet elit sed tellus semper egestas. In maximus sem ligula,
        quis lobortis arcu mattis a. Aliquam eu laoreet diam, eget sollicitudin
        nisi. Nulla facilisi. Praesent sagittis dignissim orci, sit amet dapibus
        quam viverra ut. Proin tempor blandit tortor id pharetra.
      </p>
      <Button style={btnStyle} onClick={() => getRandomDrink()}>
        Get Random Drink
      </Button>
    </Col>
    <Col span={12} style={{ marginTop: `10%` }}>
      <Image width={450} src={bannerImg} />
    </Col>
  </Row>
);

export default RandomDrinkView;
