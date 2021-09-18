import React, {useState, useEffect} from 'react';
import './App.css';
import Recipe from './components/Recipe';

function App() {


  const[recipes, setRecipes] = useState([]);
  const[search, setSearch] = useState("");
  const[query, setQuery] = useState("chicken");


  useEffect(() => {
    const getRequest = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`);
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    }
    getRequest();
  }, [query]);


  

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Food Recipes</h1>
      </header>
      <form className="search-form" onSubmit={getSearch}>
        <input type="text" className="search-bar" placeholder="Enter Ingredient" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="content">
        {recipes.map((recipe, index) => (
          <Recipe 
            key={index}
            title={recipe.recipe.label}
            image={recipe.recipe.image} 
            list={recipe.recipe}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
