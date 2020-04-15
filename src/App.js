import React, {useEffect, useState} from 'react';
import './styles/App.css';
import Recipe from './components/Recipe';
import FormSubmit from './components/FormSubmit';

const App = () => {
	const APP_ID = 'ccff0a4c';
	const APP_KEY = '8eba05504f36d515a6c512abd7583041';
	
	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState('');
	const [query, setQuery] = useState('');

	useEffect(() => {
		getRecipes();
	}, [query]);

	const getRecipes = async () => {
		const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);

		const data = await response.json();
		setRecipes(data.hits);
	}

	const updateSearch = (e) => {
		setSearch(e.target.value);
	}

	const getSearch = (e) => {
		e.preventDefault();
		setQuery(search);
		setSearch('');
	}


	return (
		<div className="App">

			<FormSubmit 
				search={search}
				getSearch={getSearch}
				updateSearch={updateSearch}
			/>

			<div className="recipes">
				{recipes.map(info => (
					<Recipe
						key={info.recipe.label}
						title={info.recipe.label}
						ingredients={info.recipe.ingredients}
						nutrients={info.recipe.digest}
						calories={info.recipe.calories}
						image={info.recipe.image}
						time={info.recipe.totalTime}
					/>
				))}
			</div>
		</div>
  	);
}

export default App;
