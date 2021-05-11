/* eslint-disable jsx-a11y/alt-text */
import "../View/style.css";

const DetailView = ({ data, ingredients }) => (
  <>
    <div className="parent-container">
      <div className="left-container">
        <div className="left-content">
          <img src={data.strDrinkThumb} />
        </div>
      </div>
      <div className="right-container">
        <div className="right-content">
          <h1>{data.strDrink}</h1>
          <h3>{data.strAlcoholic}</h3>
          <h1>Instructions</h1>
          <p>{data.strInstructions}</p>
          <ul>
            <li>Ingredients</li>
          </ul>
          <ol>
            <li>{data.strIngredient1}</li>
            <li>{data.strIngredient2}</li>
            <li>{data.strIngredient3}</li>
            {data.strIngredient4 && <li>{data.strIngredient4}</li>}
            {data.strIngredient5 && <li>{data.strIngredient5}</li>}
          </ol>
        </div>
      </div>
    </div>
  </>
);
export default DetailView;
