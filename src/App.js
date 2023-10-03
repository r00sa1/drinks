import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import { FaHandHoldingHeart } from "react-icons/fa";

const URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

function App() {
  const [strDrink, setStrDrink] = useState(""); //nimi
  const [strCategory, setStrCategory] = useState(""); //kategoria
  const [strDrinkThumb, setDrinkThumb] = useState(""); //kuva
  const [strAlcoholic, setStrAlcoholic] = useState("second");

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        console.log(response.data);
        setStrDrink(response.data.drinks[0].strDrink);
        setStrCategory(response.data.drinks[0].strCategory);
        setDrinkThumb(response.data.drinks[0].strDrinkThumb);
        setStrAlcoholic(response.data.drinks[0].strAlcoholic);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <div>
      <h3>
        A drink just for You! <FaHandHoldingHeart />
      </h3>
      <p>
        <b>Drink:</b> {strDrink}
      </p>
      <p>
        <b>Category:</b> {strCategory}
      </p>
      <p>
        <b>Alcoholic:</b> {strAlcoholic}
      </p>
      <img className="image" src={strDrinkThumb} alt={strDrink} />
    </div>
  );
}

export default App;
