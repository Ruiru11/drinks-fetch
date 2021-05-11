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
                    src={drink.strDrinkThumb}
                    alt="sata"
                  />
                </CardImage>
                <CardContent>
                  <h1>{drink.strDrink}</h1>
                  <p>Category:{drink.strCategory}</p>
                  <p>Alcoholic/Non-alcoholic:{drink.strAlcoholic}</p>
                </CardContent>

                <CardFooterItem>
                  <button onClick={() => showCockTail(drink.idDrink)}>
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
