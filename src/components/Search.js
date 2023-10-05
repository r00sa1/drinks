import axios from "axios";
import { useState } from "react";

function Search() {
  const [searchWord, setSearchWord] = useState("");
  const [strDrink, setStrDrink] = useState(""); //nimi
  const [strCategory, setStrCategory] = useState(""); //kategoria
  const [strDrinkThumb, setDrinkThumb] = useState(""); //kuva
  const [strAlcoholic, setStrAlcoholic] = useState("");

  function handleInputChange(e) {
    setSearchWord(e.target.value);
  }

  function sendApi(e) {
    e.preventDefault();
    const URL =
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchWord;

    axios
      .get(URL)
      .then((response) => {
        console.log("Response on: " + JSON.stringify(response.data, null, 2));
        setStrDrink(response.data.drinks[0].strDrink);
        setStrCategory(response.data.drinks[0].strCategory);
        setDrinkThumb(response.data.drinks[0].strDrinkThumb);
        setStrAlcoholic(response.data.drinks[0].strAlcoholic);
      })
      .catch((error) => {
        alert("Could not find it. Try something else");
      });
  }

  return (
    <div>
      <h2>Search a drink</h2>
      <form onSubmit={sendApi}>
        <input
          type="text"
          value={searchWord}
          onChange={handleInputChange}
        ></input>
        <button>Search</button>
      </form>
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

export default Search;
