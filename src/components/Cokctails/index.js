import React from "react";
import {
  CardContent,
  CardFooterItem,
  CardImage,
  CardItem,
  CardList,
  Container,
} from "./style";

const DrinkView = ({ data, showCockTail }) => {
  console.log("now", data);
  return (
    <>
      <Container>
        <CardList>
          {data &&
            data.map((drink, i) => (
              <CardItem key={i}>
                <CardImage>
                  <img
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    alt="sata"
                  />
                </CardImage>
                <CardContent>
                  <h1>hey</h1>
                  <h1>hey</h1>
                  <h1>hey</h1>
                </CardContent>

                <CardFooterItem>
                  <button onClick={() => showCockTail(data.idDrink)}>
                   More
                  </button>
                </CardFooterItem>
              </CardItem>
            ))}
        </CardList>
      </Container>
    </>
  );
};

export default DrinkView;
